import React, { useRef, useEffect, FC, ReactNode, useState } from 'react';
import gsap from 'gsap';
import { vec2 } from 'vecteur';

interface MagneticCursorProps {
  children: ReactNode;
  magneticFactor?: number;
  lerpAmount?: number;
  hoverPadding?: number;
  hoverAttribute?: string;
  cursorSize?: number;
  cursorColor?: string;
  blendMode?: 'difference' | 'exclusion' | 'normal' | 'screen' | 'overlay';
  cursorClassName?: string;
  shape?: 'circle' | 'square' | 'rounded-square';
  disableOnTouch?: boolean;
  speedMultiplier?: number;
  maxScaleX?: number;
  maxScaleY?: number;
  contrastBoost?: number;
  className?: string;
}

interface CursorState {
  el: HTMLDivElement | null;
  pos: {
    current: any;
    target: any;
    previous: any;
  };
  hover: { isHovered: boolean };
  isDetaching: boolean;
}

export const MagneticCursor: FC<MagneticCursorProps> = ({
  children,
  lerpAmount = 0.1,
  magneticFactor = 0.2,
  hoverPadding = 12,
  hoverAttribute = 'data-magnetic',
  cursorSize = 24,
  cursorColor = 'white',
  blendMode = 'exclusion',
  cursorClassName = '',
  shape = 'circle',
  disableOnTouch = true,
  speedMultiplier = 0.02,
  maxScaleX = 1,
  maxScaleY = 0.3,
  className = '',
}) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const cursorStateRef = useRef<CursorState | null>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const configRef = useRef({
    magneticFactor,
    speedMultiplier,
    maxScaleX,
    maxScaleY,
    cursorSize,
    lerpAmount,
    hoverPadding,
  });

  useEffect(() => {
    configRef.current = {
      magneticFactor,
      speedMultiplier,
      maxScaleX,
      maxScaleY,
      cursorSize,
      lerpAmount,
      hoverPadding,
    };
  }, [magneticFactor, speedMultiplier, maxScaleX, maxScaleY, cursorSize, lerpAmount, hoverPadding]);

  useEffect(() => {
    const isTouch =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia('(hover: none)').matches;
    setIsTouchDevice(isTouch);
  }, []);

  useEffect(() => {
    if (disableOnTouch && isTouchDevice) return;
    const cursorEl = cursorRef.current;
    const wrapperEl = wrapperRef.current;

    if (!cursorEl || !wrapperEl) return;

    gsap.set(cursorEl, { xPercent: -50, yPercent: -50, opacity: 0 });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const detachDuration = prefersReducedMotion ? 0.1 : 0.35;

    if (!cursorStateRef.current) {
      cursorStateRef.current = {
        el: cursorEl,
        pos: {
          current: vec2(-100, -100),
          target: vec2(-100, -100),
          previous: vec2(-100, -100),
        },
        hover: { isHovered: false },
        isDetaching: false,
      };
    }

    const update = () => {
      const state = cursorStateRef.current;
      if (!state || state.hover.isHovered) return;

      const { speedMultiplier, maxScaleX, maxScaleY, lerpAmount } = configRef.current;
      const effectiveLerp = prefersReducedMotion ? 1 : lerpAmount;

      state.pos.current.lerp(state.pos.target, effectiveLerp);
      const delta = state.pos.current.clone().sub(state.pos.previous);
      state.pos.previous.copy(state.pos.current);

      if (state.isDetaching) {
        gsap.set(state.el, {
          x: state.pos.current.x,
          y: state.pos.current.y,
          scaleX: 1,
          scaleY: 1,
          rotate: 0,
          overwrite: 'auto',
        });
      } else {
        const speed = Math.sqrt(delta.x * delta.x + delta.y * delta.y) * speedMultiplier;
        gsap.set(state.el, {
          x: state.pos.current.x,
          y: state.pos.current.y,
          rotate: Math.atan2(delta.y, delta.x) * (180 / Math.PI),
          scaleX: 1 + Math.min(speed, maxScaleX),
          scaleY: 1 - Math.min(speed, maxScaleY),
          overwrite: 'auto',
        });
      }
    };

    const handlePointerEnter = (event: PointerEvent) => {
      const state = cursorStateRef.current;
      if (!state) return;
      const rect = wrapperEl.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      state.pos.current.x = x;
      state.pos.current.y = y;
      state.pos.target.x = x;
      state.pos.target.y = y;
      state.pos.previous.x = x;
      state.pos.previous.y = y;

      gsap.set(cursorEl, { x, y });
      gsap.to(cursorEl, { opacity: 1, duration: 0.25, overwrite: 'auto' });
    };

    const handlePointerMove = (event: PointerEvent) => {
      const state = cursorStateRef.current;
      if (!state) return;

      const rect = wrapperEl.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      state.pos.target.x = x;
      state.pos.target.y = y;

      const isInside =
        x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;

      gsap.to(cursorEl, { opacity: isInside ? 1 : 0, duration: 0.2, overwrite: 'auto' });

      const target = event.target as HTMLElement;
      const isTextContent =
        target &&
        (['P', 'SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(target.tagName) ||
          window.getComputedStyle(target).cursor === 'text');

      if (isTextContent && !state.hover.isHovered && !state.isDetaching) {
        gsap.to(cursorEl, { scaleX: 0.5, scaleY: 1.5, duration: 0.3, overwrite: 'auto' });
      }
    };

    const handlePointerLeave = () => {
      gsap.to(cursorEl, { opacity: 0, duration: 0.25, overwrite: 'auto' });
    };

    gsap.ticker.add(update);
    wrapperEl.addEventListener('pointerenter', handlePointerEnter);
    wrapperEl.addEventListener('pointermove', handlePointerMove);
    wrapperEl.addEventListener('pointerleave', handlePointerLeave);

    const cleanupFunctions: (() => void)[] = [];

    const magneticElements = gsap.utils.toArray<HTMLElement>(
      wrapperEl.querySelectorAll(`[${hoverAttribute}]`)
    );

    magneticElements.forEach((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
      const yTo = gsap.quickTo(el, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

      const handleElementPointerEnter = () => {
        const state = cursorStateRef.current;
        if (!state) return;
        const { magneticFactor, hoverPadding } = configRef.current;

        state.hover.isHovered = true;
        state.isDetaching = false;

        const bounds = el.getBoundingClientRect();
        const wrapperBounds = wrapperEl.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(el);
        const magneticColor = el.getAttribute('data-magnetic-color') || cursorColor;
        const dynamicPadding = hoverPadding * (1 + magneticFactor);
        const centerX = bounds.left - wrapperBounds.left + bounds.width / 2;
        const centerY = bounds.top - wrapperBounds.top + bounds.height / 2;

        gsap.killTweensOf(cursorEl);
        gsap.to(cursorEl, {
          x: centerX,
          y: centerY,
          width: bounds.width + dynamicPadding * 2,
          height: bounds.height + dynamicPadding * 2,
          borderRadius: computedStyle.borderRadius,
          backgroundColor: magneticColor,
          scaleX: 1,
          scaleY: 1,
          rotate: 0,
          opacity: 1,
          duration: 0.3,
          ease: 'power3.out',
          overwrite: 'auto',
        });
      };

      const handleElementPointerLeave = () => {
        const state = cursorStateRef.current;
        if (!state) return;
        const currentX = gsap.getProperty(cursorEl, 'x') as number;
        const currentY = gsap.getProperty(cursorEl, 'y') as number;

        state.pos.current.x = currentX;
        state.pos.current.y = currentY;
        state.pos.previous.x = currentX;
        state.pos.previous.y = currentY;

        state.hover.isHovered = false;
        state.isDetaching = true;

        const { cursorSize } = configRef.current;
        const shapeBorderRadius =
          shape === 'circle' ? '50%' : shape === 'square' ? '0' : '8px';

        gsap.killTweensOf(cursorEl);
        gsap.to(cursorEl, {
          width: cursorSize,
          height: cursorSize,
          borderRadius: shapeBorderRadius,
          backgroundColor: cursorColor,
          scaleX: 1,
          scaleY: 1,
          duration: detachDuration,
          ease: 'power3.out',
          overwrite: 'auto',
          onComplete: () => {
            state.isDetaching = false;
          },
        });
      };

      let rafId: number | null = null;
      const handleElementPointerMove = (event: PointerEvent) => {
        if (rafId) return;
        rafId = requestAnimationFrame(() => {
          const { clientX, clientY } = event;
          const { height, width, left, top } = el.getBoundingClientRect();
          const { magneticFactor } = configRef.current;
          xTo((clientX - (left + width / 2)) * magneticFactor);
          yTo((clientY - (top + height / 2)) * magneticFactor);
          rafId = null;
        });
      };

      const handleElementPointerOut = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener('pointerenter', handleElementPointerEnter);
      el.addEventListener('pointerleave', handleElementPointerLeave);
      el.addEventListener('pointermove', handleElementPointerMove);
      el.addEventListener('pointerout', handleElementPointerOut);

      cleanupFunctions.push(() => {
        el.removeEventListener('pointerenter', handleElementPointerEnter);
        el.removeEventListener('pointerleave', handleElementPointerLeave);
        el.removeEventListener('pointermove', handleElementPointerMove);
        el.removeEventListener('pointerout', handleElementPointerOut);
      });
    });

    return () => {
      gsap.ticker.remove(update);
      wrapperEl.removeEventListener('pointerenter', handlePointerEnter);
      wrapperEl.removeEventListener('pointermove', handlePointerMove);
      wrapperEl.removeEventListener('pointerleave', handlePointerLeave);
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [disableOnTouch, isTouchDevice, hoverPadding, hoverAttribute, cursorColor, shape]);

  if (disableOnTouch && isTouchDevice) return <>{children}</>;

  const styles: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 30,
    pointerEvents: 'none',
    opacity: 0,
    willChange: 'transform, width, height, border-radius',
    backgroundColor: cursorColor,
    mixBlendMode: blendMode as any,
    width: cursorSize,
    height: cursorSize,
    borderRadius: shape === 'circle' ? '50%' : shape === 'square' ? '0' : '8px',
  };

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      <div ref={cursorRef} className={`magnetic-cursor ${cursorClassName}`} style={styles} />
      {children}
    </div>
  );
};