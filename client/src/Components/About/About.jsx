import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Loader from "../Loader";
import Section2 from "../Section2";
import Section4 from "../Section4";
import Section6 from "../Section6";

export default function About({ link }) {
  const [tabs, setTabs] = useState(0);
  return (
    <>
      <Loader/>
      <Header abo={link} />
      <div className="about__">
        <div className="container_70">
          <h1 className="title">About US</h1>
          <p className="link">
            <Link to="/">Home</Link>
            {">"}
            <span>About US</span>
          </p>
        </div>
      </div>
      <div className="abouts">
        <div className="container_70">
          <div className="info">
            <p className="tit">About company</p>
            <h1 className="title">Global Leading business</h1>
            <p className="p_decr">
              We have built a team of employees, who are participated in
              professional training courses , are groomed to handle any emerging
              situation with a level of composure that gives the customer peace
              of mind.
            </p>
            <ul className="tabs">
              <li
                className={`item ${tabs === 0 ? "active" : null}`}
                onClick={() => setTabs(0)}
              >
                Our mission
              </li>
            </ul>
            <p className="p_decr">
              Offering our customers the opportunity to conduct their shipments
              in a friendly environmental way
            </p>
            {tabs === 0 ? (
              <ul className="content">
                <li className="item">
                  <i className="fas fa-circle"></i> Guarantee on-time delivery
                </li>
                <li className="item">
                  <i className="fas fa-circle"></i>
                  Superior transportation and logistics services
                </li>
                <li className="item">
                  <i className="fas fa-circle"></i>
                  The most cost-effective delivery for clients
                </li>
              </ul>
            ) : (
              <ul className="content">
                <li className="item">
                  <i className="fas fa-circle"></i> Guarantee on-time delivery
                </li>
                <li className="item">
                  <i className="fas fa-circle"></i>
                  Superior transportation and logistics services
                </li>
                <li className="item">
                  <i className="fas fa-circle"></i>
                  The most cost-effective delivery for clients
                </li>
              </ul>
            )}
          </div>
          <div className="img">
            <img
              src="https://rare-gallery.com/uploads/posts/715156-Trucks-Freightliner-Trucks.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Section4 />
      <Section2 />

      <Section6 />
      <Footer />
    </>
  );
}
