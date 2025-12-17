'use client'

import Image from 'next/image'
import { useEffect } from 'react'

export default function Home() {
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
        <div className="hero-content">
          <h1 className="hero-title">
            プライベートな<br />
            ワクワク、ドキドキ💓する旅<br />
            行きませんか。
          </h1>
          <a href="#contact" className="cta-button cta-primary">
            ラオスの旅をのぞいてみる
          </a>
        </div>
      </section>

      {/* 共感セクション */}
      <section className="empathy">
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
                src="/image/5122D95E-B4F0-4958-AEBB-9CF8399191AF.jpg"
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
                src="/image/6123A3AD-45AB-42A0-B819-F2F6D8746906.jpg"
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
                src="/image/647F5996-F7CC-4796-A7E2-A9A3A99771F1.jpg"
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
          <a href="#contact" className="cta-button cta-secondary">
            相談してみる
          </a>
        </div>
      </section>
    </main>
  )
}


