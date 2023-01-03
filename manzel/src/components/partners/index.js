import React from "react";
import "./partners.css";
import { partnersObj } from "./partnersData";

const Partners = () => {
  return (
    <div className="Body" id="partners">
      <div className="container">
        <h2>Our Incubators</h2>
        <ul className="cards">
          {partnersObj.map(({ img }) => {
            return (
              <>
                <li className="card">
                  <div>
                    <div className="card-content">
                      <img src={img} alt="partner logo" />
                    </div>
                  </div>
                  <div className="card-link-wrapper"></div>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Partners;
