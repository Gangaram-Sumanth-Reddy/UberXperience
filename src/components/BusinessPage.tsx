import { useLanguage } from '../contexts/LanguageContext'

const BusinessPage = () => {
  const { t } = useLanguage()

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto pt-[70px] sm:pt-[80px]">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12">
        {/* Welcome Section */}
        <div className="mb-20 text-center relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 -z-10"></div>
          <div className="relative py-16 px-8">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-purple-100/30 rounded-full blur-3xl -z-10"></div>
            <h1 className="text-5xl font-bold text-black mb-6 leading-tight relative z-10">
              {t('welcomeSumanth')}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10 relative z-10">
              {t('businessWelcomeDescription')}
            </p>
            <button className="bg-black text-white px-10 py-5 rounded-xl font-semibold hover:bg-gray-800 transition-all text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 relative z-10">
              {t('signUpCompany')}
            </button>
          </div>
        </div>

        {/* What Fits Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">{t('whatFitsNeeds')}</h2>
            <p className="text-lg sm:text-xl text-gray-600">{t('chooseSolution')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-2xl -z-10"></div>
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-black mb-3 sm:mb-4">{t('employeePrograms')}</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {t('employeeProgramsDescription')}
              </p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100/20 to-teal-100/20 rounded-full blur-2xl -z-10"></div>
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t('ridesForOthers')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('ridesForOthersDescription')}
              </p>
            </div>
            <div className="p-8 border-2 border-gray-200 rounded-2xl hover:border-black transition-all hover:shadow-xl group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100/20 to-orange-100/20 rounded-full blur-2xl -z-10"></div>
              <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <svg className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{t('flexibleGiftSolutions')}</h3>
              <p className="text-gray-600 leading-relaxed">
                {t('flexibleGiftSolutionsDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* Global Platform Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">
              {t('globalPlatform')}
            </h2>
            <p className="text-xl text-gray-600">{t('powerfulFeatures')}</p>
          </div>
          
          <div className="space-y-6">
            {/* Reduce Costs */}
            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-black mb-4">
                {t('reduceCosts')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('reduceCostsDescription')} {t('monitorSpending')}
              </p>
            </div>

            {/* Sustainability */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border-2 border-green-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-black mb-4">
                {t('meetSustainabilityGoals')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('meetSustainabilityDescription')}
              </p>
            </div>

            {/* Exclusive Experience */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border-2 border-blue-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-black mb-4">
                {t('exclusiveExperience')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('exclusiveExperienceDescription')}
              </p>
            </div>

            {/* Safety */}
            <div className="p-8 bg-gradient-to-br from-red-50 to-white rounded-2xl border-2 border-red-200 hover:shadow-xl transition-all">
              <h3 className="text-2xl font-bold text-black mb-4">
                {t('prioritizeSafety')}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t('prioritizeSafetyDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* How Companies Leverage */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">
            {t('howCompaniesLeverage')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-4 sm:p-6 border border-gray-200 rounded-lg text-center hover:shadow-xl transition-all group">
              <div className="w-full h-40 sm:h-48 rounded-lg mb-3 sm:mb-4 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop&q=80" 
                  alt="Business travel"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-black">{t('businessTravel')}</h3>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-xl transition-all group">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80" 
                  alt="Courtesy rides"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <h3 className="text-lg font-semibold text-black">{t('courtesyRides')}</h3>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg text-center hover:shadow-xl transition-all group">
              <div className="w-full h-48 rounded-lg mb-4 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop&q=80" 
                  alt="Meal programs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <h3 className="text-lg font-semibold text-black">{t('mealPrograms')}</h3>
            </div>
          </div>
        </div>

        {/* Get Started Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">
            {t('getStartedNoCosts')}
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-3">
                {t('customizePrograms')}
              </h3>
              <p className="text-gray-700">
                {t('customizeProgramsDescription')}
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-3">
                {t('onboardPeople')}
              </h3>
              <p className="text-gray-700">
                {t('onboardPeopleDescription')}
              </p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-3">
                {t('setupAmenities')}
              </h3>
              <p className="text-gray-700">
                {t('setupAmenitiesDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16 p-8 bg-black text-white rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('joinCompanies')}
          </h2>
        </div>

        {/* Testimonial */}
        <div className="mb-16 p-8 bg-gray-50 rounded-lg">
          <p className="text-lg text-gray-700 italic mb-4">
            "Pay and basic benefits aren't the endgame. You need to be actively listening to what employees need and want. One of our first added benefits was providing Uber credit for rides, so people could safely get a ride for work or for fun. We encourage employees to spend the credits however they want."
          </p>
          <p className="text-base font-semibold text-black">
            Ryan Carter, Founder and CEO, Parachute Media
          </p>
        </div>

        {/* Recommendation */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            9 out of 10 customers recommend choosing Uber for Business³
          </h2>
        </div>

        {/* How to Get Started */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-black mb-8">How to get started</h2>
          <div className="space-y-6">
            <div className="p-6 border-l-4 border-black">
              <h3 className="text-xl font-semibold text-black mb-2">
                Interested in learning more?
              </h3>
            </div>
            <div className="p-6 border-l-4 border-black">
              <h3 className="text-xl font-semibold text-black mb-2">
                How to reduce the carbon footprint of business travel
              </h3>
              <button className="text-blue-600 hover:underline mt-2">See how</button>
            </div>
            <div className="p-6 border-l-4 border-black">
              <h3 className="text-xl font-semibold text-black mb-2">
                The perks and benefits your employees want now
              </h3>
              <button className="text-blue-600 hover:underline mt-2">Find out</button>
            </div>
            <div className="p-6 border-l-4 border-black">
              <h3 className="text-xl font-semibold text-black mb-2">
                The road to sustainability: executives discuss their efforts toward net zero
              </h3>
              <button className="text-blue-600 hover:underline mt-2">Keep reading</button>
            </div>
          </div>
        </div>

        {/* Footnotes */}
        <div className="pt-8 border-t border-gray-200 text-sm text-gray-600 space-y-2">
          <p>
            ¹Based on over 275 Uber for Business customers surveyed globally in February 2023. Customers agreed that they were able to reduce costs on ground transportation and/or meals through better compliance.
          </p>
          <p>
            ²Uber Green is available only in certain cities. In addition, availability may be limited outside of downtown areas to start.
          </p>
          <p>
            ³Based on a November 2021 survey commissioned by Uber in which 323 Uber for Business clients responded to the question "How likely are you to recommend Uber for Business to a colleague or someone in your professional network?"
          </p>
        </div>
      </div>
    </div>
  )
}

export default BusinessPage

