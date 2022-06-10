import React from "react";
import cube from "../../assets/heroCube.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text_container">
        <h1>Coming Soon!</h1>
      </div>
      <div className="hero__cube_container">
        <div className="xyz">
          <svg
            viewBox="0 0 1194 1192"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate"
          >
            <g opacity="0.2">
              <circle
                cx="596"
                cy="596"
                r="594.5"
                stroke="url(#paint0_linear_1147_785)"
                stroke-width="3"
              ></circle>
              <circle
                cx="64"
                cy="335"
                r="10"
                fill="url(#paint1_linear_1147_785)"
              ></circle>
              <circle
                cx="187"
                cy="1029"
                r="10"
                fill="url(#paint2_linear_1147_785)"
              ></circle>
              <circle
                cx="1184"
                cy="684"
                r="10"
                fill="url(#paint3_linear_1147_785)"
              ></circle>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_1147_785"
                x1="27.8649"
                y1="603.544"
                x2="1201.29"
                y2="603.544"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4CA5FF"></stop>
                <stop offset="1" stop-color="#B673F8"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_1147_785"
                x1="54.4675"
                y1="335.127"
                x2="74.1558"
                y2="335.127"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4CA5FF"></stop>
                <stop offset="1" stop-color="#B673F8"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_1147_785"
                x1="177.468"
                y1="1029.13"
                x2="197.156"
                y2="1029.13"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4CA5FF"></stop>
                <stop offset="1" stop-color="#B673F8"></stop>
              </linearGradient>
              <linearGradient
                id="paint3_linear_1147_785"
                x1="1174.47"
                y1="684.127"
                x2="1194.16"
                y2="684.127"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#4CA5FF"></stop>
                <stop offset="1" stop-color="#B673F8"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <img src={cube} className="rotated" alt="cube" />
      </div>
    </div>
  );
};

export default Hero;
