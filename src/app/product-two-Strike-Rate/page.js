import Image from "next/image";

export default function Page() {
  return (
    <>
     <div>
  <div className="primary-background product-hero text-white position-relative">
    <div className="container">
      <div className="w-75 hero-content">
        <h2 className="fw-700 mb-3">Sydorg enable analytics backed <br />with high success rate decision making</h2>
        <p className="mb-5">Sydorg partners with its client to enable analytics backed and high success rate decision making. It
          currently caters to specific spaces of aviation and sports industries and has two offerings.</p>
        <div className="bg-dark dark-container" />
      </div>
    </div>
  </div>
  <div className="our-offer-section">
    <div className="container">
      <h3 className="fw-700"><span>Strike Rate</span>, A SaaS product powering sports analytics and real-time data processing,.</h3>
      <p className="fs-20 mb-5">Strike Rate is a software solution that currently caters to the game of cricket. Inputting historic as well as real-time captured data, it brings analytics based decision-making to sports. It thrives on constant learning and refining the data to guide organizations in their selection, training and order related choices.</p>
      <button className="primary-button">Contact us to play this</button>
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
