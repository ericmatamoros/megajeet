'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const contractAddress = "CA: 0000-000000000000000000000000"

  const copyToClipboard = () => {
    const address = contractAddress.replace('CA: ', '')
    navigator.clipboard.writeText(address)
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
        <div className="contract-address" aria-label="Contract address">
          {contractAddress}
        </div>
      </section>
    </main>
  )
}
