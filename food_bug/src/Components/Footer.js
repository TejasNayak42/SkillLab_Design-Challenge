import React from "react";

export default function Footer() {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "Black",
        color: "white",
        height: "50px",
      }}
    >
      Food Bug &nbsp;
      <a href="https://github.com/TejasNayak42">@TejasNayak42</a>
    </div>
  );
}
