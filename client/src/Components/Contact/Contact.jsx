import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Loader from "../Loader";
import Section10 from "../Section10";
import Section9 from "../Section9";

export default function Contact({ link }) {
  return (
    <>
      <Loader />
      <Header cont={link} />
      <div className="about__">
        <div className="container_70">
          <h1 className="title">Contact US</h1>
          <p className="link">
            <Link to="/">Home</Link>
            {">"}
            <span>Contact US</span>
          </p>
        </div>
      </div>
      <Section9 />
      <Section10 />
      <Footer />
    </>
  );
}
