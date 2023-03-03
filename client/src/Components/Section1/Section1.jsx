import React, { useEffect, useState } from "react";

export default function Section1() {
  const [current, setCurrent] = useState(0);
  const [move, setMove] = useState(null);
  const [classs, setClasss] = useState(null);

  const data = [
    {
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/banner-home1-1.jpg",
      holder: "Delivering cargo beyond borders ",
      title: "Amir Logistics is a leading provider of logistics.",
      btn: "See our service",
      decr: "Amir Logistics is the first full-service logistics provider with our on-time, fast and reliable promise, satisfies customers' all requirements",
    },
    {
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/banner-home1-02.jpg",
      holder: "Delivering cargo beyond borders ",
      title:
        "Go beyond logistics, make the world go round and revolutionize business.",
      btn: "See our service",
      decr: "Amir Logistics is the first full-service logistics provider with our on-time, fast and reliable promise, satisfies customers' all requirements",
    },
    {
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/banner-home1-03.jpg",
      holder: "Delivering cargo beyond borders ",
      title: "Logistics through innovation, dedication, and technology.",
      btn: "See our service",
      decr: "Amir Logistics is the first full-service logistics provider with our on-time, fast and reliable promise, satisfies customers' all requirements",
    },
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setClasss(null);
    }, 1900);
    return () => clearTimeout(timer);
  }, [classs]);
  function next() {
    setClasss("current");

    if (current >= 0 && current <= data.length - 2) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  }
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 10000);
    return () => clearInterval(timer);
  }, [current, next]);
  function prev() {
    setClasss("current");
    if (current >= 0 && current <= data.length - 2) {
      setCurrent((prev) => prev - 1);
    } else {
      setCurrent(data.length - 1);
    }
  }

  return (
    <section id="hero" className="hero">
      <div className="hero_container">
        <div
          className="prew"
          onClick={prev}
          onMouseEnter={() => setMove("prew")}
          onMouseLeave={() => setMove(null)}
          style={
            move === "prew"
              ? {
                  transition: ".6s all linear",
                  backgroundImage: `url(${
                    data[
                      current === 0
                        ? data.length - 1
                        : current === data.length - 1
                        ? current - 1
                        : current - 1
                    ].img
                  })`,
                  backgroundSize: "100% 90%",
                  backgroundPosition: "right 0 top 50%",
                  backgroundRepeat: "no-repeat",
                }
              : {
                  transition: ".6s all linear",
                  backgroundImage: `url(${
                    data[
                      current === 0
                        ? data.length - 1
                        : current === data.length - 1
                        ? current - 1
                        : current - 1
                    ].img
                  })`,
                  backgroundSize: "0% 0%",
                  backgroundPosition: "left 0 top 50%",
                  backgroundRepeat: "no-repeat",
                }
          }
        >
          <i className="fa-solid fa-chevron-left"></i>
        </div>

        <div
          className="slider_item"
          style={{
            backgroundImage: `url(${data[current].img})`,
            backgroundSize: "100% 100%",
            transition: ".6s all linear",
          }}
        >
          {/* <video src={data[current].img} autoPlay muted></video> */}
          <div className={classs}></div>
          <div className={`slider_content ${classs}__`}>
            <span className="holder">{data[current].holder}</span>
            <h1 className="title">{data[current].title}</h1>
            <p className="decr">{data[current].decr}</p>
            <span className="btn__">{data[current].btn}</span>
          </div>
        </div>
        <div
          className="next"
          onClick={next}
          onMouseEnter={() => setMove("next")}
          onMouseLeave={() => setMove(null)}
          style={
            move === "next"
              ? {
                  transition: ".6s all linear",
                  backgroundImage: `url(${
                    data[
                      current === 0
                        ? current + 1
                        : current === data.length - 1
                        ? 0
                        : data.length - 1
                    ].img
                  })`,
                  backgroundSize: "100% 90%",
                  backgroundPosition: "right 0 top 50%",
                  backgroundRepeat: "no-repeat",
                }
              : {
                  transition: ".6s all linear",
                  backgroundImage: `url(${
                    data[
                      current === 0
                        ? current + 1
                        : current === data.length - 1
                        ? 0
                        : data.length - 1
                    ].img
                  })`,
                  backgroundSize: "0% 0%",
                  backgroundPosition: "right 0 top 50%",
                  backgroundRepeat: "no-repeat",
                }
          }
        >
          <i className="fa-solid fa-chevron-right"></i>
        </div>
      </div>
    </section>
  );
}
