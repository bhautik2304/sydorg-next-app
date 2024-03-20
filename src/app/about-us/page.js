import Image from "next/image";

export default function Page() {
  return (
   <>
   <div>
  <div className="hero" style={{backgroundImage: 'url("./images/about-us-hero.jpg")'}}>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2>Sydorg Technologies Private Limited</h2>
          <p>We are setup to deliver long term solutions, or scale to different needs quicklyWith a commitment
            to innovation and safety in the aviation industry, Sydorg Technologies Private Limited is at the
            forefront of developing intelligent automation solutions that contribute to the modernization
            and optimization of ATC towers worldwide</p>
          <button className="secondary-button">Watch Video <i className="fa-regular fa-circle-play" /></button>
        </div>
        <div className="col-md-6">
        </div>
      </div>
    </div>
  </div>
  <div className="container our-intro-section">
    <div className="row">
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 pe-md-5 py-5">
        <b>About our Company</b>
        <h2>Our business boasts top of the line services</h2>
        <div className="d-flex justify-content-between align-items-center mt-4 mb-3 fw-500">
          <span>Our Mission</span>
          {/* <span>Our Vission</span>
          <span>Our Value</span> */}
        </div>
        <p>Lorem ipsum dolor sit amet consectetur. Felis pellentesque nunc integer orci sit laoreet maecenas
          fermentum cursus. Arcu eget et tellus venenatis nulla ullamcorper. Volutpat id rhoncus dictumst est
          scelerisque risus non a. Mauris ipsum laoreet ac a. Sollicitudin duis in arcu mauris sem elementum
          facilisi ac. Leo semper commodo eleifend ipsum ut tortor diam blandit. Non in morbi proin sit vel
          non. Proin in nulla velit ut auctor et ut gravida volutpat. Ut cras leo lobortis facilisi amet
          pharetra amet tortor. Orci faucibus mattis et egestas.
          Convallis aliquam quis hendrerit libero arcu. Mattis.</p>
      </div>
      <div className="image-container col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 position-relative" style={{backgroundImage: 'url("./images/about-page.png")'}}>
        <div className="position-absolute top-50 start-50 translate-middle primary-background img-content">
          <span>14</span>
          <p>Year of Experience</p>
        </div>
      </div>
    </div>
  </div>
  <div className="primary-background our-team-section">
    <div className="container bg-white">
      <div className="row">
        <b className="text-center fw-400 mb-3">Ours Talented Team</b>
        <h2 className="text-center fw-700 mb-5">Our team</h2>
        <div className="row">
          <div className="col-xxl-9 col-xl-9 col-lg-7 col-md-12 col-sm-12 col-12 user-list">
            <div className="row">
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-4 col-sm-6 user-info">
                <div>
                  <img src="./images/team-1.jpg.png" alt="team 1" />
                  <span className="d-block fw-500 mt-3">Cameron Williamson</span>
                  <small className="d-block mb-2">HR MANAGER</small>
                  <ul className="p-0">
                    <li className="d-flex">
                      <i className="fa-brands fa-facebook me-2" />
                      <i className="fa-brands fa-instagram me-2" />
                      <i className="fa-brands fa-twitter me-2" />
                      <i className="fa-brands fa-twitter" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-4 col-sm-6 user-info">
                <div>
                  <img src="./images/team-2.png" alt="team 2" />
                  <span className="d-block fw-500 mt-3">Leslie Alexander</span>
                  <small className="d-block mb-2">CHIEF EXECUTIVE</small>
                  <ul className="p-0">
                    <li className="d-flex">
                      <i className="fa-brands fa-facebook me-2" />
                      <i className="fa-brands fa-instagram me-2" />
                      <i className="fa-brands fa-twitter me-2" />
                      <i className="fa-brands fa-twitter" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-4 col-sm-6 user-info">
                <div>
                  <img src="./images/team-3.jpg.png" alt="team 3" />
                  <span className="d-block fw-500 mt-3">Guy Hawkins</span>
                  <small className="d-block mb-2">HR SENIOR EXECUTIVE</small>
                  <ul className="p-0">
                    <li className="d-flex">
                      <i className="fa-brands fa-facebook me-2" />
                      <i className="fa-brands fa-instagram me-2" />
                      <i className="fa-brands fa-twitter me-2" />
                      <i className="fa-brands fa-twitter" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-4 col-sm-6 user-info">
                <div>
                  <img src="./images/team-4.jpg.png" alt="team 4" />
                  <span className="d-block fw-500 mt-3">Savannah Nguyen</span>
                  <small className="d-block mb-2">HR PROFESSIONAL</small>
                  <ul className="p-0">
                    <li className="d-flex">
                      <i className="fa-brands fa-facebook me-2" />
                      <i className="fa-brands fa-instagram me-2" />
                      <i className="fa-brands fa-twitter me-2" />
                      <i className="fa-brands fa-twitter" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-4 col-sm-6 user-info">
                <div>
                  <img src="./images/team-1.jpg.png" alt="team 1" />
                  <span className="d-block fw-500 mt-3">Cameron Williamson</span>
                  <small className="d-block mb-2">HR MANAGER</small>
                  <ul className="p-0">
                    <li className="d-flex">
                      <i className="fa-brands fa-facebook me-2" />
                      <i className="fa-brands fa-instagram me-2" />
                      <i className="fa-brands fa-twitter me-2" />
                      <i className="fa-brands fa-twitter" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-4 col-sm-6 user-info">
                <div>
                  <img src="./images/team-2.png" alt="team 2" />
                  <span className="d-block fw-500 mt-3">Leslie Alexander</span>
                  <small className="d-block mb-2">CHIEF EXECUTIVE</small>
                  <ul className="p-0">
                    <li className="d-flex">
                      <i className="fa-brands fa-facebook me-2" />
                      <i className="fa-brands fa-instagram me-2" />
                      <i className="fa-brands fa-twitter me-2" />
                      <i className="fa-brands fa-twitter" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-4 col-sm-6 user-info">
                <div>
                  <img src="./images/team-3.jpg.png" alt="team 3" />
                  <span className="d-block fw-500 mt-3">Guy Hawkins</span>
                  <small className="d-block mb-2">HR SENIOR EXECUTIVE</small>
                  <ul className="p-0">
                    <li className="d-flex">
                      <i className="fa-brands fa-facebook me-2" />
                      <i className="fa-brands fa-instagram me-2" />
                      <i className="fa-brands fa-twitter me-2" />
                      <i className="fa-brands fa-twitter" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-xxl-3 col-lg-6 col-md-4 col-sm-6 user-info">
                <div>
                  <img src="./images/team-4.jpg.png" alt="team 4" />
                  <span className="d-block fw-500 mt-3">Savannah Nguyen</span>
                  <small className="d-block mb-2">HR PROFESSIONAL</small>
                  <ul className="p-0">
                    <li className="d-flex">
                      <i className="fa-brands fa-facebook me-2" />
                      <i className="fa-brands fa-instagram me-2" />
                      <i className="fa-brands fa-twitter me-2" />
                      <i className="fa-brands fa-twitter" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-3 col-lg-5 col-md-12 col-sm-12 col-12 single-user-info">
            <img src="./images/single-team.jpg.png" alt="Single info" className="mb-4" />
            <h3>Cameron wilson</h3>
            <u className="mb-3 d-block">HR manager</u>
            <ul className="p-0">
              <li>Expertise: Planning, Strategy</li>
              <li>Experience: 15 Years</li>
              <li>E-mail: Israfilsupol.info@gmail.com</li>
              <li>Phone: 507-452-1254</li>
              <li className="d-flex">
                <ul className="p-0 d-flex">
                  <i className="fa-brands fa-facebook me-3" />
                  <i className="fa-brands fa-instagram me-3" />
                  <i className="fa-brands fa-twitter me-3" />
                  <i className="fa-brands fa-twitter" />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container supervision-section">
    <div className="row">
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <h2 className="fw-700 mb-4">Let your worries thrive under our supervision</h2>
        <p>The company's flagship software solutions are designed to automate various aspects of ATC operations,
          streamlining communication, data management, and decision-making processes. Sydorg's offerings
          encompass real-time data analysis, predictive modelling, and intuitive user interfaces to empower
          air traffic controllers with the tools they need to handle increasing air traffic volumes.</p>
        <div className="row supervision-analyse-section">
          <div className="col-6">
            <div className="d-flex align-items-center">
              <div>
                <i className="fa-regular fa-square-check" />
              </div>
              <div>
                <b className="d-block fs-24">100+</b>
                <b className="fs-14">Successfull</b>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex align-items-center">
              <div>
                <i className="fa-regular fa-square-check" />
              </div>
              <div>
                <b className="d-block fs-24">97+</b>
                <b className="fs-14">Clients Today</b>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 align-items-center">
          <button className="third-button me-3">Contact Now</button>
          <button className="secondary-button border ps-3 pe-4 me-3"><i className="fa-solid fa-chevron-right" /></button>
          <a href className="fw-700 me-3">Book a Demo Today</a>
        </div>
      </div>
      <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
        <div className="row">
          <div className="col-8 container-image text-center">
            <img src="./images/about-us-2.png" className="h-75" alt="about us" />
          </div>
          <div className="col-4 position-relative">
            <div className="bg-white progress-card p-3">
              <span className="d-block fw-600 mb-2">Clients completed</span>
              <span className="d-block fw-600 fs-14 mb-4">Total Clients</span>
              <b>$89,543</b>
              <progress id="file" value={32} max={100}> 32% </progress>
              <div className="d-flex justify-content-between">
                <span className="fs-12">14%</span>
                <span className="fs-12">$1M</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

   </>
  );
}
