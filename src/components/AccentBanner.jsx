const AccentBanner = ({
  image = '/accent-section-1-v2.webp',
  alt = 'Studio editorial banner',
  lines = [
    'ENGINEERED FOR BUSINESS SUCCESS',
    'IS DOCUMENTED,',
    'AUDITED, AND HANDED',
    'OFF YOURS TO KEEP.',
  ],
  position = 'bottom-right',
  badge = 'ENGINEERED EXCELLENCE',
}) => {
  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-[#030303]">
      {/* Background Media with overlay gradient */}
      <div className="absolute inset-0 overflow-hidden bg-black">
        <img
          src={image}
          alt={alt}
          width="1600"
          height="900"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-85 transition-transform duration-700 hover:scale-103"
          loading="lazy"
          onError={(e) => {
            // Fallback gradient if image fails to load
            e.currentTarget.style.display = 'none';
          }}
        />

        {/* Ambient Overlay Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />

        {/* Top Floating Badge */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-10">
          <span
            data-magnetic
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90 backdrop-blur-md cursor-pointer select-none"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#111111] animate-ping" />
            {badge}
          </span>
        </div>

        {/* Text Block */}
        <div
          data-magnetic
          className={`absolute z-10 max-w-[14rem] md:max-w-[18rem] text-[10px] md:text-xs font-semibold uppercase leading-[1.8] tracking-[0.2em] text-white/90 font-mono select-none ${
            position === 'bottom-right'
              ? 'bottom-8 right-6 md:bottom-12 md:right-12 text-right'
              : 'bottom-8 left-6 md:bottom-12 md:left-12 text-left'
          }`}
        >
          {lines.map((line, idx) => (
            <span key={idx} className="block drop-shadow-md">
              {line}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccentBanner;
