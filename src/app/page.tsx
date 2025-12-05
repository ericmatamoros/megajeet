'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [activeContainer, setActiveContainer] = useState(4)
  const marqueeText = "MEGAJEET • ".repeat(20)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="top">
        <header className="header">
          <h1 className="logo">MEGAJeet</h1>
          <nav className="nav-buttons">
            <button className="btn">Connect Wallet</button>
            <button className="btn">JEET?</button>
            <button className="btn">Jeetenomics</button>
            <button className="btn">More CTA</button>
          </nav>
        </header>
        <Image
          src="/jeet_big.png"
          alt="MEGAJEET Trading Room"
          width={1920}
          height={1098}
          className="hero-image"
          priority
        />
      </section>

      {/* First Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-text">{marqueeText}</span>
          <span className="marquee-text">{marqueeText}</span>
        </div>
      </div>

      {/* WTF is a jeet? Section */}
      <section className="section">
        <div className="section-content">
          <h2 className="section-title">wtf is a jeet?</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <Image
          src="/jeetza_hut.png"
          alt="Jeetza Hut"
          width={533}
          height={533}
          className="section-image"
        />
      </section>

      {/* Second Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-text">{marqueeText}</span>
          <span className="marquee-text">{marqueeText}</span>
        </div>
      </div>

      {/* Jeetenomics Section */}
      <section className="jeetenomics-section">
        <div className="jeetenomics-header">
          <Image
            src="/jeetenomics.png"
            alt="Jeetenomics Character"
            width={359}
            height={359}
            className="jeetenomics-image"
          />
          <h2 className="jeetenomics-title">Jeetenomics</h2>
        </div>
        <div className="container-buttons">
          {[1, 2, 3, 4].map((num) => (
            <button
              key={num}
              className={`container-btn ${activeContainer === num ? 'active' : ''}`}
              onClick={() => setActiveContainer(num)}
            >
              CONTAINER {num}
            </button>
          ))}
        </div>
      </section>

      {/* Second Content Section */}
      <section className="section reverse">
        <div className="section-content">
          <h2 className="section-title">wtf is a jeet?</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <Image
          src="/jeet.png"
          alt="Dancing JEET"
          width={533}
          height={533}
          className="section-image float"
        />
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-left">
          <h2 className="footer-logo">MEGAJeet</h2>
          <div className="social-buttons">
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="X (Twitter)">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Telegram">
              <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
        <button className="back-to-top" onClick={scrollToTop}>
          <span>BACK TO THE TOP</span>
          <div className="arrow-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </button>
      </footer>
    </main>
  )
}

