import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='about-text-div mt-3'>
          <h1 className='fw-bold'>ABOUT US</h1>
        </div>

        <section className='mt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6' data-aos="fade-right" data-aos-duration="3000">
                <img src='./assets/image/careers-background-consulting-bw-business-world.jpg' className='img-fluid' alt='' />
              </div>

              <div className='col-lg-6' data-aos="fade-left" data-aos-duration="3000">
                <h2>ABOUT US</h2>
                <div className='about-under-line'></div>
                <p className='mt-2 about-line-height'>Atom pharma is ISO 9001:2015 integrated, fastest growing and reputed Pharmaceutical bulk drugs [API] and pharmaceutical Intermediates exporting company. We have the industry’s broadest portfolio of more than 80 high quality API (active pharmaceutical ingredient) products, and more than 50 pharmaceutical intermediate. We offer the best APIs to our customers and have satisfied customers in over 20 countries.</p>

                <p className='about-line-height'>We ensure that our partners have the approved EUGMP, cGMP, USFDA, GMP, Halal-Kosher, Korea FDA along with the documentation and systems that are required for a regulated market. This makes Atom pharma a reliable source for an extensive range of pharmaceutical ingredients to meet the needs of the International pharmaceutical industry. the Company has been supporting several domestic and international customers with USDMF, EDMF, Canadian DMF, TDMF, KDMF, JDMF, COS, COPP, Tech Pack etc. with respect to regulatory, non-regulatory and semi-regulatory markets.</p>

                <p className='about-line-height'>Encouraged by the response from various reputed buyers, the Company has expanded its capacity of existing products as well as seeking strategic alliance for setting up long terms contracts for raw materials and finished goods.</p>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-5'>
          <div className='about-back-img'>
            <div className='about-back-div'>
              <div className='container'>
                <div className='row py-5'>
                  <div className='col-lg-3 col-md-6 col-sm-6 text-center' data-aos="zoom-out" data-aos-duration="2000">
                    <h1 className='about-counter-text pt-5'>80+</h1>
                    <h3 className='text-light fw-bold'>PHARMA API PRODUCTS</h3>
                  </div>

                  <div className='col-lg-3 col-md-6 col-sm-6 text-center' data-aos="zoom-out" data-aos-duration="2000">
                    <h1 className='about-counter-text pt-5'>50+</h1>
                    <h3 className='text-light fw-bold'>ADVANCE INTERMEDIATE PRODUCT</h3>
                  </div>

                  <div className='col-lg-3 col-md-6 col-sm-6 text-center' data-aos="zoom-out" data-aos-duration="2000">
                    <h1 className='about-counter-text pt-5'>90+</h1>
                    <h3 className='text-light fw-bold'>FINISHED PHARMA PRODUCTS</h3>
                  </div>

                  <div className='col-lg-3 col-md-6 col-sm-6 text-center' data-aos="zoom-out" data-aos-duration="2000">
                    <h1 className='about-counter-text pt-5'>20+</h1>
                    <h3 className='text-light fw-bold'>COUNTRY WE DEALINGS</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='mt-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <img src='./assets/image/our_vision.jpg' className='img-fluid' alt='' />
              </div>
              <div className='col-lg-6 pt-5'>
                <h2>OUR VISION</h2>
                <div className='about-under-line'></div>
                <p className='mt-2 about-line-height'>Reaching People and Touching Lives Globally as a Leading Provider of Valued Medicines
                  Committed to bringing innovative products for the healthcare professional to improve the health and well being of individuals.</p>

                <p className='mt-2 about-line-height'>To be a leading pharmaceutical bulk drugs [API] and Intermediates manufacturing company in India. To become a significant global player by innovative technology and providing high quality, cost effective and affordable products.</p>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 py-5'>
                <h2>OUR MISSION</h2>
                <div className='about-under-line'></div>
                
                
                <h6 className='mt-5'><i class="fa-solid fa-play me-3 about-our-mission-icon"></i> Under promise and over deliver</h6>
                <h6 className='mt-4'><i class="fa-solid fa-play me-3 about-our-mission-icon"></i> Walk that extra mile</h6>
                <h6 className='mt-4'><i class="fa-solid fa-play me-3 about-our-mission-icon"></i> Inspire others</h6>
                <h6 className='mt-4'><i class="fa-solid fa-play me-3 about-our-mission-icon"></i> Believe in raising the bar every time</h6>
                <h6 className='mt-4'><i class="fa-solid fa-play me-3 about-our-mission-icon"></i> Do the right thing with conviction & without fear</h6>
                
              </div>
              <div className='col-lg-6'>
                <img src='./assets/image/123359141-mission-word-cloud-collage-business-concept-background-1.webp' width="100%" className='about-image2' alt='' />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
