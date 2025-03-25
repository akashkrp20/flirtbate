import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-inner'>
          <div>
            <div className="footer-desc-outer">
              <p className="footer-para-inner">Ready to explore uncharted pleasures?</p>
              <p className="footer-desc-inner">Have the best experience on the best platform out there!</p>
            </div>
            <div className="footer-btn">
              <button className="footer-signup" type="button">
                <span>Sign up Now</span>
                <Image src="/images/signup-img.png" width={16} height={16} alt="signup" />
              </button>
            </div>
          </div>
          <div className='footer-menu-container'>
            <hr className='footer-hr' />
            <div className='footer-nemu'>
              <div className='footer-manu-inner'>
                <div className='manu-left'>
                  <a className='logo' href='/'><Image src='/images/new-logo.png' width={182} height={36} alt='flirtbate' className='logo-image' /></a>
                  <p>Instant connections, lasting memories</p>
                </div>
                <div className='manu-right'>
                  <div className='manu-1'>
                    <div className='manu-1-1'>
                      <p>menu</p>
                      <Link href='/'>Home</Link>
                      <Link href='/'>FAQs</Link>
                      <Link href='/'>Sign up</Link>
                      <Link href='/'>Login</Link>
                    </div>
                    <div className='manu-1-2'>
                      <p>Resource</p>
                      <Link href='/'>Privacy statement</Link>
                      <Link href='/'>Cookie statement</Link>
                      <Link href='/'>Terms and conditions</Link>
                    </div>
                  </div>
                  <div className='manu-2'>
                    <p>Category</p>
                    <Link href='/'>Cam to Cam</Link>
                    <Link href='/'>Sex Chat</Link>
                    <Link href='/'>Chat With Girls</Link>
                    <Link href='/'>Dirty Chats</Link>
                    <Link href='/'>Stranger Chat</Link>
                    <Link href='/'>Nude Chat</Link>
                    <Link href='/'>Mature Chat</Link>
                    <Link href='/'>Lesbian Chat</Link>
                    <Link href='/'>Cuckold Chat</Link>
                    <Link href='/'>Anonymous Chat</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='footer-copyright'>
              <span>© 2025 Flirtbate, All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
