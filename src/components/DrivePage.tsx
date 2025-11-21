import { useLanguage } from '../contexts/LanguageContext'

const DrivePage = () => {
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
              {t('driveWhenYouWant')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 px-4">
              {t('earnOnSchedule')}
            </p>
            <div className="flex gap-4 justify-center mb-6">
              <button className="bg-black text-white px-10 py-5 rounded-xl font-semibold hover:bg-gray-800 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                {t('getStarted')}
              </button>
              <button className="bg-gray-100 text-black px-10 py-5 rounded-xl font-semibold hover:bg-gray-200 transition-all text-lg border-2 border-gray-200">
                {t('logIn')}
              </button>
            </div>
            <button className="text-blue-600 hover:underline text-lg font-medium">
              {t('signUpToDrive')}
            </button>
          </div>
        </div>

        {/* Why Drive Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Why drive with us</h2>
            <p className="text-xl text-gray-600">Flexibility and support when you need it</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 border-2 border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-xl text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-black transition-colors">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{t('setOwnHours')}</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {t('setOwnHoursDescription')}
              </p>
            </div>
            <div className="p-6 sm:p-8 border-2 border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-xl text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-black transition-colors">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{t('getPaidFast')}</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {t('getPaidFastDescription')}
              </p>
            </div>
            <div className="p-6 sm:p-8 border-2 border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-xl text-center group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-black transition-colors">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{t('getSupport')}</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {t('getSupportDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* How Driving Works */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 sm:mb-8">How driving works</h2>
          
          {/* Here's what you need */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-black mb-6">Here's what you need to sign up</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <h4 className="text-xl font-semibold text-black mb-4">To drive</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-black mb-2">Requirements</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Be at least 18 years old</li>
                      <li>Clear a background screening</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">Documents</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Valid driver's license (private or commercial), if you plan to drive</li>
                      <li>Proof of residency in your city, state or province</li>
                      <li>Car documents such as commercial insurance, vehicle registration certificate, permit</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black mb-4">To deliver</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-black mb-2">Requirements</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Be at least 18 years old</li>
                      <li>Clear a background screening</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-black mb-2">Documents</h5>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Valid ID</li>
                      <li>Proof of residency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Signup Process */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-black mb-6">Signup process</h3>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-black bg-gray-50">
                <p className="text-gray-700">Visit the nearest Partner Seva Kendra in your city</p>
              </div>
              <div className="p-4 border-l-4 border-black bg-gray-50">
                <p className="text-gray-700">Submit documents and photo</p>
              </div>
              <div className="p-4 border-l-4 border-black bg-gray-50">
                <p className="text-gray-700">Provide information for a background check</p>
              </div>
            </div>
          </div>

          {/* Join a Fleet */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-3">Join a fleet</h3>
              <p className="text-gray-700 mb-4">
                Find and join a fleet partner and start driving for them using the Uber app.
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-3">Become a fleet partner</h3>
              <p className="text-gray-700 mb-4">
                Start making money. Connect your drivers and upload the required documents to your profile.
              </p>
              <button className="text-blue-600 hover:underline font-medium">Learn more</button>
            </div>
          </div>
        </div>

        {/* Safety Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">Safety on the road</h2>
          <p className="text-xl text-gray-700 mb-8">
            Your safety drives us to continuously raise the bar.
          </p>
          <button className="text-blue-600 hover:underline font-medium mb-8">Learn more</button>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">Protection on every trip</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Each trip you take with the Uber app is insured to protect you and your rider.
              </p>
              <button className="text-blue-600 hover:underline font-medium text-sm sm:text-base">Learn more</button>
            </div>
            <div className="p-5 sm:p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">Help if you need it</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                The Emergency Button calls 911. The app displays your trip details so you can quickly share them with authorities.
              </p>
              <button className="text-blue-600 hover:underline font-medium text-sm sm:text-base">Learn more</button>
            </div>
            <div className="p-5 sm:p-6 border border-gray-200 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">Community Guidelines</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Our standards help to create safe connections and positive interactions with everyone. Learn how our guidelines apply to you.
              </p>
              <button className="text-blue-600 hover:underline font-medium text-sm sm:text-base">Learn more</button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-2">Can I drive with Uber in my city?</h3>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-2">What are the requirements to drive with Uber?</h3>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-2">Is the Uber platform safe?</h3>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-2">Do I need my own car?</h3>
            </div>
          </div>
        </div>

        {/* Driver App Section */}
        <div className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">The Driver app</h2>
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
            Easy to use and reliable, the app was built for drivers, with drivers. It shows you everything you need to know to become a driver with Uber.
          </p>
          <button className="text-blue-600 hover:underline font-medium mb-8">See how it works</button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-black mb-3 sm:mb-4">Drive your way in the app</h3>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-black mb-4">Download the Driver app</h3>
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-lg mx-auto mb-4 overflow-hidden flex items-center justify-center bg-white">
                <img 
                  src="/images/QR-Code.jpg" 
                  alt="QR Code to download Driver app"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  width="200"
                  height="200"
                />
              </div>
              <p className="text-gray-700 mb-4">Scan to download</p>
            </div>
          </div>
        </div>

        {/* Sign Up CTA */}
        <div className="mb-16 text-center">
          <button className="bg-black text-white px-8 py-4 rounded-lg font-medium hover:bg-gray-800 transition-colors text-lg">
            Sign up to drive
          </button>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-gray-200 text-sm text-gray-600 space-y-2">
          <p>
            This is a promotional offer and is not a promise or guarantee of future earnings. This offer is available only to new drivers and delivery people on the Uber app who (i) have never previously signed up to drive or deliver with Uber; (ii) receive this offer directly from Uber and see it in the guarantee tracker of the Uber Driver app; (iii) are cleared to drive or deliver with Uber; and (iv) complete the number of trips or deliveries displayed in the guarantee tracker in the city where they signed up to drive within the specified timeframe. Offer terms such as number of trips or deliveries and reward amount may vary by location. The guarantee offer that you see in the app replaces any guarantee amounts Uber previously offered you.
          </p>
          <p>
            Earnings from your trips (after services fees and certain charges are deducted, such as city or local government charges) are included toward your guaranteed amount; any tips and promotions you make are on top of that amount. Earnings from your deliveries (after services fees and certain charges are deducted, such as city or local government charges) and Eats Boost promotions are included toward your offer amount; any tips and additional promotions you make are on top of that amount.
          </p>
          <p>
            Any payment due will be automatically added to your account after you complete the required trips. Each completed trip or delivery counts as one trip or delivery toward your minimum requirement. Canceled trips or deliveries do not count. This offer is only valid for those who received it from Uber (via an email, an ad, a web page, or a unique referral link) and meet the eligibility requirements. Uber reserves the right to withhold or deduct payments that it determines or believes were fraudulent, illegal, in error, or in violation of the driver terms or these terms. Limited time only. Offer and terms are subject to change.
          </p>
        </div>
      </div>
    </div>
  )
}

export default DrivePage

