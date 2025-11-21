import { useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import LoginPage from './components/LoginPage'
import Header from './components/Header'
import BookingForm from './components/BookingForm'
import MapView from './components/MapView'
import HelpPage from './components/HelpPage'
import AboutPage from './components/AboutPage'
import BusinessPage from './components/BusinessPage'
import DrivePage from './components/DrivePage'
import RidePage from './components/RidePage'
import BookTripSection from './components/BookTripSection'
import WaysToRideSection from './components/WaysToRideSection'
import Footer from './components/Footer'
import type { LanguageCode } from './translations'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showHelpPage, setShowHelpPage] = useState(false)
  const [showAboutPage, setShowAboutPage] = useState(false)
  const [showBusinessPage, setShowBusinessPage] = useState(false)
  const [showDrivePage, setShowDrivePage] = useState(false)
  const [showRidePage, setShowRidePage] = useState(false)
  const [aboutSection, setAboutSection] = useState<string>('aboutUs')
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>('en')

  const handleHomeClick = () => {
    // Close all pages and return to home
    setShowHelpPage(false)
    setShowAboutPage(false)
    setShowBusinessPage(false)
    setShowDrivePage(false)
    setShowRidePage(false)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleRideClick = () => {
    // Close all other pages
    setShowHelpPage(false)
    setShowAboutPage(false)
    setShowBusinessPage(false)
    setShowDrivePage(false)
    // Open Ride page
    setShowRidePage(true)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDriveClick = () => {
    // Close all other pages
    setShowHelpPage(false)
    setShowAboutPage(false)
    setShowBusinessPage(false)
    setShowRidePage(false)
    // Open Drive page
    setShowDrivePage(true)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBusinessClick = () => {
    // Close all other pages
    setShowHelpPage(false)
    setShowAboutPage(false)
    setShowDrivePage(false)
    setShowRidePage(false)
    // Open Business page
    setShowBusinessPage(true)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAboutClick = (section: string) => {
    // Close all other pages
    setShowHelpPage(false)
    setShowBusinessPage(false)
    setShowDrivePage(false)
    setShowRidePage(false)
    // Set section and open About page
    setAboutSection(section)
    setShowAboutPage(true)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleHelpClick = () => {
    // Close all other pages
    setShowAboutPage(false)
    setShowBusinessPage(false)
    setShowDrivePage(false)
    setShowRidePage(false)
    // Open Help page
    setShowHelpPage(true)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleSignOut = () => {
    setIsLoggedIn(false)
    // Close all open pages
    setShowHelpPage(false)
    setShowAboutPage(false)
    setShowBusinessPage(false)
    setShowDrivePage(false)
    setShowRidePage(false)
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Show login page if not logged in
  if (!isLoggedIn) {
    return (
      <LanguageProvider language={currentLanguage} setLanguage={setCurrentLanguage}>
        <LoginPage onLogin={handleLogin} />
      </LanguageProvider>
    )
  }

  return (
    <LanguageProvider language={currentLanguage} setLanguage={setCurrentLanguage}>
      <div className="flex flex-col">
        <Header 
          onHelpClick={handleHelpClick}
          onAboutClick={handleAboutClick}
          onBusinessClick={handleBusinessClick}
          onDriveClick={handleDriveClick}
          onRideClick={handleRideClick}
          onHomeClick={handleHomeClick}
          onSignOut={handleSignOut}
          currentLanguage={currentLanguage}
          onLanguageChange={(lang) => setCurrentLanguage(lang as LanguageCode)}
        />
        <div className="pt-[80px]">
          {showHelpPage ? (
            <HelpPage />
          ) : showAboutPage ? (
            <AboutPage section={aboutSection} />
          ) : showBusinessPage ? (
            <BusinessPage />
          ) : showDrivePage ? (
            <DrivePage />
          ) : showRidePage ? (
            <RidePage />
          ) : (
            <>
              <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] bg-gradient-to-br from-gray-50 via-white to-gray-50">
                <div className="w-full lg:w-1/2 bg-white px-4 sm:px-8 md:px-12 lg:px-16 py-8 md:py-12 lg:py-16 flex flex-col">
                  <BookingForm />
                </div>
                <div className="w-full lg:w-1/2 relative lg:border-l border-gray-200 bg-white h-[400px] sm:h-[500px] md:h-[600px] lg:h-[calc(100vh-80px)]">
                  <MapView />
                </div>
              </div>
              <BookTripSection />
              <WaysToRideSection />
              <Footer
                onHelpClick={handleHelpClick}
                onAboutClick={handleAboutClick}
                onBusinessClick={handleBusinessClick}
                onDriveClick={handleDriveClick}
                onRideClick={handleRideClick}
                onLanguageChange={(lang) => setCurrentLanguage(lang as LanguageCode)}
                currentLanguage={currentLanguage}
              />
            </>
          )}
        </div>
      </div>
    </LanguageProvider>
  )
}

export default App

