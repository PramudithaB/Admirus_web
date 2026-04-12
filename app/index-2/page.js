"use client";

import { useState } from "react";
import AboutMe from "@/components/AboutMe";
import Counter from "@/components/Counter";
import { BrandSlider2 } from "@/components/slider/BrandSlider";
import { CaseStudySlider2 } from "@/components/slider/CaseStudySlider";
import { Testimonial2 } from "@/components/slider/Testimonial";
import { Home2Accordion } from "@/components/ZotechAccordion";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";

const serviceItems = [
  {
    title: "Strategic Branding",
    description:
      "Beyond just a logo, we build powerful identities that resonate. From conceptualization to strategic positioning, we create a cohesive brand voice that transforms your business vision into a legendary industry iconn.",

  },
  {
    title: "Social Media Marketing",
    description:
      "We don’t just post; we perform. Our data-driven strategies amplify your digital presence, engaging your target audience across all platforms to drive measurable growth and brand loyalty in an ever-evolving digital landscape.",

  },
  {
    title: "Event Experiences",
    description:
      "From planning to execution, our team delivers unforgettable event experiences with seamless coordination, immersive design, and powerful brand messaging.",
  },
  {
    title: "Aerial Media",
    description:
      "Our drone teams capture stunning aerial footage and innovative visuals to elevate your campaigns and bring a fresh perspective to every production.",
  },
];






