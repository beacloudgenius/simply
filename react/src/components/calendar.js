import React from "react";

const calen = ({ month, date, day }) => (
  <svg
    // className={className}
    style={{
      boxShadow: "0px 0px 8px 0px",
      borderRadius: 8,
      margin: "8px",
      fontWeight: "normal",
    }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-label="Calendar"
    role="img"
    viewBox="0 0 512 512"
    width="70px"
    height="70px"
  >
    <path d="M512 455c0 32-25 57-57 57H57c-32 0-57-25-57-57V128c0-31 25-57 57-57h398c32 0 57 26 57 57z" fill="#e0e7ec" />
    <path d="M484 0h-47c2 4 4 9 4 14a28 28 0 1 1-53-14H124c3 4 4 9 4 14A28 28 0 1 1 75 0H28C13 0 0 13 0 28v157h512V28c0-15-13-28-28-28z" fill="#dd2f45" />

    <g fill="#f3aab9">
      <circle cx="470" cy="142" r="14" />
      <circle cx="470" cy="100" r="14" />
      <circle cx="427" cy="142" r="14" />
      <circle cx="427" cy="100" r="14" />
      <circle cx="384" cy="142" r="14" />
      <circle cx="384" cy="100" r="14" />
    </g>

    <text
      // id="month"
      x="32"
      y="164"
      style={{
        fill: "#fff",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: "140px",
        textAnchor: "left",
      }}
    >
      {month || ""}
    </text>

    <text
      // id="day"
      x="256"
      y="400"
      style={{
        fill: "black",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: "200px",
        textAnchor: "middle",
      }}
    >
      {date || ""}
    </text>

    <text
      // id="weekday"
      x="256"
      y="480"
      style={{
        fill: "black",
        fontFamily: "-apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: "64px",
        textAnchor: "middle",
      }}
    >
      {day || ""}
    </text>
  </svg>
);

export default calen;
