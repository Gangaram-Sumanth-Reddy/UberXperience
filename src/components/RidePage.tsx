import { useLanguage } from '../contexts/LanguageContext'

const RidePage = () => {
  const { t } = useLanguage()

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-[70px] sm:pt-[80px]">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="mb-20 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 -z-10 rounded-3xl"></div>
          <div className="py-16 px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 leading-tight px-4">
              {t('requestRideHopIn')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
              {t('chooseRideOptions')}
            </p>
            <button className="bg-black text-white px-10 py-5 rounded-xl font-semibold hover:bg-gray-800 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              {t('getStarted')}
            </button>
          </div>
        </div>

        {/* Ride Options */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">{t('rideOptions')}</h2>
            <p className="text-lg sm:text-xl text-gray-600">{t('choosePerfectRide')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-xl group cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">{t('uberX')}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">
                {t('affordableEveryday')}
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  {t('upTo4Passengers')}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  {t('affordablePricing')}
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  {t('availableMostCities')}
                </li>
              </ul>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-xl group cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Uber Comfort</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Newer cars with extra legroom
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Up to 4 passengers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Newer, more spacious cars
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Top-rated drivers
                </li>
              </ul>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-xl group cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Uber Black</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Premium rides in luxury vehicles
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Up to 4 passengers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Professional drivers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Premium vehicles
                </li>
              </ul>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-xl group cursor-pointer">
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">UberXL</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Affordable rides for groups up to 6
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Up to 6 passengers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Larger vehicles
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Great for groups
                </li>
              </ul>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-green-500 transition-all hover:shadow-xl group cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Uber Green</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Hybrid and electric vehicles
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Up to 4 passengers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Environmentally friendly
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Available in select cities
                </li>
              </ul>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-blue-500 transition-all hover:shadow-xl group cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <svg className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-3">Uber WAV</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Wheelchair-accessible vehicles
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Wheelchair accessible
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Trained drivers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                  Same pricing as UberX
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">How it works</h2>
            <p className="text-lg sm:text-xl text-gray-600">Get where you need to go in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl sm:text-3xl font-bold">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-black mb-2 sm:mb-3">Request</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Open the app and enter your destination
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl sm:text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Match</h3>
              <p className="text-gray-600 leading-relaxed">
                We'll connect you with a nearby driver
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl sm:text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Ride</h3>
              <p className="text-gray-600 leading-relaxed">
                Track your driver's arrival and enjoy the trip
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-black to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-white text-2xl sm:text-3xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Pay</h3>
              <p className="text-gray-600 leading-relaxed">
                Your payment is processed automatically
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">Why ride with Uber</h2>
            <p className="text-lg sm:text-xl text-gray-600">Experience the benefits that make Uber the smart choice</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <svg className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">Safety first</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Every ride is insured. Our safety features help you get where you need to go safely.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">24/7 availability</h3>
              <p className="text-gray-600 leading-relaxed">
                Request a ride anytime, anywhere. Available 24 hours a day, 7 days a week.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Transparent pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                See the price before you ride. No surprises, no hidden fees.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors">
                <svg className="w-7 h-7 text-purple-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Track your ride</h3>
              <p className="text-gray-600 leading-relaxed">
                Watch your driver approach in real-time on the map. Know exactly when they'll arrive.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors">
                <svg className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Share your trip</h3>
              <p className="text-gray-600 leading-relaxed">
                Share your trip details with friends and family so they can follow your journey.
              </p>
            </div>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 transition-colors">
                <svg className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Rate your driver</h3>
              <p className="text-gray-600 leading-relaxed">
                Rate your experience after every trip. Help us maintain high quality standards.
              </p>
            </div>
          </div>
        </div>

        {/* Safety Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">Your safety is our priority</h2>
            <p className="text-lg sm:text-xl text-gray-600">Comprehensive safety measures for every ride</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-red-500 transition-all hover:shadow-xl group bg-gradient-to-br from-red-50 to-white">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                <svg className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Background checks</h3>
              <p className="text-gray-600 leading-relaxed">
                Every driver must pass a background check before they can drive with Uber.
              </p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-blue-500 transition-all hover:shadow-xl group bg-gradient-to-br from-blue-50 to-white">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <svg className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Insurance coverage</h3>
              <p className="text-gray-600 leading-relaxed">
                Every trip is covered by commercial auto insurance for your peace of mind.
              </p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-green-500 transition-all hover:shadow-xl group bg-gradient-to-br from-green-50 to-white">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors">
                <svg className="w-7 h-7 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">24/7 support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our support team is available around the clock to help with any issues.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">Transparent pricing</h2>
            <p className="text-lg sm:text-xl text-gray-600">Know what you'll pay before you ride</p>
          </div>
          <div className="p-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200 shadow-xl">
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Uber uses dynamic pricing to ensure reliable availability. Prices may increase during times of high demand.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-3 h-3 rounded-full bg-black flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">See the price before you ride</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-3 h-3 rounded-full bg-black flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">No surge pricing surprises</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-3 h-3 rounded-full bg-black flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Pay with cash or card</p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                <div className="w-3 h-3 rounded-full bg-black flex-shrink-0"></div>
                <p className="text-gray-700 text-lg">Automatic receipts sent to your email</p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule Rides */}
        <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">Schedule rides in advance</h2>
          <div className="p-8 border border-gray-200 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              Need to be somewhere at a specific time? Schedule your ride up to 30 days in advance.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                <span>Schedule rides up to 30 days ahead</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                <span>Get matched with a driver in advance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                <span>Receive reminders before your ride</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-black mt-2"></div>
                <span>Cancel or modify anytime before pickup</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ride for Others */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">Ride for others</h2>
          <div className="p-8 bg-gray-50 rounded-lg">
            <p className="text-lg text-gray-700 mb-4">
              Request a ride for someone else. Perfect for family members, friends, or colleagues.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">How it works</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>1. Enter the rider's pickup location</li>
                  <li>2. Enter their destination</li>
                  <li>3. Request the ride</li>
                  <li>4. The rider receives trip updates</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">Perfect for</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Family members</li>
                  <li>• Friends visiting</li>
                  <li>• Colleagues</li>
                  <li>• Anyone who needs a ride</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Download App */}
        <div className="mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">Download the Uber app</h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
            Get a ride in minutes. Or become a driver and earn money on your schedule.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <span className="text-sm font-medium text-black">Download for iOS</span>
            </button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
              <span className="text-sm font-medium text-black">Download for Android</span>
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <div className="inline-block p-1 bg-gradient-to-r from-black to-gray-800 rounded-2xl">
            <button className="bg-black text-white px-12 py-5 rounded-xl font-bold hover:bg-gray-800 transition-all text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
              Request a ride
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RidePage

