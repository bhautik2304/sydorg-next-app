"use client"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { appRoute } from '@/constants'
function Navbar() {
    const [hamberger, setHamberger] = useState(false)
    const path = usePathname()
    const handleMenuToggle = () => {
        setHamberger(!hamberger);
    };
    return (
        <>
            <header className="">
                <nav className="navbar navbar-expand-lg p-0">
                    <div className="container-fluid p-0">
                        <Link className="navbar-brand ms-5" href={appRoute.home}><img src="./images/logo.jpeg" alt="logo" width="175px" /></Link>
                        <button className="navbar-toggler" onClick={handleMenuToggle} >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${hamberger ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link onClick={handleMenuToggle} className={`nav-link ${path == appRoute.home && "active"}`} aria-current="page" href={appRoute.home}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={handleMenuToggle} className={`nav-link ${path == appRoute.about && "active"}`} href={appRoute.about}>Our Introduction</Link>
                                </li>
                                <li className="nav-item">
                                    <div class="dropdown">
                                        <Link class={`nav-link dropdown-toggle ${path == appRoute.product && "active"}`} href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Our Product
                                        </Link>

                                        <ul class="dropdown-menu">
                                            <li><Link onClick={handleMenuToggle} class="dropdown-item" href={"#"}></Link></li>
                                            <li><Link onClick={handleMenuToggle} class="dropdown-item" href={appRoute.product}>Aviation ATS</Link></li>
                                            <li><Link onClick={handleMenuToggle} class="dropdown-item" href={appRoute.second}>Strike Rate</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={handleMenuToggle} className={`nav-link ${path == appRoute.blogs && "active"}`} href={appRoute.blogs}>Blogs + Innovations</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={handleMenuToggle} className={`nav-link ${path == appRoute.contact && "active"}`} href={appRoute.contact}>Contact us</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar