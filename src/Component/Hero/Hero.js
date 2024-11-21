import React from "react";

const Hero = () => {
  return (
    <section className="py-12 overflow-hidden" id="banner">
      <div
        style={{
          backgroundImage:
            "url(/business-woman-making-presentation-office.jpg)",
          backgroundPosition: "center top",
          backgroundSize: "cover",
          width: "100%",
          height: "600px",
        }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="row justify-content-center align-items-center pt-9 pt-lg-8 pb-5 mb-8 mt-8">
          <div className="col-md-11 col-lg-12 col-xl-12 pb-3 pb-xl-3 text-center text-xl-center">
            <h1
              className="font-weight-bold text-white"
              style={{ fontSize: "55px" }}
            >
              Premium Guest Posting
              <span style={{ color: "yellow" }}> Services</span>
            </h1>
            <h3 className="mb-1 text-white font-weight-bold">
              Get <span style={{ color: "yellow" }}>Backlinks</span> From
              High-Quality Websites
            </h3>
            <p className="mb-1 text-white mt-2" style={{ fontSize: "18px" }}>
              Only Pay If You Are Satisfied With The Results
            </p>
            <div className="row justify-content-center mt-4">
              <div className="col-auto text-center">
                <button
                  href="/register-1"
                  className="btn fs-6 rounded btn-lg py-2 px-4 btn-light d-flex justify-content-center align-items-center"
                >
                  Sign Up Now
                </button>
              </div>
              <div className="col-auto text-center">
                <button className="btn fs-6 rounded btn-lg py-2 px-4 btn-primary d-flex justify-content-center align-items-center">
                  View Pricing
                </button>
              </div>
            </div>

            <h6 className="mb-3 mt-2 ml-n3 text-white">
              <span style={{ color: "yellow" }}>*</span> Starting From
              <span
                className="font-weight-bold m-2"
                style={{ color: "yellow" }}
              >
                $4.99
              </span>
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
