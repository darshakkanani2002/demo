import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='mt-5'>
                    <section className='bg-dark'>
                        <div className='container'>
                            <div className='row text-light py-4'>
                                <div className='col-lg-10'>
                                    <h3 className='mb-0'>WANT TO GET ADDITIONAL INFORMATION OR SEND AN INQUIRY ?</h3>
                                </div>
                                <div className='col-lg-2'>
                                    <button className='btn btn-light'>REQUEST A QUOTE</button>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className='bg-light'>
                        <div className='container py-5'>
                            <div className='row'>
                                <div className='col-lg-3'>
                                    <h3 className='fw-bold'>ABOUT US</h3>
                                    <div className='mt-4'>
                                        <p className='fs-6'>
                                            We are fast growing integrated and ISO 9001-2008 certified Pharmaceutical bulk drugs [API] , pharmamedicine and Intermediates exporting company.
                                        </p>
                                    </div>
                                </div>

                                <div className='col-lg-3'>
                                    <h3 className='fw-bold'>LATEST PRODUCTS</h3>
                                    <div className='footer-product-div mt-4'></div>
                                    <p className='ps-4 footer-latest-pro fw-semibold'>PHARMACEUTICAL API</p>
                                    <p className='ps-4 footer-latest-pro fw-semibold'>PHARMACEUTICAL API</p>
                                </div>

                                <div className='col-lg-3'>
                                    <h3 className='fw-bold'>QUICK LINKS</h3>
                                    <div className='footer-product-div-2 mt-4'></div>
                                    <p className='ps-4 footer-latest-pro fw-semibold'>HOME</p>
                                    <p className='ps-4 footer-latest-pro fw-semibold'>COMPANY HISTORY</p>
                                    <p className='ps-4 footer-latest-pro fw-semibold'>INQUIRY</p>
                                    <p className='ps-4 footer-latest-pro fw-semibold'>CONTACT US</p>
                                </div>

                                <div className='col-lg-3 '>
                                    <h3 className='fw-bold'>POPULAR PRODUCTS</h3>
                                    <div className='mt-4 footer-popular-product-div p-4' style={{ width: "85%" }}>
                                        <h6 ><i class="fa-solid fa-circle-dot"></i> PARACETAMOL</h6>
                                        <h6 className='mt-4'><i class="fa-solid fa-circle-dot"></i> CAFFEINE ANHYDROUS</h6>
                                        <h6 className='mt-4'><i class="fa-solid fa-circle-dot"></i> NICOTINE</h6>
                                        <h6 className='mt-4'><i class="fa-solid fa-circle-dot"></i> SILDENAFIL</h6>
                                        <h6 className='mt-4'><i class="fa-solid fa-circle-dot"></i> TADALAFIL</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='bg-dark pt-4 pb-3 text-center'>
                        <div className='container'>
                            <div className='footer-last-section-div'></div>
                            <h5 className='text-light mt-3 mb-0'>DESIGNED BY VARNIINFOSYSTEM.COM © 2021 ALL RIGHTS RESERVED</h5>
                        </div>
                    </section>
                </footer>
            </div>
        )
    }
}
