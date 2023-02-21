import React from "react";
import "../../images/style.css"
export default function Hero() {

  return (
    <section className="hero ">
      <div className="sliders">
        <div className="cont">
          <div className="slider">
            <div data-target="1" className="slide slide--1" style={{left:"0%"}}>
              <div className="slide__darkbg slide--1__darkbg"></div>
              <div className="slide__text-wrapper slide--1__text-wrapper">
                <div
                  className="slide__letter slide--1__letter"
                  style={{animation: "3s ease 0s 1 normal forwards running animtxt"}}
                >
                  ⚫️
                </div>
                <div className="slide__text slide__text--1">
                  Стеновые сэндвич панели из стекловаты
                </div>
                <div className="slide__title slide__title--1">
                  Ecopaneltech – ведущий производитель стеновых сэндвич-панелей
                  из пенополиизоцианурата. Материал для изготовления панелей из
                  стали импортируется из России, Китая и Казахстана
                </div>
              </div>
            </div>
            <div data-target="2" className="slide slide--2" style={{ left: "100%" }}>
              <div className="slide__darkbg slide--2__darkbg"></div>
              <div className="slide__text-wrapper slide--2__text-wrapper">
                <div className="slide__letter slide--2__letter">⚫️</div>
                <div className="slide__text slide__text--2">
                  Стеновые панели с пенопластом
                </div>
                <div className="slide__title slide__title--2">
                  Ecopaneltech поставляет энергоэффективные и экономичные
                  изолированные металлические стеновые сэндвич панели с
                  пенопластом, на которые вы можете положиться при реализации
                  своего строительного проекта.
                </div>
              </div>
            </div>
            <div data-target="3" className="slide slide--3" style={{left:"200%"}}>
              <div className="slide__darkbg slide--3__darkbg"></div>
              <div className="slide__text-wrapper slide--3__text-wrapper">
                <div className="slide__letter slide--3__letter">⚫️</div>
                <div className="slide__text slide__text--3">
                  Кровельные панели с пенопластом
                </div>
                <div className="slide__title slide__title--3">
                  По запросу компания Ecopaneltech может предложить вам полный
                  ассортимент утепленных кровельных панелей. Это соответствует
                  вашей длине, толщине и большинству цветов.
                </div>
              </div>
            </div>
            <div data-target="4" className="slide slide--4" style={{ left: "300%" }}>
              <div className="slide__darkbg slide--4__darkbg"></div>
              <div className="slide__text-wrapper slide--4__text-wrapper">
                <div className="slide__letter slide--4__letter">⚫️</div>
                <div className="slide__text slide__text--4">
                  Стеновые сэндвич панели из стекловаты
                </div>
                <div className="slide__title slide__title--4">
                  Ecopaneltech – ведущий производитель стеновых сэндвич-панелей
                  из пенополиизоцианурата. Материал для изготовления панелей из
                  стали импортируется из России, Китая и Казахстана
                </div>
              </div>
            </div>
            <div data-target="5" className="slide slide--5" style={{ left: "400%" }}>
              <div className="slide__darkbg slide--5__darkbg"></div>
              <div className="slide__text-wrapper slide--5__text-wrapper">
                <div className="slide__letter slide--5__letter">⚫️</div>
                <div className="slide__text slide__text--5">
                  Стеновые сэндвич панели из минеральной ваты
                </div>
                <div className="slide__title slide__title--5">
                  Стеновые сэндвич-панели с утеплением компании Ecopaneltech
                  служат долго и эффективно противостоят любому шуму и
                  температуре.
                </div>
              </div>
            </div>
            <div data-target="6" className="slide slide--6" style={{ left: "500%" }}>
              <div className="slide__darkbg slide--6__darkbg"></div>
              <div className="slide__text-wrapper slide--6__text-wrapper">
                <div className="slide__letter slide--6__letter">⚫️</div>
                <div className="slide__text slide__text--6">
                  Кровельные сэндвич панели из стекловаты
                </div>
                <div className="slide__title slide__title--6">
                  Сэндвич-панели для крыши со стекловолокном – лучший способ
                  изолировать вашу крышу. Компания Ecopaneltech предлагает
                  высококачественные долговечные сэндвич-панели для вашей
                  кровли.
                </div>
              </div>
            </div>
          </div>
          <ul className="nav">
            <li
              data-target="1"
              className="nav__slide nav__slide--1 nav-active"
            ></li>
            <li data-target="2" className="nav__slide nav__slide--2"></li>
            <li data-target="3" className="nav__slide nav__slide--3"></li>
            <li data-target="4" className="nav__slide nav__slide--4"></li>
            <li data-target="5" className="nav__slide nav__slide--5"></li>
            <li data-target="6" className="nav__slide nav__slide--6"></li>
          </ul>
          <div data-target="right" className="side-nav side-nav--right"></div>
          <div data-target="left" className="side-nav side-nav--left"></div>
        </div>
      </div>
    </section>
  );
}
