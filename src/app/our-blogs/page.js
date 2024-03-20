import Image from "next/image";

export default function Page() {
  return (
    <>
     <div>
  <div className="primary-background blog-section">
    <div className="container">
      <h2 className="text-center">Stay updated with our Latest <b>Blogs</b></h2>
      <div className="row">
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="./images/blog1.png" alt="blog1" />
            <div>
              <h3>Convenience at your fingertips</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                mo.............</p>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="./images/blog2.png" alt="blog2" />
            <div>
              <h3>Supporting local businesses</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                mo.............</p>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="./images/blog3.png" alt="blog3" />
            <div>
              <h3>Affordable prices for everyone</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                mo.............</p>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="./images/blog4.png" alt="blog4" />
            <div>
              <h3>Affordable prices for everyone</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                mo.............</p>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="./images/blog3.png" alt="blog3" />
            <div>
              <h3>Affordable prices for everyone</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                mo.............</p>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="./images/blog4.png" alt="blog4" />
            <div>
              <h3>Affordable prices for everyone</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                mo.............</p>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="./images/blog1.png" alt="blog1" />
            <div>
              <h3>Convenience at your fingertips</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                mo.............</p>
            </div>
          </div>
        </div>
        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 col-sm-6 mb-5">
          <div className="card">
            <img src="./images/blog2.png" alt="blog2" />
            <div>
              <h3>Supporting local businesses</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Diam aliquam orci ut id massa commodo. Mus
                mo.............</p>
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
