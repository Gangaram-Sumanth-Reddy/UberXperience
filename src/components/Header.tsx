import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import ProfileMenu from './ProfileMenu'
import LanguageSelector from './LanguageSelector'

interface HeaderProps {
  onHelpClick: () => void
  onAboutClick: (section: string) => void
  onBusinessClick: () => void
  onDriveClick: () => void
  onRideClick: () => void
  onHomeClick: () => void
  onSignOut: () => void
  currentLanguage: string
  onLanguageChange: (language: string) => void
}

const Header = ({ onHelpClick, onAboutClick, onBusinessClick, onDriveClick, onRideClick, onHomeClick, onSignOut, currentLanguage, onLanguageChange }: HeaderProps) => {
  const { t } = useLanguage()
  const [showAboutDropdown, setShowAboutDropdown] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showLanguageSelector, setShowLanguageSelector] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showMobileAboutDropdown, setShowMobileAboutDropdown] = useState(false)

  const getLanguageDisplay = (code: string) => {
    const languageMap: Record<string, string> = {
      'bn': 'BN',
      'en': 'EN',
      'hi': 'HI',
      'kn': 'KN',
      'mr': 'MR',
      'ta': 'TA',
      'te': 'TE',
      'ur': 'UR',
    }
    return languageMap[code] || 'EN'
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 sm:px-8 md:px-12 lg:px-16 py-3 md:py-4 flex items-center justify-between z-[100] shadow-sm">
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        <button 
          onClick={onHomeClick}
          className="text-2xl sm:text-3xl font-bold text-black tracking-tight hover:opacity-80 transition-opacity cursor-pointer"
        >
          Uber
        </button>
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <button
            onClick={onRideClick}
            className="text-black hover:text-gray-600 text-base font-normal"
          >
            {t('ride')}
          </button>
          <button
            onClick={onDriveClick}
            className="text-black hover:text-gray-600 text-base font-normal"
          >
            {t('drive')}
          </button>
          <button
            onClick={onBusinessClick}
            className="text-black hover:text-gray-600 text-base font-normal"
          >
            {t('business')}
          </button>
          <div className="relative">
            <button
              className="text-black hover:text-gray-600 flex items-center gap-1"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              {t('about')}
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {showAboutDropdown && (
              <div
                className="absolute top-full left-0 mt-0 bg-white border border-gray-200 rounded-b-lg shadow-lg py-3 min-w-[220px]"
                onMouseEnter={() => setShowAboutDropdown(true)}
                onMouseLeave={() => setShowAboutDropdown(false)}
              >
                <button 
                  onClick={() => { onAboutClick('aboutUs'); setShowAboutDropdown(false); }}
                  className="w-full text-left block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 font-normal"
                >
                  {t('aboutUs')}
                </button>
                <button 
                  onClick={() => { onAboutClick('ourOfferings'); setShowAboutDropdown(false); }}
                  className="w-full text-left block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 font-normal"
                >
                  {t('ourOfferings')}
                </button>
                <button 
                  onClick={() => { onAboutClick('howUberWorks'); setShowAboutDropdown(false); }}
                  className="w-full text-left block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 font-normal"
                >
                  {t('howUberWorks')}
                </button>
                <button 
                  onClick={() => { onAboutClick('sustainability'); setShowAboutDropdown(false); }}
                  className="w-full text-left block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 font-normal"
                >
                  {t('sustainability')}
                </button>
                <button 
                  onClick={() => { onAboutClick('newsroom'); setShowAboutDropdown(false); }}
                  className="w-full text-left block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 font-normal"
                >
                  {t('newsroom')}
                </button>
                <button 
                  onClick={() => { onAboutClick('investorRelations'); setShowAboutDropdown(false); }}
                  className="w-full text-left block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 font-normal"
                >
                  {t('investorRelations')}
                </button>
                <button 
                  onClick={() => { onAboutClick('autonomous'); setShowAboutDropdown(false); }}
                  className="w-full text-left block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 font-normal"
                >
                  {t('autonomous')}
                </button>
                <button 
                  onClick={() => { onAboutClick('blog'); setShowAboutDropdown(false); }}
                  className="w-full text-left block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 font-normal"
                >
                  {t('blog')}
                </button>
                <button 
                  onClick={() => { onAboutClick('careers'); setShowAboutDropdown(false); }}
                  className="w-full text-left block px-6 py-3 text-base text-gray-700 hover:bg-gray-50 font-normal"
                >
                  {t('careers')}
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>
      <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setShowLanguageSelector(true)}
            className="text-black hover:text-gray-600 text-sm sm:text-base font-normal flex items-center gap-1.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
            <span>{getLanguageDisplay(currentLanguage)}</span>
          </button>
          <button
            onClick={onHelpClick}
            className="text-black hover:text-gray-600 text-sm sm:text-base font-normal"
          >
            {t('help')}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="md:hidden p-2 text-black hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {showMobileMenu ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Desktop Profile */}
        <div className="hidden md:block relative">
          <button
            className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-1 hover:bg-gray-800 transition-colors text-sm font-medium"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            sumanth
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {showMobileMenu && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-[99] md:hidden transition-opacity duration-300"
            onClick={() => setShowMobileMenu(false)}
          />
          <div className="fixed top-[70px] sm:top-[80px] left-0 right-0 bottom-0 bg-white z-[101] md:hidden overflow-y-auto shadow-2xl">
            <div className="px-4 sm:px-6 py-6 sm:py-8">
              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-2">
                {/* Main Sections - Clear and Visible */}
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      onRideClick()
                      setShowMobileMenu(false)
                    }}
                    className="w-full text-left px-4 py-4 text-lg font-semibold text-black hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors flex items-center gap-4 border border-gray-200"
                  >
                    <svg className="w-6 h-6 flex-shrink-0 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    <span className="text-lg font-semibold">{t('ride')}</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      onDriveClick()
                      setShowMobileMenu(false)
                    }}
                    className="w-full text-left px-4 py-4 text-lg font-semibold text-black hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors flex items-center gap-4 border border-gray-200"
                  >
                    <svg className="w-6 h-6 flex-shrink-0 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                    </svg>
                    <span className="text-lg font-semibold">{t('drive')}</span>
                  </button>
                  
                  <button
                    onClick={() => {
                      onBusinessClick()
                      setShowMobileMenu(false)
                    }}
                    className="w-full text-left px-4 py-4 text-lg font-semibold text-black hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors flex items-center gap-4 border border-gray-200"
                  >
                    <svg className="w-6 h-6 flex-shrink-0 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-lg font-semibold">{t('business')}</span>
                  </button>
                  
                  {/* About Section */}
                  <div className="flex flex-col border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setShowMobileAboutDropdown(!showMobileAboutDropdown)}
                      className="w-full text-left px-4 py-4 text-lg font-semibold text-black hover:bg-gray-100 active:bg-gray-200 transition-colors flex items-center justify-between"
                    >
                      <div className="flex items-center gap-4">
                        <svg className="w-6 h-6 flex-shrink-0 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-lg font-semibold">{t('about')}</span>
                      </div>
                      <svg
                        className={`w-6 h-6 transition-transform duration-200 flex-shrink-0 ${showMobileAboutDropdown ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  {showMobileAboutDropdown && (
                    <div className="pl-4 sm:pl-6 mt-1 space-y-1 animate-fade-in">
                      <button
                        onClick={() => {
                          onAboutClick('aboutUs')
                          setShowMobileMenu(false)
                          setShowMobileAboutDropdown(false)
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm sm:text-base text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                      >
                        {t('aboutUs')}
                      </button>
                      <button
                        onClick={() => {
                          onAboutClick('ourOfferings')
                          setShowMobileMenu(false)
                          setShowMobileAboutDropdown(false)
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm sm:text-base text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                      >
                        {t('ourOfferings')}
                      </button>
                      <button
                        onClick={() => {
                          onAboutClick('howUberWorks')
                          setShowMobileMenu(false)
                          setShowMobileAboutDropdown(false)
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm sm:text-base text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                      >
                        {t('howUberWorks')}
                      </button>
                      <button
                        onClick={() => {
                          onAboutClick('sustainability')
                          setShowMobileMenu(false)
                          setShowMobileAboutDropdown(false)
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm sm:text-base text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                      >
                        {t('sustainability')}
                      </button>
                      <button
                        onClick={() => {
                          onAboutClick('newsroom')
                          setShowMobileMenu(false)
                          setShowMobileAboutDropdown(false)
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm sm:text-base text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                      >
                        {t('newsroom')}
                      </button>
                      <button
                        onClick={() => {
                          onAboutClick('investorRelations')
                          setShowMobileMenu(false)
                          setShowMobileAboutDropdown(false)
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm sm:text-base text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                      >
                        {t('investorRelations')}
                      </button>
                      <button
                        onClick={() => {
                          onAboutClick('autonomous')
                          setShowMobileMenu(false)
                          setShowMobileAboutDropdown(false)
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm sm:text-base text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                      >
                        {t('autonomous')}
                      </button>
                      <button
                        onClick={() => {
                          onAboutClick('blog')
                          setShowMobileMenu(false)
                          setShowMobileAboutDropdown(false)
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm sm:text-base text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                      >
                        {t('blog')}
                      </button>
                      <button
                        onClick={() => {
                          onAboutClick('careers')
                          setShowMobileMenu(false)
                          setShowMobileAboutDropdown(false)
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm sm:text-base text-gray-700 hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors"
                      >
                        {t('careers')}
                      </button>
                    </div>
                  )}
                  </div>
                </div>

                <div className="border-t-2 border-gray-300 my-4"></div>

                {/* Help Section */}
                <button
                  onClick={() => {
                    onHelpClick()
                    setShowMobileMenu(false)
                  }}
                  className="w-full text-left px-4 py-4 text-lg font-semibold text-black hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors flex items-center gap-4 border border-gray-200"
                >
                  <svg className="w-6 h-6 flex-shrink-0 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-lg font-semibold">{t('help')}</span>
                </button>

                {/* Language Selector */}
                <button
                  onClick={() => {
                    setShowLanguageSelector(true)
                    setShowMobileMenu(false)
                  }}
                  className="w-full text-left px-4 py-4 text-lg font-semibold text-black hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors flex items-center gap-4 border border-gray-200"
                >
                  <svg className="w-6 h-6 flex-shrink-0 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                  <span className="text-lg font-semibold">{t('selectLanguage')}</span>
                  <span className="ml-auto text-base font-medium text-gray-600">({getLanguageDisplay(currentLanguage)})</span>
                </button>

                <div className="border-t-2 border-gray-300 my-4"></div>

                {/* My Profile */}
                <button
                  onClick={() => {
                    setShowProfileMenu(true)
                    setShowMobileMenu(false)
                  }}
                  className="w-full text-left px-4 py-4 text-lg font-semibold text-black hover:bg-gray-100 active:bg-gray-200 rounded-lg transition-colors flex items-center gap-4 border border-gray-200"
                >
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-base font-semibold">U</span>
                  </div>
                  <span className="text-lg font-semibold">My Profile</span>
                  <svg className="w-6 h-6 flex-shrink-0 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </>
      )}

      <ProfileMenu isOpen={showProfileMenu} onClose={() => setShowProfileMenu(false)} onSignOut={onSignOut} />
      <LanguageSelector 
        isOpen={showLanguageSelector}
        onClose={() => setShowLanguageSelector(false)}
        currentLanguage={currentLanguage}
        onLanguageChange={onLanguageChange}
      />
    </header>
  )
}

export default Header

