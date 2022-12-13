import React from "react";
import { Link } from "react-scroll";
import "./footer.css";
import Logo from "../../images/manzel-logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About the company</span> Manzel is an Educational Platform in
          virtual reality. That specializes in making education more interactive
          by linking Architectural education with games and artificial
          intelligence to increase accuracy, with the highest quality of
          education and the shortest time possible for estimation.
        </p>
        <div class="icons">
          <a href="https://web.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube />
          </a>
          <a href="https://www.linkedin.com/">
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> King Hussien St.</span> Amman, Jordan
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p> (+962) 790654588 </p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="https://www.google.com/maps/place/Orange+Digital+Village/@31.9701787,35.9076182,17z/data=!4m12!1m6!3m5!1s0x151ca1dd7bca79dd:0x9b0416f056ff0786!2sOrange+Digital+Village!8m2!3d31.9701742!4d35.9098069!3m4!1s0x151ca1dd7bca79dd:0x9b0416f056ff0786!8m2!3d31.9701742!4d35.9098069">
              {" "}
              office@company.com
            </a>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2>
          <span>
            {" "}
            <img src={Logo} alt="Logo" className="logo" />
          </span>
        </h2>
        <p className="menu">
          <a href="/#"> Home</a> |<a href='/#vision' >Vision</a> |
          <a href="/#about-us"> About Us</a> |<a href="/#products"> Products</a>
          |<a href="/#why-VR"> Why VR?</a> |<a href="#partners"> Partners</a> |
          <a href="#team"> Team</a>
        </p>
        <p className="name"> Manzel &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
