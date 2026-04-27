"use client";

import { useState } from "react";

const WhatsAppFloatingButton = () => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "56px",
    height: "56px",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: hover
      ? "0 14px 28px rgba(0, 0, 0, 0.3)"
      : "0 10px 20px rgba(0, 0, 0, 0.18)",
    transform: hover ? "translateY(-2px) scale(1.05)" : "translateY(0) scale(1)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    zIndex: 9999,
    textDecoration: "none",
  };

  const iconStyle = {
    width: "24px",
    height: "24px",
    display: "block",
  };

  const whatsappSvg =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='white' d='M380.9 97.1C339 55.1 283.2 32 224.6 32 100.3 32 0 132.3 0 256.6c0 45.2 11.8 89.2 34.2 127.9L0 480l97.9-32.3c37.9 20.9 80.4 31.8 124.3 31.8 124.3 0 224.6-100.3 224.6-224.6 0-58.7-23.1-114.5-64.3-156.2zm-156.3 328.4c-39.1 0-77.4-10.5-110.7-30.4l-7.9-4.7-58.2 19.2 19.6-56.9-5.1-8.2C72.4 309.5 63 283 63 256.6c0-90.7 73.9-164.6 164.6-164.6 43.9 0 85.2 17.1 116.2 48.2 30.9 30.9 48 72.2 48 116.1 0 90.7-73.9 164.6-164.6 164.6zm88.3-120.9c-4.8-2.4-28.4-14-32.8-15.6-4.4-1.6-7.6-2.4-10.8 2.4-3.2 4.8-12.3 15.6-15.1 18.8-2.8 3.2-5.6 3.6-10.4 1.2-26.8-13.4-44.3-23.9-62.1-54.2-4.8-8.2 4.8-7.6 13.7-25.9 1.5-3.2.8-6-0.4-8.4-1.2-2.4-10.8-26.1-14.8-35.8-3.9-9.1-7.9-7.8-10.8-7.8-2.8 0-6-0.4-9.2-0.4-3.2 0-8.4 1.2-12.8 6-4.4 4.8-16.8 16.4-16.8 40 0 23.6 17.2 46.3 19.6 49.6 2.4 3.2 33.9 51.7 82.3 72.5 11.5 5 20.5 7.9 27.5 10.1 11.6 3.6 22.2 3.1 30.5 1.9 9.3-1.4 28.4-11.6 32.4-22.8 4-11.2 4-20.8 2.8-22.8-1.2-2-4.4-3.2-9.2-5.6z'/%3E%3C/svg%3E";

  return (
    <a
      href="https://wa.me/94765334413"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={buttonStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={whatsappSvg} alt="WhatsApp" style={iconStyle} />
    </a>
  );
};

export default WhatsAppFloatingButton;
