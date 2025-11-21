import { useLanguage } from '../contexts/LanguageContext'

const HelpPage = () => {
  const { t } = useLanguage()
  const supportCategories = [
    {
      icon: (
        <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
        </svg>
      ),
      label: t('riders'),
    },
    {
      icon: (
        <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
          <circle cx="12" cy="12" r="3" fill="currentColor"/>
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      label: t('drivingDelivering'),
    },
    {
      icon: (
        <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.89-6.04-1.39-1.39-4.13-1.02-6.04.89-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
        </svg>
      ),
      label: t('uberEats'),
    },
    {
      icon: (
        <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6zm0 2h2v16H6V4zm10-2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2h-2zm0 2h2v16h-2V4z"/>
        </svg>
      ),
      label: t('merchantsRestaurants'),
    },
    {
      icon: (
        <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.92 2.01C18.72 1.42 18.16 1 17.5 1h-11c-.66 0-1.21.42-1.42 1.01L3 8v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1V8l-2.08-5.99zM6.5 12c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9s1.5.67 1.5 1.5S7.33 12 6.5 12zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 7l1.5-4.5h11L19 7H5z"/>
        </svg>
      ),
      label: t('bikesScooters'),
    },
    {
      icon: (
        <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
        </svg>
      ),
      label: t('uberForBusiness'),
    },
    {
      icon: (
        <svg className="w-12 h-12 text-black" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
        </svg>
      ),
      label: t('freight'),
    },
  ]

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-[70px] sm:pt-[80px]">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-6">
            {t('welcomeToUberSupport')}
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {t('helpDescription')}
          </p>
        </div>

        {/* Support Categories Grid */}
        <div className="grid grid-cols-7 gap-4">
          {supportCategories.map((category, index) => (
            <button
              key={index}
              className="bg-gray-100 rounded-lg p-6 flex flex-col items-center gap-4 hover:bg-gray-200 transition-colors min-h-[140px]"
            >
              <div className="flex items-center justify-center h-12">
                {category.icon}
              </div>
              <span className="text-sm font-medium text-black text-center leading-tight">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HelpPage

