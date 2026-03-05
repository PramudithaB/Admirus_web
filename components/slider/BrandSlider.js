"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const circleStyle = {
  background: "#fff",
  borderRadius: "50%",
  width: "140px",
  height: "140px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  margin: "0 auto"
};

const BrandSlider = () => {
  return (
    <Swiper
      {...sliderProps.BrandSlider}
      className="swiper brand-slider mt-4 pt-3"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/brandlogo1.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/02.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/03.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/04.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/05.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/06.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/01.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/02.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/03.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/04.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/05.png" alt />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img src="assets/img/brand/06.png" alt />
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export default BrandSlider;

export const BrandSlider2 = () => {
  return (
    <Swiper {...sliderProps.BrandSlider} className="swiper brand-slider">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo1.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo2.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo3.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo4.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo5.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo6.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo7.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo8.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo9.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo10.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo11.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo12.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div style={circleStyle}>
            <div className="brand-logo">
              <img
                src="assets/img/brand/brandlogo13.png"
                alt="brand-logo"
                style={{
                  width: "100px",
                  height: "auto",
                  objectFit: "contain",
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
