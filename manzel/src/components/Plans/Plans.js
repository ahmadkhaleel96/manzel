import React from "react";
import { Link } from "react-router-dom";
import { FaFire } from "react-icons/fa";
import { BsXDiamondFill } from "react-icons/bs";
import { GiCrystalize } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import { Button } from "../Button/Button.js";

import "./plans.css";

const Plans = () => {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div id="plans">
        <div className="plan-section">
          <div className="plan-wrapper">
            <h1 className="plan-h1">Our Plans</h1>
            <div className="plan-container">
              <Link to="/sign-up" className="plan-container-card">
                <div className="plan-container-cardInfo">
                  <div className="icon">
                    <FaFire />
                  </div>
                  <h3>Individual</h3>
                  <h4> Price TBD</h4>
                  <p>Per Month</p>
                  <ul className="plan-container-feature">
                    <li>Full Tourials</li>
                    <li>24/7 Customer service</li>
                    <li>30-Day return policy</li>
                  </ul>
                  <Button className="choose">Choose Plan</Button>
                </div>
              </Link>

              <Link to="/sign-up" className="plan-container-card">
                <div className="plan-container-cardInfo">
                  <div className="icon">
                    <BsXDiamondFill />
                  </div>
                  <h3>Business</h3>
                  <h4> Price TBD</h4>
                  <p>Per Year</p>
                  <ul className="plan-container-feature">
                    <li>Full Tourials</li>
                    <li>Advanced AI Training</li>
                    <li>Customizable Training Matrial</li>
                  </ul>
                  <Button className="choose">Choose Plan</Button>
                </div>
              </Link>

              <Link to="/sign-up" className="plan-container-card">
                <div className="plan-container-cardInfo">
                  <div className="icon">
                    <GiCrystalize />
                  </div>
                  <h3>Individual</h3>
                  <h4> Price TBD</h4>
                  <p>Per Month</p>
                  <ul className="plan-container-feature">
                    <li>Full Tourials</li>
                    <li>24/7 Customer service</li>
                    <li>30-Day return policy</li>
                  </ul>
                  <Button className="choose">Choose Plan</Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Plans;
