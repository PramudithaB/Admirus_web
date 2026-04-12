const AboutMe = ({
  wrapperClass = "about-wrapper about-1 style-2 about-page section-padding",
  img1 = "assets/img/feature/admirus1.jpeg", // changed default value
  img2 = "assets/img/about/bg1.jpeg",
}) => {
  return (
    <section className={wrapperClass}>
      <div className="container">
        <div className="row g-5">
          <div
            className="col-xxl-7 col-xl-6 col-lg-12 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="about-images-2">
              {/* <img
                className="shape-1"
                src="assets/img/about/worldgoal.png"
                alt=""
              /> */}
              <img
                className="shape-2"
                src="assets/img/about/bg1.jpeg"
                alt=""
                style={{
                  transform: "translateY(40px)", // Change 40px to however much you want it to go down
                }}
                
              />
              <div className="image-1">
                <img
                  src={img1}
                  alt="img"
                  style={{
                    objectFit: "cover",
                    width: "115%",
                    height: "610px",
transform: "translate(-50px, 55px)", 
      position: "relative",
      zIndex: "1"                  }}
                />
              </div>
              <div className="image-2">
                <img
                  src={img2}
                  alt="img"
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "300px",
                    transform: "translateY(40px)", // Change 40px to however much you want it to go down
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-5 col-xl-6 col-lg-12 wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="about-content mt-xxl-5 mt-xl-0 mt-5 ms-xxl-2">
              <div className="section-title">
                <div className="sub-title">
                  <span>ABOUT OUR COMPANY</span>
                </div>
                <h2>
One OS. Your Complete Brand Legacy.
                  <br />
                </h2>
              </div>
              <p>
               Admirus Business Circle (Pvt) Ltd operates as a high-performance Brand OS, built on a unified architecture where specialized in-house modules run in perfect synchronicity. We move beyond the traditional agency model, functioning as a precision-engineered platform designed to build iconic identities. At Admirus, we believe great branding is a fully operational experience—engineered to be felt, designed to be remembered, and built to sustain a lasting legacy.
              </p>
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Brand Strategy  &amp; Design
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Digital Marketing &amp; Growth
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Cinematic Video &amp; Aerial Production 
                </li>
                 <li>
                  <i className="fas fa-check-circle" />
                  Event &amp; Production
                </li>
               
              
              </ul>
              {/* <div className="feedback">
                <div className="infu">
                  <div className="icon-box d-flex align-items-center">
                    <div className="icon">
                      <i className="flaticon-cms" />
                    </div>
                    <h6>Branding Company</h6>
                  </div>
                  <p>Our great team of more than to 20 member.</p>
                </div>
              </div> */}
              <div className="about-infu">
                <a href="" className="theme-btn">
                  Get In Touch
                </a>
                <div className="contact-us">
                  <img src="assets/img/about/03.png" alt="" />
                  <div className="text">
                    <span className="text-white opacity-50">
                      Call to ask any question
                    </span>
                    <h4 className="text-white">+94 76 037 4123</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
