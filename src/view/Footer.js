import React from "react";
import logo from "../img/logo.png";
//css

import "../css/footer.css";

import fb from "../img/social media/fb.png";
import github from "../img/social media/github.png";
import gmail from "../img/social media/gmail.png";
import insta from "../img/social media/insta.png";
import linkedin from "../img/social media/linkedin.png";
import upwork from "../img/social media/upwork.png";

export default function Footer() {
  const socials = [fb, github, gmail, insta, linkedin, upwork];
  const name = ["Sangey Lama"];
  const title = ["webDeveloper & Designer"];
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
          <div className="fo-text">lets get connected and work together:</div>
          <div className="fo-social mt-md-0 mt-3">
            {socials.map(social => (
              <img src={social} className="socialicon" />
            ))}
          </div>

          <hr className="hr" />
          <h5>&copy; All rights reserved | 2024</h5>
        </div>
      </div>
    </div>
  );
}
