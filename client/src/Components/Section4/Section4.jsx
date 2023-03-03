import React from "react";
import useCounter from "../Hooks/useCounter";

export default function Section4() {
  const nums = useCounter(1250);
  const data = [
    {
      icon: "flaticon flaticon-express-delivery",
      num: 950,
      title: "Completed Delivery",
    },
    {
      icon: "flaticon flaticon-customer",
      num: 1250,
      title: "Satisfied Clients",
    },
    {
      icon: "flaticon flaticon-trophy",
      num: 50,
      title: "Awards Winnerx",
    },
    {
      icon: "flaticon flaticon-team",
      num: 120,
      title: "Team Members",
    },
  ];
 
  return (
    <section className="section_4">
      <div className="container_70">
        <div className="content_info">
          <h1 className="title">Specialist for transportation.</h1>
          <p className="decr">
            We provide comprehensive transportation services for our partners on
            the globe and always offer innovative solutions to deal with complex
            logistics challenges.
          </p>
          <a href="/" className="btn__">
            About us
          </a>
        </div>
        <div className="card_box">
          {data.map((item, id) => (
            <div
              className={`card ${
                id === 0 ? "mt-12" : id === 2 ? "mt-12" : "mt_12"
              }`}
            >
              <div className="header">
                <i className={item.icon}></i>
                <span className="title">
                  {nums < item.num ? nums : item.num}
                </span>
              </div>
              <div className="decr">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
