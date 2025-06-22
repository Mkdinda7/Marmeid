import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Brand from "../../assets/logo-3.png";

const Nav = () => {
  const menu = useRef();
  const navbar = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle("showMenu");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbar.current.classList.add("scrollNav");
      } else {
        navbar.current.classList.remove("scrollNav");
      }
      menu.current.classList.remove("showMenu");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="nav_wrapper" ref={navbar}>
      {/* Upper navbar */}
      <div className="topNav">
        <div className="left_side">
          <span>+91 9932980522</span>
          <span>info@mkdCompany.com</span>
        </div>
        <div className="right_side">
          <span>Eng-</span>
          <span>FR-</span>
          <span>BT-</span>
          <span>SP-</span>
          <span>FB</span>
        </div>
      </div>

      {/* Bottom navbar */}
      <div className="bottom_nav">
        <div className="logo">
          <Link to='/'><img src={Brand} alt="company logo" /></Link>
        </div>

        <ul ref={menu} id="menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/rooms">Rooms</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <div className="navBtns">
          <button id="mainBtn">Book a Table</button>
          <div className="bars" onClick={menuHandler}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
