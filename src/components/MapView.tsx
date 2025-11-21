const MapView = () => {
  return (
    <div className="w-full h-full relative overflow-hidden flex items-center justify-center" style={{ minHeight: '100%' }}>
      {/* Dynamic Background with Uber Theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
        
        {/* Route lines representing Uber's network */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,400 Q300,200 600,400 T1200,400" stroke="#ffffff" strokeWidth="3" fill="none" />
          <path d="M0,500 Q300,300 600,500 T1200,500" stroke="#ffffff" strokeWidth="2" fill="none" />
          <path d="M0,300 Q300,100 600,300 T1200,300" stroke="#ffffff" strokeWidth="2" fill="none" />
        </svg>

        {/* City skyline silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-30">
          <svg viewBox="0 0 1200 200" className="w-full h-full">
            <rect x="0" y="0" width="80" height="180" fill="#ffffff" />
            <rect x="100" y="20" width="60" height="160" fill="#ffffff" />
            <rect x="180" y="40" width="70" height="140" fill="#ffffff" />
            <rect x="270" y="0" width="90" height="180" fill="#ffffff" />
            <rect x="380" y="30" width="50" height="150" fill="#ffffff" />
            <rect x="450" y="10" width="80" height="170" fill="#ffffff" />
            <rect x="550" y="50" width="60" height="130" fill="#ffffff" />
            <rect x="630" y="0" width="100" height="180" fill="#ffffff" />
            <rect x="750" y="25" width="70" height="155" fill="#ffffff" />
            <rect x="840" y="0" width="85" height="180" fill="#ffffff" />
            <rect x="945" y="40" width="55" height="140" fill="#ffffff" />
            <rect x="1020" y="15" width="75" height="165" fill="#ffffff" />
            <rect x="1115" y="0" width="85" height="180" fill="#ffffff" />
          </svg>
        </div>

        {/* Floating transportation icons */}
        <div className="absolute top-20 left-20 opacity-20">
          <svg width="60" height="60" viewBox="0 0 24 24" fill="white">
            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
          </svg>
        </div>
        <div className="absolute top-40 right-32 opacity-15">
          <svg width="50" height="50" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-15">
          <svg width="45" height="45" viewBox="0 0 24 24" fill="white">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </div>

      {/* Uber Logo - Massive and Prominent */}
      <div className="relative z-10 flex flex-col items-center justify-center">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black text-white tracking-tight mb-4 sm:mb-6 drop-shadow-2xl" style={{
              textShadow: '0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(255,255,255,0.2)',
              letterSpacing: '-0.02em'
            }}>
              Uber
            </h1>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mt-2 sm:mt-4 px-4">
          <div className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide">
            <span className="block">Ride</span>
            <span className="block">Drive</span>
            <span className="block">Eat</span>
          </div>
          <div className="h-12 sm:h-16 md:h-20 w-px bg-white/30" />
          <div className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wide">
            <span className="block">Deliver</span>
            <span className="block">Freight</span>
            <span className="block">Business</span>
          </div>
        </div>
        <p className="text-white/80 text-base sm:text-lg md:text-xl lg:text-2xl font-light mt-4 sm:mt-6 md:mt-8 tracking-wider px-4 text-center">
          Move with confidence
        </p>
      </div>

      {/* Glowing effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/50 pointer-events-none" />
    </div>
  )
}

export default MapView

