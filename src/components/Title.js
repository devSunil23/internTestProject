import React from "react";
import { NavLink } from "react-router-dom";
const Title = ({ onSelect, dataSecond }) => {
  return (
    <>
      <div className="container">
        {dataSecond.map((item, index) => {
          return (
            <div className="cardContainer" key={index}>
              <div className="cardStyle">
                <img
                  src={item.show.image.medium}
                  alt="image"
                  key={index}
                  className="imageTitle"
                />
                <div className="nameButton">
                  <h2 className="headingName details">{item.show.name}</h2>
                  <p className="id details">
                    <span>Id No. </span>
                    {item.show.id}
                  </p>
                  <NavLink
                    className="details button"
                    to="/summary"
                    onClick={() => {
                      onSelect(index);
                    }}
                  >
                    More About
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Title;
