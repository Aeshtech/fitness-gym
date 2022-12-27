import React from 'react'

export default function Home() {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 position-relative">
                            <div className='hero'>
                                <img src="./img/hero-banner.jpeg" alt="" className='mw-100' />
                            </div>

                            <div className='text-center position-absolute hero-content'>
                                <h1 className='text-light'>MAKE YOU A BODY <span className='text-danger'>BUILDER </span></h1>
                                <p className='text-light'>
                                    We provide our best opportunity and qualified trainers for best
                                    workout as you want.
                                </p>
                                <button className="btn btn-outline-info rounded-3">Get Started</button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
