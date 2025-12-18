'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [showEmail, setShowEmail] = useState(false)

  // スムーススクロールの実装
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]')
      if (anchor) {
        e.preventDefault()
        const targetId = anchor.getAttribute('href')
        const target = document.querySelector(targetId)
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => {
      document.removeEventListener('click', handleSmoothScroll)
    }
  }, [])

  const handleConsultClick = (e) => {
    e.preventDefault()
    setShowEmail(true)
  }

  const handleInstagramClick = (e) => {
    e.preventDefault()
    const isMobileOrTablet = window.innerWidth <= 1024 // タブレット以下
    const url = isMobileOrTablet
      ? 'instagram://user?username=svj_travel_laolao'
      : 'https://www.instagram.com/svj_travel_laolao'
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <main>
      {/* ファーストビュー */}
      <section className="hero">
        <div className="hero-image">
          <Image
            src="/image/0A48A2AA-ED67-47B6-A9B7-5520AA508365.jpg"
            alt="ラオスの自然"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* ラオス語フレーズ - 左上 */}
        <div className="laos-greeting laos-greeting-top">
          <p className="laos-text">サヴァイディー</p>
          <p className="laos-japanese">こんにちは</p>
        </div>
        {/* ラオス語フレーズ - 右下 */}
        <div className="laos-greeting laos-greeting-bottom">
          <p className="laos-text">コプチャイ　ドゥ</p>
          <p className="laos-japanese">ありがとう</p>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            プライベートな<br />
            ワクワク、ドキドキ💓する旅<br />
            行きませんか。
          </h1>
          <a href="#empathy" className="cta-button cta-primary">
            ラオスの旅をのぞいてみる
          </a>
        </div>
      </section>

      {/* 共感セクション */}
      <section className="empathy" id="empathy">
        <div className="empathy-image">
          <Image
            src="/image/3DF8CD84-F8C4-406B-95B1-5968D1E5F3CE.jpg"
            alt="静かな時間"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="empathy-content">
          <p className="empathy-text">
            忙しすぎる毎日。<br />
            誰にも邪魔されない時間、<br />
            欲しくないですか？
          </p>
        </div>
      </section>

      {/* ラオスの魅力 */}
      <section className="features">
        <div className="features-container">
          {/* 特徴1: 人が少ない */}
          <div className="feature-item">
            <div className="feature-image">
              <Image
                src="/image/people.jpg"
                alt="人が少ない"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2 className="feature-title">人が少ない</h2>
            <p className="feature-text">あなただけの空間が、ここにある。</p>
          </div>

          {/* 特徴2: 自然が近い */}
          <div className="feature-item">
            <div className="feature-image">
              <Image
                src="/image/nature.jpg"
                alt="自然が近い"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2 className="feature-title">自然が近い</h2>
            <p className="feature-text">緑に包まれて、心が解き放たれる。</p>
          </div>

          {/* 特徴3: 心がほどける */}
          <div className="feature-item">
            <div className="feature-image">
              <Image
                src="/image/heart.jpg"
                alt="心がほどける"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2 className="feature-title">心がほどける</h2>
            <p className="feature-text">時間がゆっくり流れる場所。</p>
          </div>
        </div>
      </section>

      {/* プライベート感の強調 */}
      <section className="private">
        <div className="private-image">
          <Image
            src="/image/8E1520F4-0909-483A-9B60-1F9E3932040B.jpg"
            alt="プライベートな旅"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="private-content">
          <p className="private-text">
            団体ツアーじゃない。<br />
            あなたのためだけの旅。
          </p>
        </div>
      </section>

      {/* クロージング（CTA） */}
      <section className="closing" id="contact">
        <div className="closing-image">
          <Image
            src="/image/A3F23E56-7F34-4FE5-B6E6-5BA7093BC7D4.jpg"
            alt="ラオスの風景"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="closing-content">
          <p className="closing-text">ちょっと、ワクワクしてきたら。</p>
          <button onClick={handleConsultClick} className="cta-button cta-secondary">
            相談してみる
          </button>
          {showEmail && (
            <div className="email-display">
              <a href="mailto:fwgd75741@gmail.com" className="email-link">
                fwgd75741@gmail.com
              </a>
            </div>
          )}
        </div>
      </section>

      {/* インスタグラムへの導線（固定ボタン） */}
      <a
        href="#"
        onClick={handleInstagramClick}
        className="instagram-link"
        aria-label="Instagramでフォローする"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            fill="currentColor"
          />
        </svg>
        <span>Instagram</span>
      </a>
    </main>
  )
}


