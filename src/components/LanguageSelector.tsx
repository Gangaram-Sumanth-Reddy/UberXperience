import { useLanguage } from '../contexts/LanguageContext'

interface LanguageSelectorProps {
  isOpen: boolean
  onClose: () => void
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

const LanguageSelector = ({ isOpen, onClose, currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  const { t } = useLanguage()
  const languages = [
    { code: 'bn', name: 'বাংলা', englishName: 'Bengali' },
    { code: 'en', name: 'English', englishName: 'English' },
    { code: 'hi', name: 'हिन्दी', englishName: 'Hindi' },
    { code: 'kn', name: 'ಕನ್ನಡ', englishName: 'Kannada' },
    { code: 'mr', name: 'मराठी', englishName: 'Marathi' },
    { code: 'ta', name: 'தமிழ்', englishName: 'Tamil' },
    { code: 'te', name: 'తెలుగు', englishName: 'Telugu' },
    { code: 'ur', name: 'اردو', englishName: 'Urdu' },
  ]

  if (!isOpen) return null

  const handleLanguageSelect = (languageCode: string) => {
    onLanguageChange(languageCode)
    onClose()
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Language Selector Panel */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-2rem)] sm:w-[500px] md:w-[600px] max-w-[600px] bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-gray-200 relative">
          <h2 className="text-lg sm:text-xl font-bold text-black text-center">{t('selectLanguage')}</h2>
          <button
            onClick={onClose}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 text-black hover:text-gray-600 text-2xl font-light leading-none"
          >
            ×
          </button>
        </div>

        {/* Language Grid */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`p-4 rounded-lg border transition-colors text-center ${
                  currentLanguage === language.code
                    ? 'border-black bg-gray-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="text-base font-medium text-black">
                  {language.name}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default LanguageSelector