const page = () => {
  const [expandedItems, setExpandedItems] = useState(
    Array(serviceItems.length).fill(false)
  );

  const toggleExpand = (index) => {
    setExpandedItems((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  };

  return (
    
    <ZotechLayout header={2} footer={2} bodyClass="section-bg-2">
      
      {/* Hero Section Start */}
      <section className="hero-wrapper hero-1 style-2 ">
        <div className="shape">
          <img className="shape-1" src="assets/img/shape/shape-2.png" alt />
          <img className="shape-2" src="assets/img/world.png" alt />
          <img className="shape-3" src="assets/img/shape/shape-3.png" alt />
          <img className="shape-4" src="assets/img/shape/shape-4.png" alt />
          <img className="shape-5" src="assets/img/shape/shape-5.png" alt />
          <img className="shape-6" src="assets/img/hero/hero-2-light.png" alt />
          <div className="shape-7" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 ">
              <div
                className="hero-content pe-3 text-lg-start text-center wow fadeInLeft"
                data-wow-delay="400ms"
              >
                <h1>The First Sri Lankan
Integrated Creative Brand OS</h1>
                <p>
                 Concept Into Iconic. We are not just an agency—we are your brand's foundational platform,
                  integrating strategy, storytelling, production, and promotion into one intelligent, scalable system
                </p>
                <div className="hero-button mt-4">
                  <Link href="/contact" className="theme-btn">
                    Let's Build Your Brand Universe
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 col-12 wow fadeInRight"
              data-wow-delay="400ms"
            >
              <div className="hero-image ">
                <img src="assets/img/hero/kd.png" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section Start */}
      <section className="features-wrapper features-2">
        <div className="container">
          <div className="features-items">
            <div
              className="single-feature-item bg-cover wow fadeInUp"
              data-wow-delay="200ms"
              style={{ backgroundImage: "url(assets/img/hero/admirus.jpeg)" }}
            >
              <h4>
                <Link href="services-details">
                 Digital Marketing<br /> & Production
                </Link>
              </h4>
            </div>
            <div
              className="single-feature-item bg-cover wow fadeInUp"
              data-wow-delay="400ms"
              style={{ backgroundImage: "url(assets/img/feature/eventbyadmirus.jpeg)" }}
            >
              <h4>
                <Link href="services-details">The Events by <br />  Admirus</Link>
              </h4>
            </div>
            <div
              className="single-feature-item bg-cover wow fadeInUp"
              data-wow-delay="600ms"
              style={{ backgroundImage: "url(assets/img/feature/drone.jpeg)" }}
            >
              <h4>
                <Link href="services-details">
                  &nbsp;Drone <br />  Mahaththaya
                </Link>
              </h4>
            </div>
            <div
              className="single-feature-item bg-cover wow fadeInUp"
              data-wow-delay="800ms"
              style={{ backgroundImage: "url(assets/img/feature/sugerpixel.jpeg)" }}
            >
              <h4>
                <Link href="services-details">Sugar Pixel <br />  Studio</Link>
              </h4>
            </div>
            <div
              className="single-feature-item bg-cover wow fadeInUp"
              data-wow-delay="1000ms"
              style={{ backgroundImage: "url(assets/img/feature/hicloth.jpeg)" }}
            >
              <h4>
                <Link href="services-details">
                  Hi<br /> Cloth
                </Link>
              </h4>
            </div>
          </div>
        </div>
        {/* <div
          className="features-images bg-cover "
style={{
  backgroundImage: "url(assets/img/hero/webbanner.jpeg)",
  backgroundSize: "110%",       // slightly increase image size
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  borderRadius: "100px",         // rounded corners
  padding: "20px"               // increase box size a little
}}   /> */}
      </section>
      {/* About Section Start */}
      <AboutMe
        img1="assets/img/feature/admirus1.jpeg"
        img2="assets/img/about/05.png"
        wrapperClass="about-wrapper about-1 style-2 section-padding about-dark-page"
      />
      {/* Service Section Start */}
      <section className="service-wrapper service-2 section-padding">
        <div className="container">
          <div className="service-inner">
            <div className="section-title text-center">
              <div className="sub-title">
                <span>OUR SERVICES</span>
              </div>
              <h2 className="text-white split-text right">
                Preparing for Your Success We,  <br /> Provide&nbsp;Truly Integrated Brand Solutions.
              </h2>
            </div>
            <div className="service-items">
              {serviceItems.map((item, index) => {
                const shortText = item.description.slice(0, 120);
                const isExpanded = expandedItems[index];
                return (
                  <div
                    className="signle-service-item wow fadeInUp"
                    data-wow-delay={`${100 + index * 100}ms`}
                    key={item.title}
                  >
                    <div className="title d-flex align-items-center">
                      <div className="">
                        <i className="" />
                      </div>
                      <h3>{item.title}</h3>
                    </div>
                    <p>
                      {isExpanded ? item.description : `${shortText}${item.description.length > 120 ? "..." : ""}`}
                    </p>
                    {item.description.length > 120 && (
                      <button
                        type="button"
                        onClick={() => toggleExpand(index)}
                        className="theme-btn trasparent-btn mt-3"
                        style={{ padding: "8px 14px", fontSize: "14px" }}
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                        <i className={`fal ${isExpanded ? "fa-chevron-up" : "fa-chevron-down"} ms-2`} />
                      </button>
                    )}
                  
                  </div>
                );
              })}
            </div>
            <div className="button mt-5 pt-xl-3 d-flex align-items-center justify-content-center">
              <Link href="services-details" className="theme-btn">
                Take a Consultant
              </Link>
              <a
                hLinkef="services-details"
                className="theme-btn trasparent-btn "
              >
                All Services
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Video Section Start */}
   <div className="video-wrapper video-1 style-2">
  <div className="container">
    <div
      className="video-image wow fadeInUp"
      data-wow-delay="300ms"
      style={{ borderRadius: "12px", overflow: "hidden" }}
    >
      <video
        controls
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "400px", objectFit: "cover" }}
      >
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</div>
      {/* Brand Section Start */}
      <div className="brand-wrapper brand-1 style-2 section-padding">
        <div className="container">
          <div className="brand-inner">
            <BrandSlider2 />
          </div>
        </div>
      </div>
      {/* Service Section Start */}
      <section className="service-wrapper service-3 section-padding pt-0">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title text-white">
              <div className="sub-title">
                <span>OUR SERVICES</span>
              </div>
              <h2 className="text-white split-text right">
                We Are Web Designers, Developers, Project Managers
              </h2>
            </div>
            <p className="text-white">
              World-class tech teams We’ll match you to an entire remote team of
              incredible freelance talent for all your software.
            </p>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="service-image">
                <img src="assets/img/service/02.jpg" alt />
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="single-service-item">
                <div className="icon">
                  <i className="flaticon-management" />
                </div>
                <h4>Learning a new skill, or pursuing a passion</h4>
                <div className="count-box">
                  <h2>
                    <span className="count">
                      <Counter end={84} />
                    </span>
                    +
                  </h2>
                  <p>Social Network</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="service-image">
                <img src="assets/img/service/03.jpg" alt />
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-service-item">
                <div className="icon">
                  <i className="flaticon-world" />
                </div>
                <h4>Team already finished this project</h4>
                <div className="count-box">
                  <h2>
                    <span className="count">
                      <Counter end={695} />
                    </span>
                    +
                  </h2>
                  <p>Completed Projects</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="500ms"
            >
              <div className="single-service-item">
                <div className="icon">
                  <i className="flaticon-strategy" />{" "}
                </div>
                <h4>The percentage of IT Investments</h4>
                <div className="count-box">
                  <h2>
                    <span className="count">
                      <Counter end={68} />
                    </span>
                    %
                  </h2>
                  <p>Total Investment</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="service-image">
                <img src="assets/img/service/04.jpg" alt />
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="700ms"
            >
              <div className="single-service-item">
                <div className="icon">
                  <i className="flaticon-expert-system" />{" "}
                </div>
                <h4>Every software solution be integrated</h4>
                <div className="count-box">
                  <h2>
                    <span className="count">
                      <Counter end={303} />
                    </span>
                    +
                  </h2>
                  <p>Software Update</p>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="service-image">
                <img src="assets/img/service/05.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Case-study Section Start */}
      <section
        className="case-study-wrapper case-study-1 style-2 section-padding bg-cover"
        style={{ backgroundImage: "url(assets/img/case/bg.jpg)" }}
      >
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR CASE STUDY</span>
          </div>
          <h2 className="text-white split-text right">
            We Delivered Best Solution
          </h2>
        </div>
        <div className="case-study-inner mt-5">
          <CaseStudySlider2 />
        </div>
      </section>
      {/* Pricing Section Start */}
      {/* <section className="pricing-wrapper pricing-1 section-padding">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-xxl-5 col-xl-4 pe-xxl-5 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="section-title">
                <div className="sub-title">
                  <span>PRICING PLAN</span>
                </div>
                <h2 className="text-white split-text right">
                  Pricing That Suits <br /> Your Needs
                </h2>
              </div>
              <div className="icon-box d-flex">
                <div className="icon">
                  <i className="flaticon-quality-assurance" />{" "}
                </div>
                <div className="title">
                  <h4>Quality Services</h4>
                  <p>
                    Back up your database, store in a safe and secure place
                    while still maintaining its accessibility.
                  </p>
                </div>
              </div>
              <div className="icon-box d-flex">
                <div className="icon">
                  <i className="flaticon-customer-support" />{" "}
                </div>
                <div className="title">
                  <h4>Support &amp; Optimization</h4>
                  <p>
                    Back up your database, store in a safe and secure place
                    while still maintaining its accessibility.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xxl-7  col-xl-8 col-lg-12">
              <div className="row g-5">
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="single-pricing-item">
                    <div className="header">
                      <h4>Standard</h4>
                      <span>Ideal for Growing Businesses.</span>
                    </div>
                    <div className="price">
                      $39 <span> / Per month </span>
                    </div>
                    <ul className="list">
                      <li>
                        <i className="fas fa-check-circle" />
                        Managed IT Services
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        No Migration Consultation
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Data Backup Recovery
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        24/7 Remote Support
                      </li>
                    </ul>
                    <Link href="pricing" className="theme-btn">
                      <span>Get Started Now</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="single-pricing-item">
                    <div className="header">
                      <h4>Premium</h4>
                      <span>Ideal for Growing Businesses.</span>
                    </div>
                    <div className="price">
                      $79 <span> / Per month </span>
                    </div>
                    <ul className="list">
                      <li>
                        <i className="fas fa-check-circle" />
                        Cyber Security
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        No Migration Consultation
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        Data Backup Recovery
                      </li>
                      <li>
                        <i className="fas fa-check-circle" />
                        24/7 Remote Support
                      </li>
                    </ul>
                    <Link href="pricing" className="theme-btn">
                      <span>Get Started Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* Testimonial Section Start */}
      <section className="testimonial-wrapper testimonial-2 section-padding pt-0">
        <div className="shape">
          <img className="shape-1" src="assets/img/shape/shape-1.png" alt />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR TESTIMONIAL</span>
            </div>
            <h2 className="text-white split-text right">
              20k+ Satisfied Clients Worldwide
            </h2>
          </div>
          <div className="testimonial-inner-2 mt-5">
            <Testimonial2 />
          </div>
        </div>
      </section>
      {/* Choose-us Section Start */}
      <section className="choose-us-wrapper choose-us-2 section-padding">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-xl-6 col-lg-6 col-md-12 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="choose-us-images">
                <div className="shape">
                  <img className="shape-1" src="assets/img/world-2.png" alt />
                </div>
                <div className="image-1">
                  <img src="assets/img/why-choose/02.png" alt />
                </div>
                <div className="experience">
                  <h2>
                    {" "}
                    <span className="count">
                      <Counter end={4} />
                    </span>
                    +
                  </h2>
                  <p>YEARS OF EXPERIENCE</p>
                </div>
                <div className="image-2">
                  <img src="assets/img/why-choose/03.png" alt />
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 col-md-12 wow fadeInRight"
              data-wow-delay="400ms"
            >
              <div className="choose-us-content">
                <div className="section-title">
                  <div className="sub-title">
                    <span>WHY CHOOSE US</span>
                  </div>
                  <h2 className="text-white split-text right">
                    One Partner. Every Platform. 
{" "}
                    <br /> No Limits
                  </h2>
                </div>
                <p className="text">
            We are not just an agency; we are your complete creative operating system. We integrate branding, digital marketing, video production, events, and aerial innovation into one seamless platform.
                </p>
                <div className="progress-items">
                  <div className="progress">
                    <div
                      className="progress-value count-bar"
                      data-percent="95%"
                    />
                  </div>
                  <div className="point">
                    <p className="text-white ">Digital Marketing</p>
                    <span className="text-white">95%</span>
                  </div>
                </div>
                <div className="progress-items pt-4">
                  <div className="progress">
                    <div
                      className="progress-value count-bar"
                      data-percent="90%"
                    />
                  </div>
                  <div className="point">
                    <p className="text-white">Branding Campaign</p>
                    <span className="text-white">90%</span>
                  </div>
                </div>
                <div className="progress-items pt-4">
                  <div className="progress">
                    <div
                      className="progress-value count-bar"
                      data-percent="78%"
                    />
                  </div>
                  <div className="point">
                    <p className="text-white">Software Development</p>
                    <span className="text-white">80%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Funfact Section Start */}
      <section className="funfact-wrapper funfact-1">
        <div className="container">
          <div className="funfact-inner">
            <h3 className="title split-text left">
              To make requests for further information, contact us
            </h3>
            <div className="funfact-items">
              <div
                className="single-funfact-item wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="icon">
                  <i className="flaticon-team" />
                </div>
                <div className="count-box">
                  <h2>
                    <span className="count">
                      <Counter end={10} />
                    </span>
                    +
                  </h2>
                  <p>Team Member</p>
                </div>
              </div>
              {/* <div
                className="single-funfact-item wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="icon">
                  <i className="flaticon-project" />{" "}
                </div>
                <div className="count-box">
                  <h2>
                    <span className="count">
                      <Counter end={20} />
                    </span>
                    %
                  </h2>
                  <p>Ground level Team Member</p>
                </div>
              </div> */}
              <div
                className="single-funfact-item wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="icon">
                  <i className="flaticon-mountain" />
                </div>
                <div className="count-box">
                  <h2>
                    <span className="count">
                      <Counter end={20} />
                    </span>
                    +
                  </h2>
                  <p>Ground level Team Member</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section Start */}
      <section className="faq-wrapper contact-us-1 faq-1 section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-6 col-lg-6 col-md-12 mt-3 pe-0 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              <div className="section-title">
                <div className="sub-title">
                  <span>OUR FAQs</span>
                </div>
                <h2 className="text-white split-text right">
                  Frequently Asked <br /> Questions About Us
                </h2>
              </div>
              <div className="contact-us-content pt-4 mt-3">
                <div className="infu-box d-flex align-items-center">
                  <div className="icon">
                    <i className="flaticon-telephone" />
                  </div>
                  <div className="infu">
                    <p className="text-white opacity-75">Call Us</p>
                    <h3 className="text-white">+69 009 494 094</h3>
                  </div>
                </div>
                <div className="infu-box d-flex align-items-center">
                  <div className="icon">
                    <i className="flaticon-location" />
                  </div>
                  <div className="infu">
                    <p className="text-white opacity-75">Our Location</p>
                    <h3 className="text-white">
                      147 New Yors, NY Adipisicing 123
                    </h3>
                  </div>
                </div>
                <div className="infu-box d-flex align-items-center">
                  <div className="icon">
                    <i className="flaticon-email" />
                  </div>
                  <div className="infu">
                    <p className="text-white opacity-75">Mail us</p>
                    <h3 className="text-white text-lowercase">
                      hello@zotech.com
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 ps-0">
              <div className="faq-content">
                <div className="faq-accordion mt-4 mt-md-0 ">
                  <Home2Accordion />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section Start */}
      <section className="blog-wrapper blog-1 style-2 section-padding ">
        <div
          className="blog-2-bg bg-cover"
          style={{ backgroundImage: "url(assets/img/blog/bg-1.jpg)" }}
        />
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>OUR BLOG</span>
            </div>
            <h2 className="text-white split-text right">
              Our Latest Insights &amp; Blog
            </h2>
          </div>
          <p className="text-center mt-3 text-white">
            Accelerate innovation with world-class tech teams We’ll match
            <br /> you to an entire remote team of incredible
          </p>
          <div className="blog-inner">
            <div className="row">
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/blog1.jpeg" alt />
                    <img src="assets/img/blog/blog1.jpeg" alt />
                   
                  </div>
                  <div className="content">
                    <ul>
                      <li>Technology</li>
                      <li>
                        {" "}
                        <i className="fas fa-circle" />
                      </li>
                      <li className="text-white">12 January, 2025</li>
                    </ul>
                    <h3>
                      <Link href="blogs-details" className="text-white">
                        The Art of Self-Care: Lessons from Health Coaching
                      </Link>
                    </h3>
                    <Link href="blogs-details" className="link-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/blog2.jpeg" alt />
                    <img src="assets/img/blog/blog2.jpeg" alt />
                   
                  </div>
                  <div className="content">
                    <ul>
                      <li>Technology</li>
                      <li>
                        {" "}
                        <i className="fas fa-circle" />
                      </li>
                      <li className="text-white">12 January, 2025</li>
                    </ul>
                    <h3>
                      <Link href="blogs-details" className="text-white">
                        The Art of Self-Care: Lessons from Health Coaching
                      </Link>
                    </h3>
                    <Link href="blogs-details" className="link-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="single-blog-item">
                  <div className="image">
                    <img src="assets/img/blog/blog3.jpeg" alt />
                    <img src="assets/img/blog/blog3.jpeg" alt />
                    
                  </div>
                  <div className="content">
                    <ul>
                      <li>Technology</li>
                      <li>
                        {" "}
                        <i className="fas fa-circle" />
                      </li>
                      <li className="text-white">12 January, 2025</li>
                    </ul>
                    <h3>
                      <Link href="blogs-details" className="text-white">
                        The Art of Self-Care: Lessons from Health Coaching
                      </Link>
                    </h3>
                    <Link href="blogs-details" className="link-btn">
                      Read More <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section Start */}
      <section className="cta-wrapper cta-2">
        <div className="container">
          <div className="cta-inner wow fadeInUp" data-wow-delay="200ms">
            <div className="icon">
              <i className="flaticon-customer-support" />
            </div>
            <div className="title">
              <h3 className="split-text right">
                Looking for the Best IT Business Solutions?
              </h3>
              <p>As a app web crawler expert, We will help to organize.</p>
            </div>
            <a href className="theme-btn white-btn">
              Take a Consultant
            </a>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
