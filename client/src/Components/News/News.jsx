import React from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Contact from "../Contact";
import Footer from "../Footer";
import Header from "../Header";
import Section6 from "../Section6";
import bg from "../../images/bg-footer.jpg";

export default function News() {
  return (
    <div>
      <Header news={true} />
      <Parallax
        style={{ width: "100%" }}
        bgImageSize={{ width: "100%" }}
        bgImage={bg}
        strength={400}
      >
        <div className="about_header">
          <h1 className="title">Новости</h1>
          <p className="links">
            <Link to="/"> Главная/</Link>
            <span>Новости</span>
          </p>
        </div>
      </Parallax>
      <Section6 />
      <Contact />
      <Footer />
    </div>
  );
}
