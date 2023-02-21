import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/news1.jpg";
import img2 from "../../images/news2.jpg";
import img3 from "../../images/news3.jpg";
export default function Section6() {
  const data = [
    {
      img: img1,
      data: "05 ноябрь 2018",
      comment: " 03 Комментарии",
      title: "Наш завод расположен в Ташкенте",
      text: `Наш завод расположен в Ташкенте. Мы поводим строгий контроль
                качества. Продукция, которая поставляется нашим клиентам,
                соответствует самым жестким требованиям, предъявляемым к
                современным теплоизоляционным строительным материалам. Система
                Управления Качеством дает потребителям нашей продукции гарантию
                стабильности качества в течение всего времени ее выпуска.`,
      link: "",
    },
    {
      img: img2,
      link: "",
      data: "17 январь 2020",
      comment: " 08 Комментарии",
      title: "В нашей команде работают только профессионалы",
      text: `В нашей команде работают только профессионалы, с соответствующим образованием и достойным опытом работы. Мы внимательно относимся к приобретению металла, утеплителей, клея и оборудования для изготовления сэндвич-панелей. Мы знаем, каким должен быть данный материал и внимательно проверяем, соответствует ли сэндвич-панель заявленным характеристикам, и только в случае полного соответствия и осуществления выходного контроля товар отгружается заказчику.`,
    },
    {
      img: img3,
      data: "06 апрель 2020",
      link: "",
      comment: " 03 Комментарии",
      title: "Отличительной особенностью",
      text: `Отличительной особенностью сэндвич-панелей является наличие специального замкового соединения по торцам панелей, которое обеспечивает надежное сцепление элементов конструкции, предотвращает возможность попадания влаги в слой утеплителя. Именно данное замковое соединение, прочное и герметичное, во многом обуславливает простоту и легкость монтажа сэндвич-панелей на любых объектах, даже при неблагоприятных погодных условиях.`,
    },
  ];
  return (
    <section className="section6">
      <div className="container_70">
        <h1 className="title">КОНТРОЛЬ КАЧЕСТВА</h1>
        <div className="news">
          {data.map((item, i) => (
            <Link to={item.link} key={i}>
              <div className="news_item">
                <div className="news_img">
                  <img src={item.img} alt="Ecopaneltech.uz news " />
                  <div className="news_data">
                    <div className="data">
                      <i className="fa-solid fa-calendar-days"></i>
                      <span className="data">{item.data}</span>
                    </div>
                    <div className="data">
                      <i className="fa-solid fa-comments"></i>
                      <span className="data">{item.comment}</span>
                    </div>
                  </div>
                </div>
                <div className="shape"></div>
                <div className="news_title">{item.title}</div>
                <p className="news_text">{item.text.slice(0, 50)}...</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
