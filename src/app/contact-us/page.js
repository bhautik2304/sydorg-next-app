import Image from "next/image";

export default function Page() {
  return (
    <>
     <div>
  <div className="hero contact-us-section" style={{backgroundImage: 'url("./images/contact-us.jpg")'}}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="px-3">
            <h2 className="fw-500">Don't hesitate to Connect us for additional info</h2>
            <p>Tellus rutrum tellus pellentesque eu. Sagittis purus sit
              amet volutpat. Sed ullamcorper tellus rutrum tellus
              pellentesque eu. Sagittis purus sit</p>
            <button className="third-button">Signup</button>
          </div>
        </div>
        <div className="col-md-6 contact-form">
          <div className="px-3">
            <div className="bg-white text-dark p-5">
              <h2 className="text-dark fw-500 fs-24">Online Contact</h2>
              <form action>
                <div className="form-group">
                  <input type="text" className="form-control mb-3 fs-14 bg-body-tertiary" placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control mb-3 fs-14 bg-body-tertiary" placeholder="Enter your email" />
                </div>
                <div className="form-group">
                  <textarea className="form-control mb-3 fs-14 bg-body-tertiary" id="exampleFormControlTextarea1" rows={6} defaultValue={""} />
                </div>
                <div>
                  <button className="third-button">Send Message</button>
                </div>
              </form>
            </div>
          </div>
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
