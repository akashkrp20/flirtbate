import Image from 'next/image'
import React from 'react'
import { models } from './models'

export const Card = () => {
    return (
        <>
            <div className='text-container'>
                <div className='text-inner'>
                    <p className='text-title'>
                        Explore your choices from the world of diverse beauty and charm
                    </p>
                    <p className='text-para'>
                        Select the companion who aligns with your desires.
                    </p>
                </div>
            </div>
            <div className='card-container'>
                <div className='card-outer'>
                    {models.map((model, index) => {
                        return (
                            <div className='card-inner' key={index}>
                                <div className='card-image' style={{ backgroundImage: `url(/images/card-${index}.jpeg)` }}>
                                    <div className='card-heart'>
                                        <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderIcon"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3m-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05"></path></svg>
                                    </div>
                                </div>
                                <div className='card-img-inner'>
                                    <div className='card-desc'>
                                        <div className='card-desc-1'>
                                            <div className='card-des-1-1'>
                                                <div className='card-name'>
                                                    <span>{model.name}</span>
                                                </div>
                                                <div className='card-green'>
                                                    <div></div>
                                                </div>
                                                <Image src='/images/Flag_of_Brazil.svg' width={16} height={8} alt='name' />
                                            </div>
                                            <div className='card-des-1-2'>
                                                <Image src='/images/dollar-img.jpg' width={22} height={22} alt='dollar-img' />
                                                <span className='card-dolr'>
                                                    {model.credit} credits/min
                                                </span>
                                            </div>
                                        </div>
                                        <div className='card-desc-2'>
                                            <span className='card-age'>{model.age}</span>
                                            <hr className='card-hr' />
                                            <span className='card-cntry'>
                                                {model.lag}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}



                </div>
            </div>
        </>
    )
}
