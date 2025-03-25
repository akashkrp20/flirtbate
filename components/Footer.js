import Image from 'next/image'
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
                      <a href='/'>Home</a>
                      <a href='/'>FAQs</a>
                      <a href='/'>Sign up</a>
                      <a href='/'>Login</a>
                    </div>
                    <div className='manu-1-2'>
                      <p>Resource</p>
                      <a href='/'>Privacy statement</a>
                      <a href='/'>Cookie statement</a>
                      <a href='/'>Terms and conditions</a>
                    </div>
                  </div>
                  <div className='manu-2'>
                    <p>Category</p>
                    <a href='/'>Cam to Cam</a>
                    <a href='/'>Sex Chat</a>
                    <a href='/'>Chat With Girls</a>
                    <a href='/'>Dirty Chats</a>
                    <a href='/'>Stranger Chat</a>
                    <a href='/'>Nude Chat</a>
                    <a href='/'>Mature Chat</a>
                    <a href='/'>Lesbian Chat</a>
                    <a href='/'>Cuckold Chat</a>
                    <a href='/'>Anonymous Chat</a>
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
