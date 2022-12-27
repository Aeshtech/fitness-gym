import React from 'react'
export default function Navabr() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/#">Fitness Gym</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#" tabindex="-1" aria-disabled="true">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#program" tabindex="-1" aria-disabled="true">Program</a>
                            </li>
                        </ul>
                        <button className='btn btn-primary me-5'>Register Now</button>
                    </div>
                </div>
            </nav>
        </>
    )
}
