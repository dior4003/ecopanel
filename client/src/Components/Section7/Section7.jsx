import React from "react";
import { Link } from "react-router-dom";

export default function Section7() {
  const data = [
    {
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/11/team-7.jpg",
      name: "Bessie Cooper",
      job: "Truck driver",
      f: "#",
      t: "#",
      l: "#",
    },
    {
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/11/team-5.jpg",
      name: "Cody Fisher",
      job: "Procurement manager",
      f: "#",
      t: "#",
      l: "#",
    },
    {
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/11/team-6.jpg",
      name: "Floyd Miles",
      job: "Procurement manager",
      f: "#",
      t: "#",
      l: "#",
    },
    {
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/11/team-2.jpg",
      name: "Eleanor Pena",
      job: "Warehouse managerr",
      f: "#",
      t: "#",
      l: "#",
    },
    {
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/11/team-8.jpg",
      name: "Dianne Russell",
      job: "Marketing manager",
      f: "#",
      t: "#",
      l: "#",
    },
    {
      img: "https://demo.ovatheme.com/transflash/wp-content/uploads/2021/11/team-7.jpg",
      name: "Bessie Cooper",
      job: "Truck driver",
      f: "#",
      t: "#",
      l: "#",
    },
  ];
  return (
    <section className="section_7">
      <section class="services">
        <div class="services__container container">
          <div class="services__top">
            <h2 class="services__title">
              We provide services
              <br />
              you can rely on{" "}
            </h2>
            <div class="services__descr">
              We enjoy great partnership with our partners and companies choose
              Amir Logistics for dependability, professionalism and exceptional
              customer experience.{" "}
            </div>
          </div>

          <div class="services__diagram services-diagram">
            <div class="services-diagram__years">
              <div class="services-diagram__year">2016 </div>
              <div class="services-diagram__year">2022 </div>
            </div>

            <div class="services-diagram__body">
              <div class="services-diagram__line _active">
                <div class="services-diagram__line-circle services-diagram__line-circle_start"></div>
                <div class="services-diagram__line-body"></div>
                <div class="services-diagram__line-circle services-diagram__line-circle_end"></div>
              </div>

              <div class="services-diagram__info">
                <h2 class="services-diagram__title">
                  <span class="services-diagram__number" data-count="36000">
                    36&nbsp;000
                  </span>
                  +
                </h2>
                <div class="services-diagram__descr">
                  delivered loads per year{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="partners">
        <div class="partners__container container">
          <div class="partners__content">
            <div class="partners__top">
              <h2 class="partners__title">Our partners </h2>
              <div class="partners__descr">
                Our customers continue to grow with us and prefer to work <br />
                with our company because we are safe, innovative and reliable.
                Together, we will move the country forward.{" "}
              </div>
            </div>

            <div class="partners__total">
              <h2 class="partners__total-title">
                <span class="partners__total-number" data-count="4000">
                  4&nbsp;000
                </span>
                +
              </h2>
              <div class="partners__total-descr">happy customers </div>
            </div>

            <ul class="partners__items">
              <li class="partners-item">
                <a
                  class="partners-item__link"
                  href="https://logistics.amazon.com"
                >
                  <img
                    src="https://www.stltruckers.com/assets/thumbs/resize/88x63/bfd60cf4b198c93eb09cb77f3b3dc7b7.png"
                    alt=""
                  />
                </a>
              </li>
              <li class="partners-item">
                <a
                  class="partners-item__link"
                  href="https://www.fedex.com/en-us/home.html"
                >
                  <img
                    src="https://www.stltruckers.com/assets/thumbs/resize/88x63/edc14de36c14f958f8787fe43dd3a248.png"
                    alt=""
                  />
                </a>
              </li>
              <li class="partners-item">
                <a class="partners-item__link" href="https://www.target.com">
                  <img
                    src="https://www.stltruckers.com/assets/thumbs/resize/88x63/0d81e7f3c1b5e38b622ace15092701d9.png"
                    alt=""
                  />
                </a>
              </li>
              <li class="partners-item">
                <a class="partners-item__link" href="https://www.walmart.com">
                  <img
                    src="https://www.stltruckers.com/assets/thumbs/resize/88x63/1048a22c037eb3aa797fdb1938ca3c4c.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="partners__video">
          <div class="partners__video-body">
            <video
              preload="metadata"
              src="https://www.stltruckers.com/uploads/media/video/lanes-compressed.mp4"
              autoPlay={true}
              muted
              loop
            ></video>
          </div>
        </div>
      </section>
    </section>
  );
}
