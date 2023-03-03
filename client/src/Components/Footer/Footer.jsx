import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../img/whitee.png";
import Slider from "react-slick-slider";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import img5 from "../../img/img6.jpg";
import img6 from "../../img/img7.png";
import img7 from "../../img/img8.jpg";

export default function Footer() {
  const [data, setData] = useState("");
  function hendleSubmit(e) {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "post",
      headers: myHeaders,
    };
    fetch(
      `https://api.telegram.org/bot5942901638:AAGM0Q-gGaf30eP4vfON_u7CUt96cvKf_XQ/sendMessage?chat_id=-864366784&text= %23Email
    Email : ${data}
   `,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setData("");
        console.log(result);
      })
      .catch((error) => console.log("error", error));
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <footer className="footer">
      <div className="truc_container">
        <Slider {...settings}>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <img src={img2} alt="" />
          </div>
          <div>
            <img src={img3} alt="" />
          </div>
          <div>
            <img src={img4} alt="" />
          </div>
          <div>
            <img src={img5} alt="" />
          </div>
          <div>
            <img src={img6} alt="" />
          </div>
          <div>
            <img src={img7} alt="" />
          </div>
        </Slider>
      </div>

      <div className="footer_container">
        <div className="container_70">
          <div className="logo__box">
            <div className="logo">
              <img src={img} alt="" />
            </div>
            <p className="decr">
              One of leading transportation and logistics providers over the
              world
            </p>
            <div className="links">
              <a target="_blank" rel="noopener noreferrer" href="/">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="/">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="/">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              {/* <a target="_blank" rel="noopener noreferrer" href="/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a> */}
            </div>
          </div>
          <ul className="menu">
            <li className="menu_item">
              <span>Service</span>
              <ul className="menu_link">
                <li className="link_item">
                  <Link to="/">Sea freight</Link>
                </li>
                <li className="link_item">
                  <Link to="/">Land freight</Link>
                </li>
                <li className="link_item">
                  <Link to="/">Warehousing</Link>
                </li>
                <li className="link_item">
                  <Link to="/">Custom clearance</Link>
                </li>
              </ul>
            </li>
            <li className="menu_item">
              <span>Contact Us</span>
              <ul className="menu_link">
                <li className="link_item">
                  <Link to="/">Find Us Here</Link>
                </li>

                <li className="link_item">
                  <Link to="/">Land freight</Link>
                </li>
                <li className="link_item">
                  <Link to="/">Global Network</Link>
                </li>
                <li className="link_item">
                  <Link to="/">Support 24/7</Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="form">
            <h1 className="title">Say in touch</h1>
            <form className="subscrib" onSubmit={hendleSubmit}>
              <input
                type="email"
                placeholder="Enter your email"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
              <button type="submit">
                <i class="flaticon flaticon-send-message"></i>
              </button>
            </form>
            <p className="decr">
              Subscribe to receive our latest offers and news via your email
              address
            </p>
          </div>
        </div>
        <div className="bottom">
          <div className="shape"></div>
          <p className="author">© 2022 All Rights Reserved Amir Logistics</p>
        </div>
      </div>
    </footer>
  );
}
