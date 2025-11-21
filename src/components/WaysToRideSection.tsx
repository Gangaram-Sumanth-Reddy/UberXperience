import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import type { TranslationKey } from '../translations'

interface ServiceCard {
  id: string
  titleKey: TranslationKey
  descriptionKey: TranslationKey
  detailsKey: TranslationKey
  imageUrl: string
}

const WaysToRideSection = () => {
  const { t } = useLanguage()
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services: ServiceCard[] = [
    {
      id: 'bikeDirect',
      titleKey: 'bikeDirectTitle',
      descriptionKey: 'bikeDirectDescription',
      detailsKey: 'bikeDirectDetails',
      imageUrl: '/images/Bike Direct.png',
    },
    {
      id: 'courier',
      titleKey: 'courierTitle',
      descriptionKey: 'courierDescription',
      detailsKey: 'courierDetails',
      imageUrl: '/images/Courier.png',
    },
    {
      id: 'intercity',
      titleKey: 'intercityTitle',
      descriptionKey: 'intercityDescription',
      detailsKey: 'intercityDetails',
      imageUrl: '/images/Intercity.png',
    },
    {
      id: 'rentals',
      titleKey: 'rentalsTitle',
      descriptionKey: 'rentalsDescription',
      detailsKey: 'rentalsDetails',
      imageUrl: '/images/Rentals.png',
    },
    {
      id: 'reserve',
      titleKey: 'reserveTitle',
      descriptionKey: 'reserveDescription',
      detailsKey: 'reserveDetails',
      imageUrl: '/images/Reserve.png',
    },
    {
      id: 'ride',
      titleKey: 'rideTitle',
      descriptionKey: 'rideDescription',
      detailsKey: 'rideDetails',
      imageUrl: '/images/Ride.png',
    },
  ]

  const selectedServiceData = services.find(s => s.id === selectedService)

  return (
    <>
      <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <div className="mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 text-left">
              {t('waysToRideTitle')}
            </h2>
            <div className="w-24 h-1 bg-black"></div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-gray-100 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col group"
              >
                <div className="flex-1 flex flex-col">
                  {/* Content with image on right */}
                  <div className="flex items-start gap-3 mb-3">
                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-bold text-black mb-1.5">
                        {t(service.titleKey)}
                      </h3>
                      <p className="text-xs text-gray-700 leading-relaxed">
                        {t(service.descriptionKey)}
                      </p>
                    </div>
                    {/* Image on right */}
                    <div className="flex-shrink-0 w-20 h-20 relative rounded-lg overflow-hidden bg-white shadow-sm">
                      <img 
                        src={service.imageUrl} 
                        alt={t(service.titleKey)}
                        className="w-full h-full object-cover rounded-lg"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/200x200/E5E7EB/6B7280?text=${encodeURIComponent(t(service.titleKey))}`
                        }}
                      />
                    </div>
                  </div>
                  {/* Button */}
                  <button
                    onClick={() => setSelectedService(service.id)}
                    className="w-full bg-white hover:bg-gray-50 text-black font-medium py-2 px-4 rounded-lg transition-all duration-200 text-xs border border-gray-200 shadow-sm"
                  >
                    {t('details')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedServiceData && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setSelectedService(null)}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 px-4 sm:px-8 py-4 sm:py-6 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-bold text-black">
                  {t(selectedServiceData.titleKey)}
                </h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors group"
                >
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-base font-medium text-gray-700 group-hover:text-black">Close</span>
                </button>
              </div>

              {/* Modal Content */}
              <div className="px-8 py-8">
                <div className="mb-6">
                  <div className="h-48 sm:h-64 mb-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white rounded-xl overflow-hidden">
                    <img 
                      src={selectedServiceData.imageUrl} 
                      alt={t(selectedServiceData.titleKey)}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      width="400"
                      height="300"
                    />
                  </div>
                  <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                    {t(selectedServiceData.descriptionKey)}
                  </p>
                </div>

                <div className="prose max-w-none">
                  <p className="text-base text-gray-700 leading-relaxed">
                    {t(selectedServiceData.detailsKey)}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button
                    onClick={() => setSelectedService(null)}
                    className="w-full bg-black text-white font-medium py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default WaysToRideSection

