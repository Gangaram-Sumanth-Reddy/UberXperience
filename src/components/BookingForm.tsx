import { useLanguage } from '../contexts/LanguageContext'

const BookingForm = () => {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col h-full justify-center max-w-lg w-full mx-auto">
      <div className="mb-6 sm:mb-8">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-black/5 rounded-full mb-4 sm:mb-6">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="text-xs sm:text-sm font-medium text-black">Fast & Reliable</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 leading-tight">
          {t('getReadyTitle')}
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-10 leading-relaxed font-normal">
          {t('getReadyDescription')}
        </p>
      </div>
      
      <div className="relative mb-6">
        {/* Connecting Line - spans both inputs */}
        <div className="absolute left-[1.35rem] top-4 bottom-4 w-0.5 bg-black z-0"></div>
        
        <div className="flex flex-col gap-4 relative z-10">
          {/* Pickup Location */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 rounded-full border-2 border-black bg-white"></div>
            </div>
            <input
              type="text"
              placeholder={t('pickupLocation')}
              className="w-full pl-12 pr-12 py-3 sm:py-4 bg-gray-100 border-none rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base font-normal"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
              <svg
                className="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
          </div>

          {/* Dropoff Location */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
              <div className="w-4 h-4 border-2 border-black bg-white"></div>
            </div>
            <input
              type="text"
              placeholder={t('dropoffLocation')}
              className="w-full pl-12 pr-4 py-3 sm:py-4 bg-gray-100 border-none rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base font-normal"
            />
          </div>
        </div>
      </div>

      <button className="w-full bg-black text-white py-3 sm:py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-sm sm:text-base">
        {t('seePrices')}
      </button>
    </div>
  )
}

export default BookingForm

