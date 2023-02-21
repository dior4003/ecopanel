import React, { useState } from "react";
import { Parallax } from "react-parallax";
import img1 from "../../images/corusel1.jpg";
import img2 from "../../images/corusel2.jpg";
import img3 from "../../images/corusel3.jpg";
import img4 from "../../images/corusel4.jpg";
import img5 from "../../images/corusel5.jpg";
import img6 from "../../images/corusel6.jpg";
export default function Section3() {
  const data = [img1, img2, img3, img4, img5, img6];
  const [current, setCurrent] = useState(0);
  const hendleClick = (dir) => {
    if (current > data.length - 3) {
      setCurrent(data.length - 3);
    } else if (current < 1) {
      setCurrent(0);
    }
    if (current > -1 && current < data.length - 2) {
      setCurrent((prev) => prev + dir);
    }
  };
  const move = (index) => {
    return (index - current) * 110;
  };
  return (
    <section className="section3">
      <Parallax
        bgImageSize={{ width: "100%" }}
        //   bgImageStyle={{ width: "150%", position: "absolute" }}
        bgImage="https://demo.farost.net/karion/wp-content/uploads/2017/10/bg-section-portfolio-carouel.png"
        strength={200}
      >
        <div className="container_box">
          <div className="box_wrap"></div>
          <h1 className="wrap_title">НЕДАВНИЕ ПРОЕКТЫ</h1>
          <div className="shape">
            <div className="line"></div>
            <i className="fa-solid fa-square"></i>
            <div className="line"></div>
          </div>
          <div className="corusel_box">
            {data.map((item, i) => (
              <div
                key={i}
                className="slider_card"
                style={{
                  transform: `translate(${move(i)}%)`,
                  background: `url(${item})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            ))}
          </div>
          <div className="navigation">
            <span className="btn" onClick={() => hendleClick(-1)}>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span className="btn" onClick={() => hendleClick(1)}>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
          <div className="pagination">
            {data.map((item, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                className={`dot ${i === current ? "active" : null}`}
              ></div>
            ))}
          </div>
        </div>
      </Parallax>
    </section>
  );
}
