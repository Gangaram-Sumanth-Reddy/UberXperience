import { useLanguage } from '../contexts/LanguageContext'
import type { TranslationKey } from '../translations'

interface StepCard {
  id: string
  number: number
  titleKey: TranslationKey
  descriptionKey: TranslationKey
  imageUrl: string
}

const BookTripSection = () => {
  const { t } = useLanguage()

  const steps: StepCard[] = [
    {
      id: 'step1',
      number: 1,
      titleKey: 'step1Title',
      descriptionKey: 'step1Description',
      imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&h=200&fit=crop&q=90&auto=format',
    },
    {
      id: 'step2',
      number: 2,
      titleKey: 'step2Title',
      descriptionKey: 'step2Description',
      imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=200&fit=crop&q=90&auto=format',
    },
    {
      id: 'step3',
      number: 3,
      titleKey: 'step3Title',
      descriptionKey: 'step3Description',
      imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=200&h=200&fit=crop&q=90&auto=format',
    },
  ]

  return (
    <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-3 sm:mb-4 text-left">
            {t('bookTripTitle')}
          </h2>
          <div className="w-24 h-1 bg-black"></div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-100 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 p-4 flex flex-col group"
            >
              <div className="flex-1 flex flex-col">
                {/* Content with image on right */}
                <div className="flex items-start gap-3 mb-3">
                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-6 h-6 bg-black text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {step.number}
                      </div>
                      <h3 className="text-base font-bold text-black">
                        {t(step.titleKey)}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-700 leading-relaxed">
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                  {/* Image on right */}
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 relative rounded-lg overflow-hidden bg-white shadow-sm">
                    <img 
                      src={step.imageUrl} 
                      alt={t(step.titleKey)}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                      width="80"
                      height="80"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/200x200/E5E7EB/6B7280?text=${encodeURIComponent(t(step.titleKey))}`
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button className="text-base font-semibold text-black underline hover:no-underline transition-all hover:text-gray-600">
            {t('bookFirstRide')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookTripSection

