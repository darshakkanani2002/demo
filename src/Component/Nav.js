import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container">
                        <Link className="navbar-brand" to="#"><img src='/assets/image/logo-1.jpg' className='' height='80px' alt=''></img></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 nav-menu">
                                <li className="nav-item m-3 fw-bolder">
                                    <Link className="nav-link" aria-current="page" to="/">HOME</Link>
                                </li>
                                <li className="nav-item m-3 fw-bolder">
                                    <Link className="nav-link" to="about">ABOUT</Link>
                                </li>
                                <li className="nav-item dropdown m-3 fw-bolder">
                                    <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PRODUCT
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item nav-menu-li" to="#">API</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" to="#">INTERMEDIATES</Link></li>
                            
                                    </ul>
                                </li>
                                <li className="nav-item m-3 fw-bolder">
                                    <Link className="nav-link" aria-disabled="true" to="contact">CONTACT US</Link>
                                </li>

                                <li className="nav-item m-3 fw-bolder">
                                    <Link className="nav-link" aria-disabled="true">BLOG</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <Link to="inquiry"><button className='btn btn-primary fw-bolder m-2'><i class="fa-solid fa-phone"></i> INQUIRY</button></Link>
                                    <button className="btn btn-outline-dark m-2" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
