import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../img/dwdwsw.png";
export default function Header({
  main = false,
  abo = false,
  servis = false,
  cont = false,
  quote=false
}) {
  const [classses, setClasses] = useState("navbar");
  const hendleBar = () => {
    if (classses === "navbar") {
      setClasses("navbar nav_1024");
    } else {
      setClasses("navbar");
    }
  };
  return (
    <header id="header" className="header">
      <div className="header_container">
        <div className="logo__box">
          <img src={img} alt="" />
        </div>

        <ul className={classses}>
          <Link to="/" className="nav_link">
            <li
              className="nav_item"
              style={
                main
                  ? {
                      color: "rgb(177, 177, 177)",
                      borderBottom: "0.3px solid rgb(177, 177, 177)",
                    }
                  : null
              }
            >
              Home
            </li>
          </Link>
          <Link to="/about" className="nav_link">
            <li
              className="nav_item"
              style={
                abo
                  ? {
                      color: "rgb(177, 177, 177)",
                      borderBottom: "0.3px solid rgb(177, 177, 177)",
                    }
                  : null
              }
            >
              About US
            </li>
          </Link>
          <Link to="/services" className="nav_link">
            <li
              className="nav_item"
              style={
                servis
                  ? {
                      color: "rgb(177, 177, 177)",
                      borderBottom: "0.3px solid rgb(177, 177, 177)",
                    }
                  : null
              }
            >
              Service
            </li>
          </Link>
          <Link to="/contact" className="nav_link">
            <li
              className="nav_item"
              style={
                cont
                  ? {
                      color: "rgb(177, 177, 177)",
                      borderBottom: "0.3px solid rgb(177, 177, 177)",
                    }
                  : null
              }
            >
              Contact
            </li>
          </Link>
          {/* <Link to="/" className="nav_link">
            <li className="nav_item">Blog</li>
          </Link> */}
        </ul>
        <div
          className="shape"
          onClick={hendleBar}
          style={
            classses === "navbar"
              ? {
                  transition: " .8s all linear",
                  display: "block",
                  left: "-200%",
                }
              : {
                  transition: " .5s all linear",
                  display: "block",
                  left: "0%",
                }
          }
        ></div>
        <div className="colapse_menu">
          <span className="bar_btn" onClick={hendleBar}>
            <i
              className={
                classses === "navbar" ? "fa-solid fa-bars" : "fa-solid fa-xmark"
              }
            ></i>
          </span>
        </div>

        <div
          className={quote ? "quote active" : "quote"}
          style={
            classses === "navbar"
              ? {
                  transition: " .8s all linear",
                  display: "block",
                  left: "-200%",
                }
              : {
                  transition: " .5s all linear",
                  display: "block",
                  left: "2%",
                }
          }
        >
          <Link to="/quote">Get a quote</Link>
        </div>
      </div>
    </header>
  );
}
