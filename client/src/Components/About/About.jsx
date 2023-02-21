import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header";
import bg from "../../images/bg-footer.jpg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import Contact from "../Contact";
export default function About() {
  return (
    <section className="about">
      <Header about={true} />
      <Parallax
        style={{ width: "100%" }}
        bgImageSize={{ width: "100%" }}
        bgImage={bg}
        strength={400}
      >
        <div className="about_header">
          <h1 className="title">О нас</h1>
          <p className="links">
            <Link to="/"> Главная/</Link>
            <span>О нас</span>
          </p>
        </div>
      </Parallax>
      <div className="container-fluit">
        <div className="container_70">
          <div className="info_box">
            <h1 className="info_title">
              СТЕНОВЫЕ СЭНДВИЧ ПАНЕЛИ И КРОВЕЛЬНЫЕ СЭНДВИЧ ПАНЕЛИ КУПИТЬ У
              ECOPANELTECH ПО САМОЙ ДОСТУПНОЙ ЦЕНЕ!
            </h1>
            <p className="title1">
              Мы – Eco Panel Tech являемся одними из лучших производителей
              сэндвич панелей в Узбекистане. На основе наших сэндвичных панелей
              построилось и строится большое количество объектов и сооружений.
              Наш завод находится в г. Ташкенте, а наша профессиональная команда
              высококвалифицированных специалистов сообща следят за строгим
              контролем безопасности и качества наших изделий. Вся наша
              продукция отвечает всем полагающимся нормам, а ставку мы делаем на
              очень высокое качество наших товаров. К каждому клиенту мы находим
              индивидуальный подход, за счет чего клиенты Eco Panel Tech всегда
              остаются довольны, как высококачественной, надежной и долговечной
              продукцией, так и сотрудничеством с нами, становясь нашими
              постоянными клиентами. Наш вежливый персонал всегда готов
              выслушать каждого клиента и ответить на все его вопросы. Благодаря
              всему этому мы смогли прочно расположиться и зарекомендовать себя
              на рынке продукции сендвич панелей от производителя.
            </p>
          </div>
          <div className="progress_box">
            <div className="progres_item">
              <div className="progress">
                <div style={{ width: "85%" }} className="shape"></div>
              </div>
              <p className="title">Общее строительство</p>
            </div>
            <div className="progres_item">
              <div className="progress">
                <div style={{ width: "80%" }} className="shape"></div>
              </div>
              <p className="title">Общее строительство</p>
            </div>
            <div className="progres_item">
              <div className="progress">
                <div style={{ width: "75%" }} className="shape"></div>
              </div>
              <p className="title">Общее строительство</p>
            </div>
            <div className="progres_item">
              <div className="progress">
                <div style={{ width: "70%" }} className="shape"></div>
              </div>
              <p className="title">Общее строительство</p>
            </div>
            <div className="progres_item">
              <div className="progress">
                <div style={{ width: "75%" }} className="shape"></div>
              </div>
              <p className="title">Общее строительство</p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </section>
  );
}
