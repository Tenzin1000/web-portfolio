import React, { useState } from "react";
//img
import img from "../img/profile.jpg";
import globaltech from "../img/globaltech.png";
import aiinterf from "../img/aiinterf.png";
import smartdoors from "../img/smartdoors.png";
import skillVue from "../img/skills/vue.png";
import skillApi from "../img/skills/api.png";
import skillboot from "../img/skills/bootstrap.png";
import skillcss from "../img/skills/css.png";
import skilldomain from "../img/skills/domain.png";
import skillfigma from "../img/skills/figma.png";
import skillfontawesome from "../img/skills/fontawesome.png";
import skillgithub from "../img/skills/github.png";
import skillhtml from "../img/skills/html5.png";
import skillnetlify from "../img/skills/netlify.png";
import skillreact from "../img/skills/react.png";
import skilljs from "../img/skills/js.png";
//css
import "../css/body.css";
//component
import TextContainer from "../component/Text";
//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMessage,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";

//images
import naksaImg from "../img/website/naksa.png";
import smartdoorsImg from "../img/website/smartdoors.png";
import treknepalImg from "../img/website/treknepal.png";
import globaltecImg from "../img/website/global.png";
import covidImg from "../img/website/covid.png";
import coffeeImg from "../img/website/coffee.png";
export default function Body() {
  const skills = [
    skillVue,
    skillApi,
    skillboot,
    skillcss,
    skilldomain,
    skillfigma,
    skillfontawesome,
    skillgithub,
    skillhtml,
    skilljs,
    skillnetlify,
    skillreact,
  ];
  const names = [
    "sangey lama",
    "My Recent Work",
    "My Startup Projects",
    "Skills",
  ];
  const titles = [
    "Front-End Web Developer & Designer",
    "Collobaration",
    "UI/UX Designer",
  ];
  const paragraphs = [
    "As a frontend web developer, I'm not just creating websites. I'm crafting digital experiences. Dive into my showcase to explore responsive designs, intuitive interfaces, and seamless user experiences. Let's connect and bring your online presence to life!",
    "Here are some of the websites I've personally built, coding and collaborating closely with clients to ensure their needs are met. These projects span various technologies including React, Vue, and pure HTML, with design concepts crafted using Figma. This holistic approach ensures seamless integration of design and functionality, resulting in intuitive user experiences.",
    "During my practise in learning some new design and ideas I’ve made some of this projects.",
    "I’m proud to have collaborated with some of this awesome companies.",
    "Mainly used libraries, programming languages, and featured skills.",
    "Welcome to my portfolio! As a skilled web developer, I specialize in crafting responsive designs, building websites, and ensuring they align seamlessly with UI/UX principles. From concept to deployment, I'm committed to bringing your vision to life with precision and proficiency. Let's collaborate to transform your ideas into stunning digital experiences.",
  ];
  const imageLinks = [
    "https://naksagumba.org.np/",
    "http://smartdoors.naksagumba.org.np/",
    "https://tenzin1000.github.io/trek-nepal/",
    "https://globaltech.com.np/",
    "https://tenzin1000.github.io/covid-data.github.io/",
    "https://tenzin1000.github.io/Site1/",
  ];
  const images = [
    naksaImg,
    smartdoorsImg,
    treknepalImg,
    globaltecImg,
    covidImg,
    coffeeImg,
  ];
  const companys = [
    "Naksa Monastery",
    "Smartdoors Pvt. Ltd.",
    "Treknepal Pvt. Ltd.",
    "Globaltech Pvt. Ltd.",
    "Covid data",
    "Sample Site",
  ];
  const toolsArray = [
    ["React", "HTML", "CSS", "JavaScript", "Bootstrap"],
    ["React", "HTML", "CSS", "JavaScript", "Redux", "CSS", "Bootstrap"],
    ["Vue", "HTML", "CSS", "JavaScript", "Bootstrap"],
    ["HTML", "CSS", "JavaScript", "Bootstrap"],
    ["HTML", "CSS", "JavaScript", "Bootstrap", "API"],
    ["HTML", "CSS", "Bootstrap"],
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = index => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  return (
    <div className="body-container dotted-border col-md-10 col-11 mx-auto ">
      <div className="photo-container d-b d-flex align-items-center justify-content-center">
        <div className="my-5">
          <img src={img} alt="sangey lama" className="profileimg" />
        </div>
      </div>
      <TextContainer
        name={names[0]}
        title={titles[0]}
        paragraph={paragraphs[0]}
        className="d-b"
      />
      {/* ==company== */}
      <TextContainer
        paragraph={paragraphs[3]}
        title={titles[1]}
        className="d-b text-center"
      />
      <div className="com-con d-b p-3 row mx-0 align-items-center justify-content-center">
        <div className="col-md-4 col-4 my-2">
          <img src={globaltech} alt="globaltech" className="company-img" />
        </div>
        <div className="col-md-4 col-4 my-2">
          <img src={smartdoors} alt="globaltech" className="company-img" />
        </div>
        <div className="col-md-4 col-4  my-2">
          <img src={aiinterf} alt="globaltech" className="company-img" />
        </div>
      </div>
      {/* ======mywork===== */}
      <TextContainer name={names[1]} paragraph={paragraphs[1]} />
      <div className="work-container  row d-flex flex-wrap p-3 justify-content-center d-t d-b p-3 row mx-0 align-items-center justify-content-center">
        {images.map((imageUrl, index) => (
          <div className="p-2 col-12 col-sm-6 col-md-4 my-2 my-md-2">
            <div className="work-img p-1" key={index}>
              <div
                className={`workmain-img ${
                  hoveredIndex === index ? "imgopacity" : ""
                }`}
                style={{
                  background: `url(${imageUrl}) center/contain no-repeat`,
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}>
                <div
                  className={`visit-btn ${
                    hoveredIndex === index ? "hovered" : ""
                  }`}>
                  <a
                    href={imageLinks[index]}
                    className="btn btn-primary"
                    target="_blank">
                    Visit Website
                  </a>
                </div>
              </div>
              <div className="work-detail">
                <div className="work-name">{companys[index]}</div>
                <div className="work-tools d-flex flex-wrap">
                  {toolsArray[index].map((tool, toolIndex) => (
                    <div className="tools" key={toolIndex}>
                      {tool}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ======startup===== */}
      {/* <TextContainer
        name={names[2]}
        paragraph={paragraphs[2]}
        className="d-b text-center"
      />
      <div className="work-container d-t d-b p-5 row mx-0 align-items-center justify-content-center">
        <div className="work-img col-6 col-md-4 col-12 my-4 my-md-0"></div>
        <div className="work-img col-6 col-md-4 col-12 my-4 my-md-0"></div>
        <div className="work-img col-6 col-md-4 col-12 my-4 my-md-0"></div>
        <div className="work-img col-6 col-md-4 col-12 my-4 my-md-0"></div>
        <div className="work-img col-6 col-md-4 col-12 my-4 my-md-0"></div>
        <div className="work-img col-6 col-md-4 col-12 my-4 my-md-0"></div>
      </div> */}
      {/* ====chat me===== */}
      <div className="row mx-auto  d-b align-items-center justify-content-center">
        <div className="msg-con p-4 col-9 ">
          <div className="msg text-center mb-2">
            Hi! 👋 I'm <span className="fw-bold">sangey lama</span>, a{" "}
            <span className="fw-bold">web developer</span> passionate about
            crafting beautiful and user-friendly websites. Let's chat about
            creating something amazing together!
          </div>
          <div className="msg-btn  rounded d-flex align-items-center justify-content-center">
            <button className="btn btn-primary bg-white px-3 text-dark btn d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faMessage} className="me-1 " />
              <h5 className="mb-0">
                <a
                  href="https://www.facebook.com/Erick.evon07"
                  className="textme "
                  target="_blank">
                  text me
                </a>
              </h5>
            </button>
          </div>
        </div>
      </div>

      {/* ===testomials== */}
      <div id="testcarousel" className="carousel slide p-4">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#testcarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#testcarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#testcarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active ">
            <div className="carousel-img">
              <img src={aiinterf} alt="" className="img-profile" />
            </div>
            <div className="carousel-quotes ">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="quotes-color carousel-quotes-r cq-l"
              />
              <div className="carouesl-main-quotes">
                Satisfactory design and detail explanation with help of web
                development and deployment.
              </div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="quotes-color carousel-quotes-r cq-r "
              />
            </div>
            <div className="carousel-ab">
              {/* <div className="carousel-name sub-grey">Sangey Lama</div> */}
              <div className="carousel-subtitle fw-bold">Ai interf</div>
            </div>
          </div>
          <div className="carousel-item  ">
            <div className="carousel-img">
              <img src={globaltech} alt="" className="img-profile" />
            </div>
            <div className="carousel-quotes ">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="quotes-color carousel-quotes-r cq-l"
              />
              <div className="carouesl-main-quotes">
                working with young youth, learning more
              </div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="quotes-color carousel-quotes-r cq-r "
              />
            </div>
            <div className="carousel-ab">
              {/* <div className="carousel-name sub-grey">Sangey Lama</div> */}
              <div className="carousel-subtitle fw-bold">globaltech</div>
            </div>
          </div>
          <div className="carousel-item  ">
            <div className="carousel-img">
              <img src={smartdoors} alt="" className="img-profile" />
            </div>
            <div className="carousel-quotes ">
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="quotes-color carousel-quotes-r cq-l"
              />
              <div className="carouesl-main-quotes">
                Timely managed projects. Responsive designs.
              </div>
              <FontAwesomeIcon
                icon={faQuoteRight}
                className="quotes-color carousel-quotes-r cq-r "
              />
            </div>
            <div className="carousel-ab">
              {/* <div className="carousel-name sub-grey">Sangey Lama</div> */}
              <div className="carousel-subtitle fw-bold">smartdoors</div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#testcarousel"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#testcarousel"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* ====Skills=== */}
      <TextContainer
        name={names[3]}
        paragraph={paragraphs[4]}
        className="d-b d-t text-center"
      />
      <div className="skill-con p-1 col-8 my-3  mx-auto">
        <div className="skills-img row mx-auto align-items-center justify-content-center">
          {skills.map(skill => (
            <div className="col-3 m-1 m-md-2">
              <img src={skill} alt="" className="sk-img" />
            </div>
          ))}
        </div>
      </div>

      {/* ==about me==== */}
      <TextContainer paragraph={paragraphs[5]} className=" d-t text-center" />
    </div>
  );
}
