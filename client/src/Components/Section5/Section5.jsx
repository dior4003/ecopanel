import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Section5() {
  const [tabs, setTabs] = useState(0);
  return (
    <section className="section_5">
      <div className="container_70">
        <div className="header">
          <h1 className="title">Hiring Process</h1>
        </div>
        <ul className="tabs">
          <li
            onClick={() => setTabs(0)}
            className={`tab_item ${tabs === 0 ? "active" : null}`}
          >
            Before journey
          </li>
          <li
            onClick={() => setTabs(1)}
            className={`tab_item ${tabs === 1 ? "active" : null}`}
          >
            During journey
          </li>
          <li
            onClick={() => setTabs(2)}
            className={`tab_item ${tabs === 2 ? "active" : null}`}
          >
            After journey
          </li>
        </ul>
        {tabs === 0 ? (
          <div className="tab_content">
            <div className="content_info">
              <p className="decr">
                We guarantee strict compliance to all procedures before, during
                and after journey.
              </p>
              <ul className="lists">
                <li className="list_item">
                  <i class="fab fa-jira"></i>
                  Standard operating procedures for vehicle maintenance
                </li>
                <li className="list_item">
                  <i class="fab fa-jira"></i>
                  Standard operating procedures for vehicle maintenance
                </li>
                <li className="list_item">
                  <i class="fab fa-jira"></i>
                  Standard operating procedures for vehicle maintenance
                </li>
              </ul>
              <Link to="/" className="btn__">
                View details
              </Link>
            </div>
            <div className="content_img">
              <img
                src="https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/our-process-tab-right.jpg"
                alt=""
              />
            </div>
          </div>
        ) : null}
        {tabs === 1 ? (
          <div className="tab_content">
            <div className="content_info">
              <p className="decr">
                During journey, we have to face with logistics logistics, so an
                emergency response plan is a must
              </p>
              <ul className="lists">
                <li className="list_item">
                  <i class="fab fa-jira"></i>
                  Keeping track of condition of containers during journey
                </li>
                <li className="list_item">
                  <i class="fab fa-jira"></i>
                  Use the ISO container inspection checklist View details
                </li>
              </ul>
              <Link to="/" className="btn__">
                View details
              </Link>
            </div>
            <div className="content_img">
              <img
                src="https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/our-process-tab-righ-02.jpg"
                alt=""
              />
            </div>
          </div>
        ) : null}
        {tabs === 2 ? (
          <div className="tab_content">
            <div className="content_info">
              <p className="decr">
                Our process will continue after journey by checking all tasks
                were completed to find out issues
              </p>
              <ul className="lists">
                <li className="list_item">
                  <i class="fab fa-jira"></i>
                  Write a short detailed report
                </li>
                <li className="list_item">
                  <i class="fab fa-jira"></i>
                  Get customer feedback on the logistics service quality
                </li>
                <li className="list_item">
                  <i class="fab fa-jira"></i>
                  Complete incident management checklist
                </li>
              </ul>
              <Link to="/" className="btn__">
                View details
              </Link>
            </div>
            <div className="content_img">
              <img
                src="https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/our-process-tab-righ-03.jpg"
                alt=""
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
