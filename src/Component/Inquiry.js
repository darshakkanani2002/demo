import React, { Component } from 'react'
import Styled from 'styled-components';

export default class Inquiry extends Component {
    

    render() {
        let ButtonStyle = Styled.button`
        background-color:#0698d6;
        padding:10px;
        color:#fff;
        border:none;
        font-weight:bold;
        border-radius:8px;
        &&:hover{
          background-color:#000;
          transition:0.5s;
        }`
        return (
            <div>
                <div className='about-text-div'>
                    <h1 className='fw-bold'>INQUIRY</h1>
                </div>
                <div className='inquiry-first-back-img'>
                    <div className='inquiry-first-back-div'>
                        <div className='text-center py-5'>
                            <h3 className='fw-bold inquiry-first-back-text'>DON’T KNOW WHAT TO START WITH?</h3>
                            <h1 className='text-light fw-bolder mt-5'>PLEASE FILL IN THE FOLLOWING FORM<br /> AND WE’LL GET BACK TO YOU <br /> SHORTLY
                            </h1>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='container p-5 inquiry-form-div'>
                        <div className='row'>
                            <div className='col-lg-6 inquiry-form-div2'>
                                <h5 className='text-muted pt-4 '>FREE CONSULTATION</h5>
                                <h2>GET A FREE QUOTE</h2>

                                <div className='container pb-4'>
                                    <form onSubmit={this.onSubmit}>
                                        <label className='form-lable mt-3'>Name*</label>
                                        <input type='text' className='form-control'></input>

                                        <label className='form-lable mt-3'>Email*</label>
                                        <input type='email' className='form-control'></input>

                                        <label className='form-lable mt-3'>Subject*</label>
                                        <input type='text' className='form-control'></input>

                                        <label className='form-lable mt-3'>Message*</label>
                                        <textarea type="text" className='form-control'style={{height:"200px"}}></textarea>
                                      
                                        <ButtonStyle type='button' className='mt-4'>Send</ButtonStyle>
                                    </form>
                                </div>
                            </div>

                            <div className='col-lg-6'>
                                <img src='./assets/image/inquiry-page-img.jpg' alt="" className='img-fluid inguiry-img'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
