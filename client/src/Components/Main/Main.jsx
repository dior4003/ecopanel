import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import Loader from "../Loader";
import Section1 from "../Section1";
import Section10 from "../Section10";
import Section2 from "../Section2";
import Section3 from "../Section3";
import Section4 from "../Section4";
import Section6 from "../Section6";
import Section7 from "../Section7";
import Section9 from "../Section9";

export default function Main({ link }) {
  return (
    <>
      <Loader />
      <Header main={link} />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <h1 className="title-section6">Video reviews of our drivers</h1>
      <Section6 actives={1} />
      <Section7 />
      <Section9 />
      <Section10 />
      <Footer />
    
    </>
  );
}
