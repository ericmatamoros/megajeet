'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const contractAddress = "CA: 0000-000000000000000000000000"
  const clickThreshold = parseInt(process.env.NEXT_PUBLIC_CLICK_THRESHOLD || '10')
  
  const [clickCount, setClickCount] = useState(0)
  const [isPressed, setIsPressed] = useState(false)

  const copyToClipboard = () => {
    const address = contractAddress.replace('CA: ', '')
    navigator.clipboard.writeText(address)
  }

  const handleLotionClick = () => {
    setIsPressed(true)
    setClickCount(prev => prev + 1)
    
    // Reset pressed state after animation
    setTimeout(() => {
      setIsPressed(false)
    }, 200)
  }

  // Determine which lotion image to show
  const getLotionImage = () => {
    if (isPressed) {
      // Show cream if threshold reached
      if (clickCount >= clickThreshold) {
        return '/jeet_lotion_down.png'
      }
      // Show pressed without cream
      return '/jeet_lotion_down_no_lotion.png'
    }
    // Show normal state
    return '/jeet_lotion_up.png'
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="hero" id="top">
        <header className="header">
          <h1 className="logo">MegaJEET</h1>
          <div className="icon-buttons">
            <a href="https://x.com/megajeet6342" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="X (Twitter)">
              <Image src="/x_icon.png" alt="X" width={34} height={34} />
            </a>
            <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Telegram">
              <Image src="/telegram_icon.png" alt="Telegram" width={34} height={34} />
            </a>
            <a href="https://dexscreener.com" target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="DexScreener">
              <Image src="/dexscreen_icon.png" alt="DexScreener" width={34} height={34} />
            </a>
          </div>
        </header>
        <video
          className="hero-video"
          src="/jeet_big.webm"
          autoPlay
          loop
          muted
          playsInline
        />
        
        {/* Interactive Lotion Bottle Overlay */}
        <div 
          className="lotion-overlay"
          onClick={handleLotionClick}
          role="button"
          tabIndex={0}
          aria-label="Click the lotion bottle"
        >
          <Image 
            src={getLotionImage()}
            alt="Jeet Lotion"
            fill
            priority
          />
        </div>
        
        <div className="contract-address" aria-label="Contract address">
          {contractAddress}
        </div>
      </section>
    </main>
  )
}
