import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
export default function Header({ main, cont, pro, about, news }) {
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
      <div className="header_social">
        <div className="conatiner_70">
          <p className="parag">
            Если вы можете себе это представить, мы построим это для вас!
          </p>
          <div className="social_links">
            <a
              href="https://www.facebook.com/profile.php?id=100067763066652&hc_ref=ARSEFHepN0hyUtIqoXjqt6dmiPLsxrX31a86z7fhwszYbXpNBvRphzVPYjGstnDRBo0&fref=nf&__xts__[0]=68.ARBR6p6wJ5xaCfcNsvSFZNE1HLg4KNv5mmQ5Hre66xVh_5ubTebMicN0yFujo8NIm13iXMB1sCiMgIpygJ9c5SMl8rzueNCho4IsdDHNvuXUMUoyCZDxIfOkUKDoEHH4j3sZxmuJ43-Wp90jFIOTA8zzklM9WRonjStCKSNaRfNNUz6VoqbsKvnyS8kxL3dzu71k5cZ7nI-w_DVCKvbnJAbeeoHqw1k_xRqCCN4cde0XKPpS1HC_2Ck_YVkZXgYfUyBFMjNVmbneapBMmR1vixl0zP5BE_I_zGLAZplpLY05_nDVsKc"
              className="parag"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="mailto:info@ecopaneltech.uz" className="parag">
              <i className="fa-brands fa-google-plus-g"></i>
            </a>
            <a
              href="https://www.instagram.com/ecopaneltech.uz/"
              className="parag"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <span className="parag">Позвони сейчас:</span>
            <a className="parag" href="tel:+998974543030">
              +998974543030
            </a>
          </div>
        </div>
      </div>
      <div className="header_container">
        <div className="logo__box">
          <img src={logo} alt="" />
        </div>

        <ul className={classses}>
          <Link to="/" className={`nav_link ${main ? "active" : null}`}>
            <li className="nav_item">Главная</li>
          </Link>
          <Link to="/product" className={`nav_link ${pro ? "active" : null}`}>
            <li className="nav_item">Вся продукция</li>
          </Link>
          <Link to="/contact" className={`nav_link ${cont ? "active" : null}`}>
            <li className="nav_item">Наши контакты</li>
          </Link>
          <Link to="/news" className={`nav_link ${news ? "active" : null}`}>
            <li className="nav_item">Новости</li>
          </Link>
          <Link to="/about" className={`nav_link ${about ? "active" : null}`}>
            <li className="nav_item">О нас</li>
          </Link>
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
      </div>
    </header>
  );
}
