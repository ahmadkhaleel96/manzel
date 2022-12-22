import React from "react";

import "./team.css";
import { TeamObj } from "./teamData.js";

const Team = () => {
  return (
    <>
      <div id="team">
        <div className="team-section">
          <div className="team-wrapper">
            <h1 className="team-h1">Meet the Team</h1>
            <div className="team-container">
              {TeamObj.map(
                ({
                  id,
                  img,
                  name,
                  position,
                  discription,
                  social1,
                  social2,
                  social1Ref,
                  social2Ref
                }) => {
                  return (
                    <>
                      <div className="team-container-card">
                        <div className="team-container-cardInfo">
                          <div className="icon">
                            <img
                              src={img}
                              alt="Hadeel"
                              className="member-image"
                            />
                            <div className="image-border"></div>
                          </div>
                          <div className="member-name">{name}</div>
                          <div className="name-line"></div>
                          <div className="member-position">{position}</div>
                          <div className="position-line"></div>
                          <p>
                            {discription}
                          </p>
                          <div className="social">
                          <a href={social1Ref}><img
                            src={social1}
                            alt="linkedIn"
                            className="social"
                          /></a>
                          <a href={social2Ref}><img src={social2} alt="behance" className="social"  /></a>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
