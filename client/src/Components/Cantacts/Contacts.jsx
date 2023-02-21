import React from 'react'
import { Parallax } from 'react-parallax'
import { Link } from 'react-router-dom'
import Contact from '../Contact'
import Footer from '../Footer'
import bg from "../../images/bg-footer.jpg";
import Header from '../Header'


export default function Contacts() {
    return (
      <section className="about">
        <Header />
        <Parallax
          style={{ width: "100%" }}
          bgImageSize={{ width: "100%" }}
          bgImage={bg}
          strength={400}
        >
          <div className="about_header">
            <h1 className="title">Наши контакты</h1>
            <p className="links">
              <Link to="/"> Главная/</Link>
              <span>Наши контакты</span>
            </p>
          </div>
        </Parallax>

        <Contact />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d47999.136120385876!2d69.224085!3d41.244734!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x77f8ed041d9cd0e8!2zNDHCsDE0JzUxLjUiTiA2OcKwMTInMjkuOSJF!5e0!3m2!1suz!2s!4v1676830720048!5m2!1suz!2s"
          height="350"
                style={{ border: "none", width: "100%" }}
          allowfullscreen=""
          loading="lazy"
          title='map'
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <Footer />
      </section>
    );
}
