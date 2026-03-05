import { Contact2 } from "@/components/Contact";
import CTA from "@/components/CTA";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout cta={false}>
      <Pagebanner pageName="Contact Us" />
      {/* Contact Info Section Start */}
      <section className="contact-page-wrap section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-telephone" />
                </div>
                <div className="title">
                  <span>Call Us</span>
                  <h4>076 533 4413</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-location" />
                </div>
                <div className="title">
                  <span>Our Location</span>
                  <h4>No. 720,  Floor, Level 07, Jana Jaya City Mall, Rajagiriya</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="title">
                  <span>Mail us</span>
                  <h4>info@admirus.lk</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact-us Section Start */}
      <Contact2 />
      {/* Map Section Start */}
      <div className="office-google-map-wrapper wow fadeInUp">
        <iframe
          src="https://www.google.com/maps/search/?api=1&query=Jana+Jaya+City+Mall+Rajagiriya+Sri+Lanka"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      <CTA wrapperClass="cta-wrapper cta-2 style-3 section-bg" />
    </ZotechLayout>
  );
};
export default page;
