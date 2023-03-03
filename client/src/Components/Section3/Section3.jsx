import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";




export default function Section3() {
  const [size, setSize] = useState(100);
  const [current, setCurrent] = useState(0);
  const [active, setActive] = useState(null);
  const [move ,setMove]=useState(0)

  const data = [
    {
      img: "https://www.stltruckers.com/assets/thumbs/webp/43357e466827b80a6b80a44706c33481.webp",
      title: "Company Driver",
      decr: "Become our company driver.",
      descr: {
        title: "Company Driver",
        title1: `Stable salary, flexible schedule and on time payments are provided
            by our company for all company drivers`,
        info: [
          {
            class: "fa-solid fa-dollar-sign",
            title: " 0,65 - 0,75",
          },
          {
            class: "fa-solid fa-road",
            title: "3000-5000 mile",
          },
          {
            class: "fa-solid fa-user-check",
            title: "Experience 1+",
            decr: "Offer secure, reliable and environmentally friendly rail freight transportation.",
          },
          {
            class: "flaticon-24-hours",
            title: "24/7 dispatch",
            decr: "We are the high quality and and highly secured road transportation provider.",
          },
        ],
      },
    },
    {
      img: "https://www.stltruckers.com/assets/thumbs/crop/832x468/633ee217183ed02d053a73afda81b691.webp",
      title: "Lease Driver",
      decr: "Brand new trucks are available for purchase and rent for lease drivers",
      descr: {
        title: "Lease Driver",
        title1: `Brand new trucks are available for purchase and rent for lease drivers`,
        info: [
          {
            class: "fa-solid fa-dollar-sign",
            title: "$9000 - $15000",
          },
          {
            class: "fa-solid fa-truck-moving",
            title: "Fully equipped",
          },
          {
            class: "fa-solid fa-user-check",
            title: "Experience 1+",
            decr: "Offer secure, reliable and environmentally friendly rail freight transportation.",
          },
          {
            class: "flaticon-24-hours",
            title: "24/7 dispatch",
            decr: "We are the high quality and and highly secured road transportation provider.",
          },
        ],
      },
    },
  ];
  const next = () => {
    setActive("active");
    if (current < 0) {
      setCurrent(data.length - 1);
    } else if (current >= data.length - 1) {
      setCurrent(0);
    } else setCurrent((prev) => prev + 1);
  };
  useCallback(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [next]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive(null);
    }, 1000);
    return () => clearTimeout(timer);
  }, [active]);
  const prev = () => {
    setActive("active");
    if (current <= 0) {
      setCurrent(data.length - 1);
    } else if (current > data.length - 1) {
      setCurrent(0);
    } else setCurrent((prev) => prev - 1);
  };
  const data1 = [
    {
      class: "fa-solid fa-dollar-sign",
      title: " 0,65 - 0,75",
    },
    {
      class: "fa-solid fa-road",
      title: "3000-5000 mile",
    },
    {
      class: "fa-solid fa-user-check",
      title: "Experience 1+",
      decr: "Offer secure, reliable and environmentally friendly rail freight transportation.",
    },
    {
      class: "flaticon-24-hours",
      title: "24/7 dispatch",
      decr: "We are the high quality and and highly secured road transportation provider.",
    },
  ];

  return (
    <section className="section_3">
      <div
        className="slider_container"
        onMouseEnter={() => setSize(110)}
        onMouseLeave={() => setSize(100)}
      >
        {data.map((item, id) => (
          <div
            className={`slider `}
            onMouseMove={(e) => {
              setMove(e.clientX);
            }}
            style={{
              transition: ".6s all linear",
              backgroundImage: `url(${item.img})`,
              backgroundSize: `${size}% ${size}%`,
              backgroundPosition: "center center",
              position: "absolute",
              left: `${current === id ? 0 : current * 100}%`,
              zIndex: `${current === id ? 1 : 0}`,
            }}
          >
            <h3 className="title">{item.title}</h3>
            <p className="decr">{item.decr}</p>
          </div>
        ))}
      </div>
      <div className="info_container">
        <div className="buttons">
          <span className="prev" onClick={prev}>
            <i className="fa-solid fa-chevron-left"></i>
          </span>
          <span className="next" onClick={next}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>
        <div className={`info ${active}s`}>
          <h1 className="title">
            <b>{data[current].descr.title}</b>
          </h1>
          <p className="decr">{data[current].descr.title1}</p>
          <ul className="services">
            {data[current].descr.info.map((item, id) => (
              <li
                className="ite"
               
              >
                <i className={item.class}></i>
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
          {/* <Link to="/" className="btn__">
            See more services
          </Link> */}
        </div>
      </div>
    </section>
  );
}
