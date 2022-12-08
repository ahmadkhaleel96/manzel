import React from "react";
import "./footer.css";
// import Logo from '../../assets/manzel_arch_boption3'
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
          virtual reality, that specializes in making education more interactive
          by linking Architecural education with games and artificial
          intelligence to increase accuracy, with the highest quality of
          education and shortest time possible for estimation.
        </p>
        <div class="icons">
          <a>
            <FaFacebook href="#" />
          </a>
          <a>
            <FaInstagram href="#" />
          </a>
          <a>
            <FaTwitter href="#" />
          </a>
          <a>
            <FaYoutube href="#" />
          </a>
          <a>
            <FaLinkedin href="#" />
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
          {/* <p>
            <a href="#"> office@company.com</a>
          </p> */}
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2> {/* Company<span> <img src=""</span> */}</h2>
        <p className="menu">
          <a href="/#intro"> Home</a> |<a href="/#vision"> Vision</a> |
          <a href="/#aboutUs"> About Us</a> |<a href="/#products"> Products</a>{" "}
          |<a href="/#why"> Why VR?</a> |<a href="#team"> Meet The Team</a>
        </p>
        <p className="name"> Manzel &copy; 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
