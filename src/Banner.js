import React from "react";
import "./Banner.css";

const Banner = () => {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/003/782/502/non_2x/dark-abstract-square-header-black-mosaic-look-banner-modern-texture-simple-metal-background-vector.jpg')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
          <h1 className="banner__description">
            truncate(`This is a test description
          </h1>
          `)
        </div>
        <div className="banner--fadeBottom" />
      </div>
    </header>
  );
};

export default Banner;
