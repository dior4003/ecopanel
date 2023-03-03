import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Section2() {
  const data = [
    {
      class: "fa-solid fa-road",
      title: "Dedicated lanes",
      decr: "We offer high quality lanes from top broker and customers.",
    },
    {
      class: "fa-solid fa-people-group",
      title: "Drivers",
      decr: "We are ready to work with Company drivers, Lease-drivers, Owner Operators.",
    },
    {
      class: "fa-solid fa-chart-line",
      title: "Intership Programs",
      decr: "Our company annually offers international internship programs for students from low income families.",
    },
    {
      class: "fa-solid fa-truck-moving",
      title: "Land Freight",
      decr: "We are the high quality and and highly secured road transportation provider.",
    },
    {
      class: "flaticon flaticon-warehouse",
      title: "Warehousing",
      decr: "We have facilities ready to handle your supply chain, at origin or destination.",
    },
    {
      class: "flaticon flaticon-logistics-delivery",
      title: "Custom Clearance",
      decr: "Our company can guide you through shipment customs clearance process.",
    },
  ];
  return (
    <section className="section_2">
      <div className="container_70">
        <div className="content_header">
          <h1 className="title">Top transportation and logistics company</h1>
          <p className="decr">
            Provides high quality, comprehensive transportation services and
            always understand client's requirements.
          </p>
        </div>
        {data.map((item, id) => (
          <div className="card" key={id}>
            <div className="card_body">
              <div className="icon">
                <i className={item.class}></i>
              </div>
              <h3 className="title">{item.title}</h3>
              <p className="decr">{item.decr}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
