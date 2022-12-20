import React from "react";
import "./team.css";

import Hadeel from "../../images/Hadeel.jpeg";
import Ahmad from "../../images/Ahmad.jpg";
import Samer from "../../images/Samer.jpeg";
import Haya from "../../images/haya.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import linkedIn from "../../images/linkedin.png";
import github from "../../images/github.png";
import behance from "../../images/behance.png";

const Team = () => {
  return (
    <div id="team">
      <div className="team">Meet the Team</div>
      <div className="team-p">
        We have a staff filled with the most creative, ambitious, hard-working,
        fun, and weird people. With different backgrounds. One common goal
        shared which is to change education for the better.{" "}
      </div>
      <ul className="list-members">
        <li className="member">
          <div className="member-image">
            <img src={Hadeel} alt="Hadeel" />
          </div>
          <div className="member-info">
            <h3>Hadeel Albalasmeh</h3>
            <p className="position">Founder & CEO</p>
            <p className="discription">
              Architect, Visual storyteller, VR Designer, 3D Visualizer{" "}
            </p>
            <div className="social-link">
              <img
                className="fab fa-facebook-f"
                src={facebook}
                alt="facebook"
                href="https://web.facebook.com/profile.php?id=100002795461688"
              />
              <img
                className="fab fa-linkedin-in"
                src={linkedIn}
                alt="linkedIn"
                href="https://www.linkedin.com/in/hadeel-balasmeh-12a44b180/"
              />
              <img
                className="fab fa-facebook-f"
                src={behance}
                alt="behance"
                href="https://www.behance.net/hadeelbala48e3"
              />
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
            <img src={Samer} alt="Samer" />
          </div>
          <div className="member-info">
            <h3>Samer Rahmeh</h3>
            <p className="position">Chief Technology Officer</p>
            <p className="discription">
              Architect, ML Engineer, Computational Designer
            </p>
            <div className="social-link">
              <img
                className="fab fa-facebook-f"
                src={facebook}
                alt="facebook"
                href="https://web.facebook.com/profile.php?id=100086459825293"
              />
              <img
                className="fab fa-twitter"
                src={github}
                alt="github"
                href="https://github.com/samgr55"
              />
              <img
                className="fab fa-linkedin-in"
                src={linkedIn}
                alt="linkedIn"
                href="https://www.linkedin.com/in/samgr55/"
              />
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
            <img src={Ahmad} alt="Ahmad" />
          </div>
          <div className="member-info">
            <h3>Ahmad K. Al-Mahasneh</h3>
            <p className="position">Developer</p>
            <p className="discription">
              Electrical Engineer, Full-Stack Software Developer, Photographer,
              Filmmaker, and super weirdo.
            </p>
            <div className="social-link">
              <img
                className="fab fa-facebook-f"
                src={facebook}
                alt="facebook"
                href="https://web.facebook.com/ahmadkhaleel96"
              />
              <img
                className="fab fa-twitter"
                src={instagram}
                alt="instagram"
                href="https://www.instagram.com/ahmadkhaleel96/"
              />
              <img
                className="fab fa-linkedin-in"
                src={linkedIn}
                alt="linkedIn"
                href="https://www.linkedin.com/in/ahmadkhaleel96/"
              />
              <img
                className="fab fa-linkedin-in"
                src={github}
                alt="github"
                href="https://github.com/ahmadkhaleel96"
              />
            </div>
          </div>
        </li>
        <li className="member">
          <div className="member-image">
            <img src={Haya} alt="Hadeel" />
          </div>
          <div className="member-info">
            <h3>Haya Albalasmeh</h3>
            <p className="position">Business Development</p>
            <p className="discription">
              Certified innovation professional ,Marketing specialist , Clinical
              pharmacist
            </p>
            <div className="social-link">
              <img
                className="fab fa-linkedin-in"
                src={linkedIn}
                alt="linkedIn"
                href="https://www.linkedin.com/in/haya-balasmeh/"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Team;
