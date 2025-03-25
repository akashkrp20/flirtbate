import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <div className='header-Container'>
                <a className='logo' href='/'><Image src='/images/new-logo.png' width={182} height={36} alt='flirtbate' className='logo-image' /></a>
                <div className='search-box'>
                    <Image src='/images/searchLine.svg' alt='Search Icon' width={20} height={20} />
                    <span>Search</span>
                </div>
                <div className="login-box">
                    <Image src="/images/english-flag.png" alt='login' width={20} height={12} />
                    <span>EN</span>
                    <svg className="svg-select" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="KeyboardArrowDownRoundedIcon"><path d="M8.12 9.29 12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7a.9959.9959 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0"></path></svg>
                </div>
                <div className='input-box'>
                    <Image src="/images/loginCircle.svg" alt='login' width={20} height={20} />
                    <spna>Login</spna>
                </div>
                <button className="free-call-button">
                <Image src="/images/free-credit-icon.png" alt='login' width={24} height={30} />
                    <span>
                    Get 1 minute of Free Call
                    </span>
                </button>
                <button className='menu-button'>
                    <Image src='/images/menuFill.svg' width={24} height={24} alt='menu' />
                </button>
            </div>
        </header>
    )
}
