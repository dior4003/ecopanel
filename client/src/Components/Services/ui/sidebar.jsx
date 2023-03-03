import React from "react";

export default function Sidebar(props) {
  const { current, setCurrent } = props;
  return (
    <div className="sidebar">
      <div className="header">
        <h2 className="title">All Services</h2>
      </div>
      <ul className="tabs">
        <li
          className={`item ${current === 0 ? "active" : null}`}
          onClick={() => setCurrent(0)}
        >
          Internship programs
        </li>
        <li
          className={`item ${current === 1 ? "active" : null}`}
          onClick={() => setCurrent(1)}
        >
          Dedicated Lanes
        </li>
        <li
          className={`item ${current === 2 ? "active" : null}`}
          onClick={() => setCurrent(2)}
        >
          Drivers
        </li>
        <li
          className={`item ${current === 3 ? "active" : null}`}
          onClick={() => setCurrent(3)}
        >
          Land Freight Service
        </li>
        <li
          className={`item ${current === 4 ? "active" : null}`}
          onClick={() => setCurrent(4)}
        >
          Warehousing
        </li>
        <li
          className={`item ${current === 5 ? "active" : null}`}
          onClick={() => setCurrent(5)}
        >
          Custom clearance
        </li>
      </ul>
      <div className="help">
        <h2 className="title">Do you need support?</h2>
        <a href="" className="btn__">
          Contact us
        </a>
      </div>
    </div>
  );
}
