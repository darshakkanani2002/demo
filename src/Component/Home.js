import React, { Component } from 'react'
import Styled from 'styled-components';

export default class Home extends Component {

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
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./assets/image/back-img-1.jpg" className="d-block w-100" alt="..." height="750px" />
              <div className="carousel-caption d-none d-md-block">
                <h2 className='text-dark fw-bold'>MEET YOUR ALL NEEDS OF</h2>
                <h1 className='home-first-slide-text fw-bold mt-4' data-aos="fade-up" data-aos-duration="3000">PHARMACEUTICAL API</h1>
                <h4 className='text-dark fw-bold mt-4'>EXPORTER OF HIGH QUALITY ACTIVE PHARMACEUTICAL INGREDIENT</h4>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./assets/image/back-img-2.jpg" className="d-block w-100 home-slider-image" alt="..." height="750px" />
              <div className="carousel-caption d-none d-md-block">
                <h1 className='home-first-slide-text fw-bold mt-4'>PHARMA INTERMEDIATES</h1>
                <h3 className='mt-2'>DESTRIBUTORS & EXPORTER OF PHARMA INTERMEDIATES.</h3>
                <ButtonStyle type='button'>VIEW OUR PRODUCTS</ButtonStyle>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <section>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-4 home-back-img-1' data-aos="fade-up" data-aos-duration="1000">
                <div className='home-back-img'>
                  <h2 className='text-light'>ACTIVE PHARMACEUTICALS <span style={{ color: '#22a7cc' }}>INGREDIENTS</span></h2>
                  <p className='text-light'>Atom pharma associated company's facilities are designed to meet the highest worldwide standards for API (active pharmaceutical ingredients).</p>
                </div>
              </div>

              <div className='col-lg-4 home-back-img-2' data-aos="fade-up" data-aos-duration="1000">
                <div className='home-back-img'>
                  <h2 className='text-light'>APHARMACEUTICALS <span style={{ color: '#0698d6' }}>INTERMEDIATE</span></h2>
                  <p className='text-light'>Atom pharma as a group company deals in all kinds of Pharmaceutical Intermediate with an excellent multipurpose facility meeting WHO, GMP standards</p>
                </div>
              </div>

              <div className='col-lg-4 home-back-img-3' data-aos="fade-up" data-aos-duration="1000">
                <div className='home-back-img'>
                  <h2 className='text-light'>CONTRACT <span style={{ color: '#0698d6' }}>MANUFACTURING</span></h2>
                  <p className='text-light'>Atom pharma gives contract manufacturing facility in pharma product like Pharmaceutical Tablet, Pharmaceutical Capsules, Pharmaceutical Injections, Pharmaceutical Syrups and Suspensions with particular strengths to develop and supply finished formulation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='bg-light'>
          <section className='mb-5'>
            <div className='col-lg-12 text-center pt-5'>
              <h2 className='fw-semibold'>WHY <span style={{ color: '#0698d6' }}>CHOOSE US</span></h2>
              <div className='home-box-div'></div>
            </div>
            <div className='container mt-5'>
              <div className='row'>
                <div className='col-lg-4 text-center p-4' data-aos="flip-right" data-aos-duration="2000">
                  <div className='home-why-choose-section'>
                    <div>
                      <img src="./assets/image/ATOM-PHARMACEUTICALS-ICON-3.png" height="100px" alt=''></img>
                    </div>
                    <div className='mt-4'>
                      <h3>BEST QUALITY</h3>
                      <h6 className='mt-4'>We are providing best quality products to our customer because The Supreme Quality For Leadership is Unquestionbly Integrity</h6>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 text-center p-4' data-aos="flip-right" data-aos-duration="2000">
                  <div className='home-why-choose-section'>
                    <div>
                      <img src="./assets/image/ATOM-PHARMACEUTICALS-ICON-5.png" height="100px" alt=''></img>
                    </div>
                    <div className='mt-4'>
                      <h3>INTEGRITY</h3>
                      <h6 className='mt-4'>Do the right thing with conviction & without fear, Business honesty, impartiality & fairness at all times, Adhere to strong ethical and moral standards</h6>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 text-center p-4' data-aos="flip-right" data-aos-duration="2000">
                  <div className='home-why-choose-section'>
                    <div>
                      <img src="./assets/image/ATOM-PHARMACEUTICALS-ICON-2.png" height="100px" alt=''></img>
                    </div>
                    <div className='mt-4'>
                      <h3>Consistency</h3>
                      <h6 className='mt-4'>Endeavour to bring new products to the market & consistently deliver value, to Be transparent in dealings</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-lg-4 text-center p-4' data-aos="flip-right" data-aos-duration="2000">
                  <div className='home-why-choose-section'>
                    <div>
                      <img src="./assets/image/ATOM-PHARMACEUTICALS-ICON-4.png" height="100px" alt=''></img>
                    </div>
                    <div className='mt-4'>
                      <h3>Innovation</h3>
                      <h6 className='mt-4'>Innovation
                        Implement new ideas & technologies to meet unmet needs and think ahead of times</h6>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 text-center p-4' data-aos="flip-right" data-aos-duration="2000">
                  <div className='home-why-choose-section'>
                    <div>
                      <img src="./assets/image/1-2.png" height="100px" alt=''></img>
                    </div>
                    <div className='mt-4'>
                      <h3>Passion</h3>
                      <h6 className='mt-4'>Infuse energy in everything that we do, Walk that extra mile, Inspire others, Do your best in every situation</h6>
                    </div>
                  </div>
                </div>

                <div className='col-lg-4 text-center p-4'data-aos="flip-right" data-aos-duration="2000">
                  <div className='home-why-choose-section'>
                    <div>
                      <img src="./assets/image/ATOM-PHARMACEUTICALS-ICON-1.png" height="100px" alt=''></img>
                    </div>
                    <div className='mt-4'>
                      <h3>SUSTAINABILITY</h3>
                      <h6 className='mt-4'>Atom Pharma focus here is on the role of patients, doctors and pharmacists in contributing to green and sustainable pharmacy by proper use of the pharmaceuticals.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='my-5'>
            <div className='col-lg-12 text-center'>
              <h2 className='fw-semibold'>COMPANY <span style={{ color: '#0698d6' }}>CERTIFICATES</span></h2>
              <div className='home-box-div'></div>
            </div>


            <div className='container-fluid mt-5'>
              <div className='row'>
                <div className='col-lg-3 p-4'>
                  <div className='home-certi-section'>
                    <img src='./assets/image/certi-1.jpg' className='img-fluid' alt=''/>
                  </div>
                </div>

                <div className='col-lg-3 p-4'>
                  <div className='home-certi-section'>
                    <img src='./assets/image/certi-2.png' className='img-fluid' alt=''/>
                  </div>
                </div>

                <div className='col-lg-3 p-4'>
                  <div className='home-certi-section'>
                    <img src='./assets/image/certi-3.png' className='img-fluid' alt=''/>
                  </div>
                </div>

                <div className='col-lg-3 p-4'>
                  <div className='home-certi-section'>
                    <img src='./assets/image/certi-4.png' className='img-fluid' alt=''/>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
