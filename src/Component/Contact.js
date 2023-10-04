import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className='about-text-div'>


                    <h1 className='fw-bold'>DROP US A LINE</h1>
                </div>
                <div >
                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d355.11720982716844!2d72.87445007300721!3d21.1969562764663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fbf46418415%3A0xdeb4bdc37c71aa5!2sAtom%20Pharma!5e0!3m2!1sen!2sin!4v1694010625157!5m2!1sen!2sin" width="100%" height="650" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
                </div>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <div className='border contact-information-div mt-3' style={{ height: '320px' }}>
                                <div className='text-center pt-5'>
                                    <i class="fa-solid fa-location-dot contact-icons"></i>
                                </div>
                                <div className='text-center mt-3'>
                                    <h1>WE ARE HERE</h1>

                                    <p>309,TIMES TRADE CENTRE , PUNA-SIMADA  BRTS CANAL ROAD, SURAT 395010, GUJARAT,  INDIA.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='border contact-information-div mt-3' style={{ height: '320px' }}>
                                <div className='text-center pt-5'>
                                    <i class="fa-solid fa-envelope contact-icons"></i>
                                </div>
                                <div className='text-center mt-3'>
                                    <h1>MAIL US</h1>

                                    <p>info.atompharma@gmail.com (General Inquiry)</p>
                                    <p>export@atompharma.co.in(Export Inquiry)</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-lg-4'>
                            <div className='border contact-information-div mt-3' style={{ height: '320px' }}>
                                <div className='text-center pt-5'>
                                    <i class="fa-solid fa-phone contact-icons"></i>
                                </div>
                                <div className='text-center mt-3'>
                                    <h1>CALL US</h1>
                                    <p>Landline :- 0261-2858005</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
