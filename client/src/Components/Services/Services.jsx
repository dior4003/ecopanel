import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Section9 from "../Section9";
import Section4 from "../Section4";
import Sidebar from "./ui/sidebar";
import Contents from "./ui/Contents";
import intern from "../../img/intern.jpg";
import delicate from "../../img/delicate.jpg";
import drivers from "../../img/drivers.jpg";
import land from "../../img/land.jpg";
import were from "../../img/were.jpg";
import cus from "../../img/cus.jpg";
import Loader from "../Loader";

export default function Services({ link }) {
  const data = [
    {
      decr1: `Increasingly, AmirLogistics company need employees with training in the latest trends and technology. An Undergraduate Degree in Transportation and Logistics a Masters in Supply Chain Management, or a Degree in Operations Management will help you acquire all of the skills that we are looking for.`,
      img1: intern,
      decr2: ``,
      title1: "Internship programs",
      decr3: `As with engineering positions, however, AmirLogistics company want to see that a potential logistics employee can thrive in a real-world work environment. `,
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/rail-freight-small-03.jpg",
      decr4: `  We need to feel secure that your investment in a new-hire will pay dividends. Without a doubt, the best way to attain this real-world experience is through an internship.`,
    },
    {
      decr1: `How Dedicated Lanes will reduce your freight cost and improve service!`,
      img1: delicate,
      decr2: ``,
      title1: "Dedicated Lanes",
      decr3: `Dedicated lanes are defined as a single truck driver running from point A to point B with a load of freight and returning full to point A. Typically companies use dedicated lanes for permanent scheduled deliveries to large customers or distribution centers. `,
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/sea-freight-small.jpg",
      decr4: ` An example of this: a manufacturer sends raw material from Richmond, Virginia to Atlanta, Georgia every week. That same truck then picks up finished goods in Atlanta and brings it back to Richmond, Virginia. Large companies such as AmirLogistics typically use a dedicated fleet to perform this task.`,
    },
    {
      decr1: `Drivers. Truck driving is one of the most important sectors of the American economy. It has provided reliable, honest work for millions of individuals over the last century. `,
      img1: drivers,
      decr2: ` `,
      title1: "Drivers.",
      decr3: `As the world economy continues to grow, trucking will only become more significant.This growth in the trucking industry is helped along by the many benefits available to those employed as truck drivers. One of the best benefits of trucking is the diversity of job types and position titles that exist. In many instances, trucking jobs need specialized training and further education to be performed safely and efficiently. Other jobs simply need truckers to enjoy new responsibilities and developing new skills. `,
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/land-freight-small.jpg",
      decr4: `Want to add, that we are waiting for drivers from all over the world to conquer new heights and create a historical breakthrough in the field of logistics together with AmirLogistics company.`,
    },
    {
      decr1: ` Land Freight Service in AmirLogistics company.`,
      img1: land,
      decr2: ``,
      title1: "Land Freight Service",
      decr3: `Transport of land cargo has great benefits, it is necessary to consider the technical limitations with which this type of transport has.`,
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/land-freight-01.jpg",
      decr4: `Although in terms of the type of merchandise, the ground service does not have restrictions, it is necessary to consider that it has limitations in terms of the volume of loads that can be transported, since the capacity of these transports is considerably less than other alternatives such as air transport or sea transport.In cargo transportation by road it is possible to transport all types of goods thanks to the possibility of adapting the truck trailer to the necessary form for any matter.`,
    },
    {
      decr1: `The role of warehousing in a Logistics system. `,
      img1: were,
      decr2: ``,
      title1: "Carry out quality controls.",
      decr3: `The role of warehousing in a Logistics system. 
For the movement of goods from the supplier to the buyer, transportation is the most fundamental and important component of logistics. This is the movement of the product from one supplier to the buyer. In general, the buyer does not directly receive the products from the supplier. They have to be transported from the point of production to the final destination.`,
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/warehousing-01.jpg",
      decr4: `Carry out quality controls: The exact size, weight, number, and configuration of any of the products stored in a central warehouse must be recorded accurately so that the correct part can be delivered at the right place and time. Traditional quality control techniques include verification checks, visual verification checks, and reading a code from the product or container.`,
    },
    {
      decr1: `Enjoy a smooth journey through the formalities
Customs clearance is the necessary but complex procedure that nobody wants to have to go through, except for the 50-strong team of customs professionals at AmirLogistics that is! We are here to help ensure that you never have to deal with the confusion, stress and delay involved in having incorrect paperwork.`,
      img1: cus,
      decr2: ``,
      title1: "Customs Clearance",
      decr3: `. We handle customs procedures in-house for imports and exports at all USA lands, with a wide range of facilities and solutions to choose from, and for businesses of any size.`,
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/12/warehousing-02.jpg",
      decr4: `We began planning to upscaling our team and developing our tech to make sure we would be able to prepare and support customers old and new for the new customs clearance formalities.`,
    },
  ];
  const [current, setCurrent] = useState(0);
  return (
    <>
      <Loader />
      <Header servis={link} />
      <div className="services__">
        <div className="container_70">
          <h1 className="title">Service</h1>
          <p className="link">
            <Link to="/">Home</Link>
            {">"}
            <span>Service</span>
          </p>
        </div>
      </div>
      <div className="all_services">
        <div className="container_70">
          <Sidebar setCurrent={setCurrent} current={current} />
          <div className="content">
            {data.map((item, id) => (
              <Contents current={current} item={item} id={id} key={id} />
            ))}
          </div>
        </div>
      </div>
      <Section4 />
      <Section9 />
      <Footer />
    </>
  );
}
