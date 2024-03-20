import Image from "next/image";

export default function Page() {
  return (
    <>
     <div>
  <div className="primary-background product-hero text-white position-relative">
    <div className="container">
      <div className="w-75 hero-content">
        <h2 className="fw-700 mb-3">Sydorg enable analytics backed with high success rate decision making</h2>
        <p className="mb-5">Sydorg partners with its client to enable analytics backed and high success rate decision making. It
          currently caters to specific spaces of aviation and sports industries and has two offerings.</p>
        <div className="bg-dark dark-container" />
      </div>
    </div>
  </div>
  <div className="our-offer-section">
    <div className="container">
      <h3 className="fw-700 mb-5">What are our offerings ?</h3>
      <h3 className="fw-700"><span>Aviation ATAS</span>, Cutting-edge solutions designed to automate various aspects of Air Traffic
        Control operations.</h3>
      <p className="fs-20">It utilizes real-time data analysis, predictive modeling,  and intuitive user interfaces for improved
        decision-making.</p>
      <div className="row my-5 align-items-center">
        <div className="col-md-7 our-intro-section p-0">
          <div className="working-steps-section m-0">
            <div className="d-flex mb-4">
              <div>
                <span className="step-number">
                  01
                </span>
              </div>
              <div>
                <h3>Communication Systems</h3>
                <p>Seamless and efficient communication tools to enhance coordination among air traffic controllers and with pilots.</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div>
                <span className="step-number">
                  02
                </span>
              </div>
              <div>
                <h3>Data Management</h3>
                <p>Comprehensive data management solutions ensuring the accuracy, accessibility, and security of critical information.</p>
              </div>
            </div>
            <div className="d-flex mb-4">
              <div>
                <span className="step-number">
                  03
                </span>
              </div>
              <div>
                <h3>Predictive Analytics</h3>
                <p>Utilizing predictive modeling to anticipate and mitigate potential air traffic challenges,<br /> contributing to proactive decision-making.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 request-section">
          <div className="bg-dark p-5 text-white rounded">
            <h3 className="fs-24 text-center">Get Started</h3>
            <div className="form-group">
              <label htmlFor className="fs-12 mb-1">Email</label>
              <input type="text" className="form-control fs-12" />
            </div>
            <button className="third-button mt-4 w-100 fs-12 fw-400">Request Demo</button>
          </div>
        </div>
        <div className="col-md-12">
          <button className="ms-5 primary-button">Contact us for demo</button>
        </div>
      </div>
    </div>
  </div>
  <div className="container product-review">
    <div className="row text-center">
      <div className="col-md-4 px-5">
        <div className="justify-content-center d-flex text-align-center mb-3">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>
        <p className="mb-2">Maecenas convallis non sapien in commodo. Nulla semper pulvinar luctus. Proin luctus.</p>
        <b className="fs-24">Google</b>
      </div>
      <div className="col-md-4 px-5">
        <div className="justify-content-center d-flex text-align-center mb-3">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>
        <p className="mb-2">Maecenas convallis non sapien in commodo. Nulla semper pulvinar luctus. Proin luctus.</p>
        <b className="fs-24">Google</b>
      </div>
      <div className="col-md-4 px-5">
        <div className="justify-content-center d-flex text-align-center mb-3">
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
          <i className="fa-solid fa-star" />
        </div>
        <p className="mb-2">Maecenas convallis non sapien in commodo. Nulla semper pulvinar luctus. Proin luctus.</p>
        <b className="fs-24">Google</b>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
