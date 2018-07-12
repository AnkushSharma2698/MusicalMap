import React, { Component } from "react";
import "./styles.css";

const playButton = () => {
  return (
    <div className="container">
      <a href="#" className="playBut">
        {/* Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          xmlnsA="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
          x="0px"
          y="0px"
          width="213.7px"
          height="213.7px"
          viewBox="0 0 213.7 213.7"
          enableBackground="new 0 0 213.7 213.7"
          xmlSpace="preserve"
        >
          <polygon
            className="triangle"
            id="XMLID_18_"
            fill="none"
            strokeWidth={7}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            points="
        73.5,62.5 148.5,105.8 73.5,149.1 "
          />
          <circle
            className="circle"
            id="XMLID_17_"
            fill="none"
            strokeWidth={7}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            cx="106.8"
            cy="106.8"
            r="103.3"
          />
        </svg>
      </a>
    </div>
  );
};

export default playButton;
