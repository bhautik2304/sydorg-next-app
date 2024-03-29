import Script from 'next/script'
import Image from "next/image";
import { TestimonialSlider, Conter } from '@/components';


export default function Home() {
  return (
    <>
      <div>
        <div className="hero text-white home-page-hero" style={{ backgroundImage: 'url("./images/home-hero.jpg")' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6"  >
                <h2 style={{
                  marginTop: "100px"
                }} >Providing advanced software solutions for the automation of Air Traffic Control </h2>
                <p>Sydorg Technologies Private Limited is at the forefront of developing intelligent automation
                  solutions that contribute to the modernization and optimization of ATC towers worldwide.</p>
                <button className="secondary-button">Watch Video <i className="fa-regular fa-circle-play" /></button>
              </div>
              <div className="col-md-6">
                <iframe style={{
                  height: 700,
                  width: "100%"
                }} src="https://lottie.host/embed/69da3e52-cd32-416b-8637-74861004fc00/yfns1KmoKz.json"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 hero second-hero our-services" style={{ backgroundImage: 'url("./images/Airplane-on-White-Background-Stock-Image-Image-of-gear-bright-3201317.png")' }}>
          <div className="container">
            <h2>Our flagship software solutions are designed to automate various aspects</h2>
            <p>Leveraging state-of-the-art technologies, Sydorg aims to enhance the efficiency, safety, and overall
              effectiveness of air traffic management systems</p>
            <div className="row w-75 m-auto mt-5">
              <div className="col-xxl-3 col-xl-3 col-md-3 col-sm-6 col-12">
                <div className="card">
                  <div style={{ backgroundImage: 'url(./images/atc-operations.png)' }} className="h-100 card-img">
                    <div className="img-text">
                      <h3>ATC Operations</h3>
                      <p>Integrated ATC operations modules to help operate and automate</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-md-3 col-sm-6 col-12">
                <div className="card mt-5">
                  <div style={{ backgroundImage: 'url(./images/communication.jpg)' }} className="h-100 card-img">
                    <div className="img-text">
                      <h3>Communication</h3>
                      <p>Streamline the communication process</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-md-3 col-sm-6 col-12">
                <div className="card">
                  <div style={{ backgroundImage: 'url(./images/data-management.jpg)' }} className="h-100 card-img">
                    <div className="img-text">
                      <h3>Data Management</h3>
                      <p>End-to-End data management Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-3 col-md-3 col-sm-6 col-12">
                <div className="card mt-5">
                  <div style={{ backgroundImage: 'url(./images/decision-making.jpg)' }} className="h-100 card-img">
                    <div className="img-text">
                      <h3>Decision-Making</h3>
                      <p>Our system helps you to take better, reliable, and faster decision’s</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="primary-background why-us-section">
          <div className="container">
            <b>WHY US?</b>
            <div className="row justify-content-center align-items-center">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 order-xxl-1 order-xl-1 order-lg-1 order-md-1 order-sm-2 order-2">
                <div className="section-content">
                  <h2>Sydorg Technologies Private Limited</h2>
                  <p>We are setup to deliver long term solutions, or scale to different needs quicklyWith a
                    commitment to innovation and safety in the aviation industry, Sydorg Technologies Private
                    Limited is at the forefront of developing intelligent automation solutions that contribute
                    to the modernization and optimization of ATC towers worldwide................</p>
                  <button className="primary-button">Know more <i className="fa-solid fa-arrow-right" /></button>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 order-xxl-2 order-xl-2 order-lg-2 order-md-2 order-sm-1 order-1">
                <img src="./images/why-us.png" alt="Why us" className="w-100" />
              </div>
            </div>
          </div>
        </div>
        <div className="container our-intro-section">
          <b>WHO WE ARE</b>
          <h2 className="mt-3 mb-4">Innovative start-up focused on revolutionizing the aviation industry through
            cutting-edge software solutions</h2>
          <div className="row">
            <div className="col-md-6">
              <p>Sydorg Technologies Private Limited is a dynamic and innovative start-up focused on revolutionising
                the aviation industry through cutting-edge software solutions. Established with a mission to enhance
                the efficiency and safety of Air Traffic Control (ATC) towers, Sydorg is committed to developing
                state-of-the-art automation tools that redefine the way air traffic is managed</p>
              <p>It was not long to discover that supported to knowledge by scientific perspectives, would be the
                solution to the real needs of the sector. </p>
              <div className="d-flex align-items-center mt-5">
                <button className="me-5 primary-button">Know more</button>
                <a href><u>Get a demo of our product now</u></a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="working-steps-section">
                <div className="d-flex mb-4">
                  <div>
                    <span className="step-number">01</span>
                  </div>
                  <div>
                    <h3>Exported to 24 Countries</h3>
                    <p>168 companies in 24 countries use our machines</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div>
                    <span className="step-number">02</span>
                  </div>
                  <div>
                    <h3>8 Billion Products Per Day</h3>
                    <p>8 billion products are produced daily from our machines.</p>
                  </div>
                </div>
                <div className="d-flex mb-4">
                  <div>
                    <span className="step-number">03</span>
                  </div>
                  <div>
                    <h3>We touch 850 million people a day</h3>
                    <p>850 million people use products made by their machines every day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secondary-background customer-review-section position-relative">
          <div className="container">
            <div>
              <h2>Don’t just take <span>our word</span> for it.</h2>
              <span>Hear it from our</span>
              <h3>Precious Customer</h3>
            </div>
            <div>
              <TestimonialSlider />
            </div>
          </div>
          <div className="position-absolute bottom-0 w-100">
            <img src="./images//testimonial-bg.png" className="w-100" alt="testimonial background" />
          </div>
        </div>

        <div className='container-fluid' >
          <Conter />
        </div>


        <div className="primary-background blog-section">
          <div className="container">
            <h2 className="text-center">Stay updated with our Latest <b>Blogs</b></h2>
            <div className="row">
              <div className="col-md-3 mb-3">
                <div className="card">
                  <img src="./images/blog1.png" alt="blog1" />
                  <div>
                    <h3>Convenience at your fingertips</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                      mo.............</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card">
                  <img src="./images/blog2.png" alt="blog2" />
                  <div>
                    <h3>Supporting local businesses</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                      mo.............</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card">
                  <img src="./images/blog3.png" alt="blog3" />
                  <div>
                    <h3>Affordable prices for everyone</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                      mo.............</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-3">
                <div className="card">
                  <img src="./images/blog4.png" alt="blog4" />
                  <div>
                    <h3>Affordable prices for everyone</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                      mo.............</p>
                  </div>
                </div>
              </div>
              <div className="col-md-12 text-end mt-5">
                <button className="secondary-button">Know more <i className="fa-solid fa-arrow-right" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="container news-latter">
          <div className="news-latter-form">
            <span>News Latter</span>
            <div className="row">
              <div className="col-md-7">
                <div className="form-group">
                  <label htmlFor>Enter your mail</label>
                  <div className="form-field d-flex">
                    <input type="text" className="form-control" />
                    <button className="ms-3">Subscribe <i className="fa-solid fa-paper-plane" /></button>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
