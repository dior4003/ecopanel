import React from "react";
import { Parallax } from "react-parallax";
import bg from "../../images/bg-footer.jpg";
import logo from "../../images/9A3YeyROAEWs.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="footer">
      <div className="contact_social">
        <span className="title">Наши контакты</span>
        <div className="social">
          <a
            href="https://www.instagram.com/ecopaneltech.uz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram active1"></i>
            <i className="fa-brands fa-instagram active"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100067763066652&hc_ref=ARSEFHepN0hyUtIqoXjqt6dmiPLsxrX31a86z7fhwszYbXpNBvRphzVPYjGstnDRBo0&fref=nf&__xts__[0]=68.ARBR6p6wJ5xaCfcNsvSFZNE1HLg4KNv5mmQ5Hre66xVh_5ubTebMicN0yFujo8NIm13iXMB1sCiMgIpygJ9c5SMl8rzueNCho4IsdDHNvuXUMUoyCZDxIfOkUKDoEHH4j3sZxmuJ43-Wp90jFIOTA8zzklM9WRonjStCKSNaRfNNUz6VoqbsKvnyS8kxL3dzu71k5cZ7nI-w_DVCKvbnJAbeeoHqw1k_xRqCCN4cde0XKPpS1HC_2Ck_YVkZXgYfUyBFMjNVmbneapBMmR1vixl0zP5BE_I_zGLAZplpLY05_nDVsKc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook-f active1"></i>{" "}
            <i className="fa-brands fa-facebook-f active"></i>{" "}
          </a>
          <a
            href="https://t.me/ecopaneltech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-telegram active1"></i>
            <i className="fa-brands fa-telegram active"></i>
          </a>
        </div>
      </div>
      <Parallax
        style={{ width: "100%" }}
        bgImageSize={{ width: "100%" }}
        bgImage={bg}
        strength={400}
      >
        <div className="content">
          <div className="container_70">
            <div className="footer_content">
              <div className="logo_box">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <p className="decr">
                  СТРОИТЕЛЬНЫЕ СЭНДВИЧ ПАНЕЛИ ОТ ECO PANEL TECH – ЗАЛОГ КАЧЕСТВА
                  И НАДЕЖНОСТИ
                </p>
              </div>
              <ul className="foo_link">
                <li className="link_item">
                  <Link to="">Главная</Link>
                </li>
                <li className="link_item">
                  <Link to="">Наши контакты</Link>
                </li>
                <li className="link_item">
                  <Link to="">Вся продукция</Link>
                </li>
              </ul>
              <ul className="foo_link">
                <li className="link_item">
                  <Link to="">О нас</Link>
                </li>
                <li className="link_item">
                  <Link to="">Услуги</Link>
                </li>
                <li className="link_item">
                  <Link to="">Блог</Link>
                </li>
              </ul>
              <ul className="foo_link info">
                <li className="link_item">
                  <i className="fa-solid fa-location-dot"></i>
                  <a
                    href="https://goo.gl/maps/uodqFqtwLQcG48at5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Город Ташкент, Сергелийский район, улица Чоштепа
                  </a>
                </li>
                <li className="link_item">
                  <i className="fa-solid fa-phone"></i>

                  <a href="tel:+998974543030">+998974543030</a>
                </li>
                <li className="link_item">
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+998339091111"> +998339091111</a>
                </li>
                <li className="link_item">
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:info@ecopaneltech.uz">info@ecopaneltech.uz</a>
                </li>
              </ul>
            </div>
            <div className="shape"></div>
            <div className="foo_info">
              <p>© Все права защищены 2019-2023 ECO PANEL TECH</p>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
}
