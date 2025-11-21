import { useLanguage } from '../contexts/LanguageContext'

interface LoginPageProps {
  onLogin: () => void
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
  const { t } = useLanguage()
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-950 via-black to-gray-950 relative overflow-hidden">
      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 animate-gradient-shift" />
        
        {/* Animated floating orbs - minimal and cool */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl animate-pulse-slow" />
        
        {/* Animated geometric shapes */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-white/5 rounded-lg rotate-45 animate-spin-slow" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 border border-white/5 rounded-full animate-pulse-slow" />
        
        {/* Animated particles/dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        {/* Animated grid lines - ultra minimal */}
        <div className="absolute inset-0 opacity-[0.02] animate-grid-shift" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }} />
        
        {/* Animated light rays */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent animate-light-ray" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent animate-light-ray-delayed" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-8 sm:py-12">
        {/* Creative Premium Uber Logo */}
        <div className="mb-12 relative logo-container">
          <div className="relative inline-block">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full transform scale-150" />
            
            {/* Main Logo with gradient */}
            <h1 
              className="relative text-6xl sm:text-7xl md:text-9rem lg:text-[12rem] font-black tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #ffffff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.04em',
                filter: 'drop-shadow(0 0 40px rgba(255,255,255,0.3)) drop-shadow(0 0 80px rgba(255,255,255,0.2))',
                textShadow: '0 0 100px rgba(255,255,255,0.1)'
              }}
            >
              Uber
            </h1>
            
            {/* Creative accent line */}
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            
            {/* Floating particles effect */}
            <div className="absolute -top-8 -left-8 w-3 h-3 bg-white/30 rounded-full blur-sm animate-pulse" />
            <div className="absolute -top-4 -right-12 w-2 h-2 bg-white/40 rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="absolute -bottom-8 left-12 w-2.5 h-2.5 bg-white/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mb-16 text-center">
          <p className="text-white/95 text-2xl md:text-3xl font-light mb-4 tracking-wide">
            {t('welcomeToUber')}
          </p>
          <p className="text-white/70 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto">
            {t('yourJourneyStarts')}
          </p>
        </div>

        {/* Dive In Button - Enhanced */}
        <button
          onClick={onLogin}
          className="group bg-white text-black px-12 md:px-16 py-4 md:py-5 rounded-full text-lg md:text-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl hover:shadow-white/30 mb-16"
          style={{
            boxShadow: '0 10px 50px rgba(255,255,255,0.25), 0 0 0 0 rgba(255,255,255,0.5)',
            animation: 'pulse-glow 2s ease-in-out infinite'
          }}
        >
          <span className="flex items-center gap-2">
            {t('diveIn')}
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* CodeGai Information Card */}
        <div className="max-w-2xl w-full mt-6 sm:mt-8">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-semibold">{t('aboutCodeGai')}</h3>
            </div>
            
            <div className="space-y-4 text-white/80 text-sm md:text-base leading-relaxed">
              <p>
                {t('codeGaiDescription1')}
              </p>
              <p>
                {t('codeGaiDescription2')}
              </p>
            </div>

            {/* CodeGai Badge */}
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center gap-2">
              <span className="text-white/60 text-xs font-medium">{t('builtWith')}</span>
              <span className="text-white font-bold text-sm">CodeGai</span>
              <span className="text-white/40 text-xs">•</span>
              <span className="text-white/60 text-xs">{t('seamlessDigitalExperiences')}</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-white/40 text-xs md:text-sm mt-8 text-center">
          {t('noCredentialsRequired')}
        </p>
      </div>

      {/* Premium radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40 pointer-events-none" />
      
      {/* CSS Animations */}
      <style>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 10px 50px rgba(255,255,255,0.25), 0 0 0 0 rgba(255,255,255,0.5);
          }
          50% {
            box-shadow: 0 10px 50px rgba(255,255,255,0.35), 0 0 0 8px rgba(255,255,255,0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes float-reverse {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-30px, 30px) scale(0.9);
          }
          66% {
            transform: translate(20px, -20px) scale(1.1);
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes particle {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(calc(var(--random-x, 0) * 1px));
            opacity: 0;
          }
        }
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes grid-shift {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(100px, 100px);
          }
        }
        @keyframes light-ray {
          0%, 100% {
            opacity: 0;
            transform: translateX(0);
          }
          50% {
            opacity: 0.1;
            transform: translateX(10px);
          }
        }
        @keyframes light-ray-delayed {
          0%, 100% {
            opacity: 0;
            transform: translateX(0);
          }
          50% {
            opacity: 0.1;
            transform: translateX(-10px);
          }
        }
        .logo-container {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: float-reverse 25s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-particle {
          animation: particle var(--duration, 5s) linear infinite;
        }
        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
          background-size: 200% 200%;
        }
        .animate-grid-shift {
          animation: grid-shift 20s linear infinite;
        }
        .animate-light-ray {
          animation: light-ray 4s ease-in-out infinite;
        }
        .animate-light-ray-delayed {
          animation: light-ray-delayed 4s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  )
}

export default LoginPage

