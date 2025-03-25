import Image from 'next/image'
import React from 'react'

export const Banner = () => {
    return (
        <div className='banner-outer'>
            <div className='banner-left'>
                <div className='banner-upper'>
                    <div className="banner-heading">
                        <span className="banner-relative">
                            <div className="banner-txt-yel">
                                <span className="yellow-text">#1 Adult Video &nbsp;</span>
                                <Image src='/images/line-vector.svg' width={100} height={32} alt='line' className='image-line' />
                                {/* <img alt="word_underline" fetchpriority="high" width="100" height="32" decoding="async" data-nimg="1" src="/images/home/line-vector.svg" style="color: transparent; position: absolute; top: 44px; left: 0px; max-width: 354.18px; width: 100%;"> */}
                            </div>
                        </span>
                        Chat Platform
                    </div>
                    <p className="banner-text">From Cam Sex Chats to Private 1v1 Video Calls -Discover Pleasure Without Limits.</p>
                </div>
                <div className='banner-btn'>
                    <button className="footer-signup" type="button">
                        <span>Explore Models</span>
                    </button>
                </div>
            </div>
            <div className='modal-image'>
                <Image src='/images/home-banner-model1.jpg' width={462} height={452} alt='model' className='image-modal' />
            </div>
        </div>
    )
}
