import React from "react";
import logo from "../img/logo.png";
//css

import "../css/footer.css";

import fb from "../img/social media/fb.png";
import github from "../img/social media/github.png";
import linkedin from "../img/social media/linkedin.png";

export default function Footer() {
  const socials = [fb, github, linkedin];
  const name = ["Sangey Lama"];
  const title = ["Web Developer & Designer"];
  const handleSocialClick = index => {
    let link = "";

    // Set different links based on the index
    switch (index) {
      case 0:
        link = "https://www.facebook.com/Erick.evon07";
        break;
      case 1:
        link = "https://github.com/Tenzin1000";
        break;

      case 2:
        link = "https://www.linkedin.com/in/sangey-lama-2b54b7268/";
        break;
    }
    // Redirect to the appropriate link
    window.open(link, "_blank");
  };

  return (
    <div className="footer-container d-t py-5 row mx-auto ">
      <div className="col-md-10 col-12 mx-auto d-block d-md-flex">
        <div className="col-md-6 col-12">
          <div>
            <img src={logo} alt="@devSan" className="fo-logo" />
          </div>
          <div className="fo-name">
            <div className="fo-name fw-bold">{name[0]}</div>
            <div className="fo-title">{title[0]}</div>
          </div>
        </div>
        <div className="col-md-6 col-12 align-items-center justify-content-center d-flex flex-column">
          <div className="fo-text">Let's get connected and work together:</div>
          <div className="fo-social mt-md-0 mt-3">
            {socials.map((social, index) => (
              <img
                src={social}
                className="socialicon"
                onClick={() => handleSocialClick(index)}
                key={index}
              />
            ))}
          </div>

          <hr className="hr" />
          <h5>&copy; All rights reserved | 2024</h5>
        </div>
      </div>
    </div>
  );
}
