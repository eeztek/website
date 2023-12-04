import * as React from "react";
const SVGComponent = (props) => (
 
 
  <svg
    id="sw-js-blob-svg"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
        <stop id="stop1" stopColor="#fc3737" offset="0%" />
        <stop id="stop2" stopColor="#fc3737" offset="100%" />
      </linearGradient>
    </defs>
    <mask id="mask-1" mask-type="alpha">
      <path
        fill="url(#sw-gradient)"
        d="M17,-23.9C23.9,-22,32.6,-20.4,36.5,-15.6C40.4,-10.7,39.5,-2.6,37.1,4.4C34.7,11.5,30.8,17.4,26.3,22.9C21.7,28.5,16.6,33.6,9.8,37.5C3,41.3,-5.3,43.9,-12.4,41.9C-19.4,39.9,-25.2,33.4,-29.8,26.6C-34.4,19.9,-37.7,12.9,-36.7,6.5C-35.8,0.1,-30.5,-5.7,-27.9,-13.3C-25.3,-20.9,-25.4,-30.4,-21.2,-33.5C-17.1,-36.6,-8.5,-33.4,-1.7,-30.7C5.1,-28,10.1,-25.8,17,-23.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        style={{
          transition: "all 0.3s ease 0s",
        }}
        strokeWidth={0}
      />
    </mask>
    <g mask="url(#mask-1)">
      <path
        fill="url(#sw-gradient)"
        d="M17,-23.9C23.9,-22,32.6,-20.4,36.5,-15.6C40.4,-10.7,39.5,-2.6,37.1,4.4C34.7,11.5,30.8,17.4,26.3,22.9C21.7,28.5,16.6,33.6,9.8,37.5C3,41.3,-5.3,43.9,-12.4,41.9C-19.4,39.9,-25.2,33.4,-29.8,26.6C-34.4,19.9,-37.7,12.9,-36.7,6.5C-35.8,0.1,-30.5,-5.7,-27.9,-13.3C-25.3,-20.9,-25.4,-30.4,-21.2,-33.5C-17.1,-36.6,-8.5,-33.4,-1.7,-30.7C5.1,-28,10.1,-25.8,17,-23.9Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        style={{
          transition: "all 0.3s ease 0s",
        }}
        strokeWidth={0}
      />
      <image
        className="hero-img"
        x={-11}
        y={20}
        href="https://img.freepik.com/free-photo/man-using-tablet-work-connect-with-others_23-2149369110.jpg"
      />
    </g>
  </svg>
);
export default SVGComponent;
