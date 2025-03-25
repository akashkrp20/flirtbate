import Image from 'next/image'
import React from 'react'

export const Steps = () => {
    return (
        <>
            <div className='step-relative'>
                <div className='text-container'>
                    <div className='text-inner width-100'>
                        <p className='text-title'>
                            Seamless connections made simple
                        </p>
                        <p className='text-para'>
                            Discover how easy it is to meet and interact with our models. Follow these simple steps to start your journey.
                        </p>
                    </div>
                </div>
                <div className='step-container'>
                    <div className='step-main'>
                        <div className='step-outer'>
                            <div className='step-inner'>
                                <div className='step-icon-cover'>
                                    <div className='step-icon'>
                                        <Image src='/images/home-search-img.png' width={24} height={24} alt='icon' />
                                    </div>
                                </div>
                                <h6 className='step-heading'>Sign up / Log in</h6>
                                <div className='step-para'>
                                    <span>Create your free account or log in. Begin exploring with just a few clicks, ensuring your privacy and security from the start.</span>
                                </div>
                            </div>
                            <div className='step-inner'>
                                <div className='step-icon-cover'>
                                    <div className='step-icon'>
                                        <Image src='/images/home-choose-your-model-img.png' width={24} height={24} alt='icon' />
                                    </div>
                                </div>
                                <h6 className='step-heading'>Choose your model</h6>
                                <div className='step-para'>
                                    <span>
                                        Whether you are seeking passionate encounters or bodily exploration our video call feature will serve all your fantasies.</span>
                                </div>
                            </div>
                            <Image className='step-line' src='/images/line.png' width={932} height={140} alt='line' />
                            <div className='step-inner'>
                                <div className='step-icon-cover'>
                                    <div className='step-icon'>
                                        <Image src='/images/home-connect-instantly-img.png' width={24} height={24} alt='icon' />
                                    </div>
                                </div>
                                <h6 className='step-heading'>Connect instantly</h6>
                                <div className='step-para'>
                                    <span>
                                        Start an engaging convo. through video call or chat. We offer high-quality, secure connections for your private interactions.</span>
                                </div>
                            </div>
                        </div>
                        <div className='step-btn'>
                            <button className="footer-signup" type="button">
                                <span>Sign up Now</span>
                                <Image src="/images/signup-img.png" width={16} height={16} alt="signup" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="red-blur-2"></div>
                <div className="red-blur-3"></div>
                <div className='vector-line'></div>
            </div>
        </>
    )
}
