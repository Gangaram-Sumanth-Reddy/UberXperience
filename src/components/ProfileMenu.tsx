import { useLanguage } from '../contexts/LanguageContext'

interface ProfileMenuProps {
  isOpen: boolean
  onClose: () => void
  onSignOut: () => void
}

const ProfileMenu = ({ isOpen, onClose, onSignOut }: ProfileMenuProps) => {
  const { t } = useLanguage()
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Menu Panel */}
      <div className="fixed top-16 sm:top-20 right-4 sm:right-8 md:right-16 w-[calc(100vw-2rem)] sm:w-80 max-w-sm bg-white rounded-lg shadow-2xl z-50 overflow-hidden">
        {/* Top Section */}
        <div className="p-6 flex items-center justify-between border-b border-gray-200">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-black">{t('sumanthMr')}</h2>
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        </div>

        {/* Quick Action Buttons */}
        <div className="p-4 flex gap-3 border-b border-gray-200">
          <button className="flex-1 bg-gray-100 rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
            </svg>
            <span className="text-sm font-medium text-black">{t('help')}</span>
          </button>
          <button className="flex-1 bg-gray-100 rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
            </svg>
            <span className="text-sm font-medium text-black">Wallet</span>
          </button>
          <button className="flex-1 bg-gray-100 rounded-lg p-4 flex flex-col items-center gap-2 hover:bg-gray-200 transition-colors">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            <span className="text-sm font-medium text-black">Activity</span>
          </button>
        </div>

        {/* Navigation List */}
        <div className="py-2">
          <a href="#" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-base font-normal text-black">{t('manageAccount')}</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
            </svg>
            <span className="text-base font-normal text-black">{t('rideMenu')}</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="3" fill="currentColor"/>
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-base font-normal text-black">{t('driveDeliver')}</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.89-6.04-1.39-1.39-4.13-1.02-6.04.89-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
            </svg>
            <span className="text-base font-normal text-black">{t('uberEats')}</span>
          </a>
          <a href="#" className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-base font-normal text-black">{t('uberForBusiness')}</span>
          </a>
        </div>

        {/* Sign Out Button */}
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={() => {
              onSignOut()
              onClose()
            }}
            className="w-full bg-gray-100 text-red-600 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            {t('signOut')}
          </button>
        </div>
      </div>
    </>
  )
}

export default ProfileMenu

