import React from "react";

export default function ({ name, title, paragraph, className }) {
  return (
    <div className={`text-con p-4 px-0 p-lg-6 ${className}`}>
      <div className="title h3 text-capitalize fw-bold">{name}</div>
      <div className="sub-title sub-grey h5 mb-4">{title}</div>
      <p className="title-para col-11 col-md-9 col-lg-8">{paragraph}</p>
    </div>
  );
}
