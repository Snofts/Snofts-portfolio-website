import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkilsSection from '../components/SkilsSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        {/* Theme toggle */}
        <ThemeToggle />

        {/* Background Effects */}
        <StarBackground />

        {/* NavBar */}
        <NavBar />

        {/* MainContent */}
        <main>
          <HeroSection />
          <AboutSection />
          <SkilsSection />
          <ProjectSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
    </div>
  )
}

export default Home