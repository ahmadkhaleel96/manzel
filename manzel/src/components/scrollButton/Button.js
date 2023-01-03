import React from "react";
import "./scrollButton.css";

const Button = () => {
  return (
    <div className="scroll">
      <section id="section06" className="demo">
        <div
          onClick={() => {
            window.scrollTo(0, 880);
          }}
        >
          <span></span>
        </div>
      </section>
    </div>
  );
};

export default Button;
