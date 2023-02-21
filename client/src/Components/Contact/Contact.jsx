import React, { useState } from "react";

export default function Contact() {
      const [data, setData] = useState({
        name: "",
        phone: "",
        msg: "",
      });

      function hendleSubmit(e) {
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
          method: "post",
          headers: myHeaders,
        };
        let uri = `https://api.telegram.org/bot6235324858:AAFXriv9I_13Tx23_8BwT5lYRXIN4exBAeg/sendMessage?chat_id=-866225933&parse_mode=HTML&text= `;
        const param = `<b>Name:</b>${data.name} %0A<b>Phone:</b>${data.phone}%0A<b>Message:</b>${data.msg}%0A;`;
        fetch(`${uri}${param}`, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            setData({ name: "", phone: "", msg: "" });
            console.log(result);
          })
          .catch((error) => console.log("error", error));
      }
  return (
    <div className="contact">
      <div className="container_70">
        <div className="contact_info">
          <h1 className="title1">СВЯЗАТЬСЯ С НАМИ</h1>
          <p className="title2">
            Вы можете связаться с нами по телефону, сообщению или посетить нас с
            понедельника по пятницу. С 8:00 до 18:00
          </p>
          <div className="links">
            <ul className="foo_link info">
              <li className="link_item">
                <i className="fa-solid fa-location-dot"></i>
                <a
                  href="https://goo.gl/maps/uodqFqtwLQcG48at5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Город Ташкент, Сергелийский район, улица Чоштепа
                </a>
              </li>
              <li className="link_item">
                <i className="fa-solid fa-phone"></i>

                <a href="tel:+998974543030">+998974543030</a>
              </li>
              <li className="link_item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+998339091111"> +998339091111</a>
              </li>
              <li className="link_item">
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto:info@ecopaneltech.uz">info@ecopaneltech.uz</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="forms">
          <h1 className="title1">ОТПРАВИТЬ НАМ СООБЩЕНИЕ</h1>
          <p className="title2">
            Присылайте нам свои вопросы или отзывы о наших услугах или о вашем
            плане, наш консультант решит проблему. Мы с нетерпением ждем ваших
            идей!
          </p>
          <form method="post" onSubmit={hendleSubmit}>
            <div className="ova-ctfrom7">
              <div className="form-contact-us">
                <div className="name-info ova_wrap_input">
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="fullname"
                  >
                    <input
                      type="text"
                      className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                      placeholder="Имя фамилия"
                      required={true}
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                    />
                  </span>
                </div>
                <div className="phone ova_wrap_input">
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="your-phone"
                  >
                    <input
                      type="tel"
                      value={data.phone}
                      required={true}
                      className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                      placeholder="Номер телефона"
                      onChange={(e) =>
                        setData({ ...data, phone: e.target.value })
                      }
                    />
                  </span>
                </div>

                <div className="message ova_wrap_input">
                  <span
                    className="wpcf7-form-control-wrap"
                    data-name="write-message"
                  >
                    <textarea
                      cols="40"
                      rows="10"
                      className="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required"
                      placeholder="Сообщение"
                      required={true}
                      value={data.msg}
                      onChange={(e) =>
                        setData({ ...data, msg: e.target.value })
                      }
                    ></textarea>
                  </span>
                </div>
                <div className="ova-submit">
                  <input
                    type="submit"
                    value="Send message"
                    className="wpcf7-form-control has-spinner wpcf7-submit"
                  />
                  <span className="wpcf7-spinner"></span>
                </div>
              </div>
            </div>
            <div className="wpcf7-response-output" aria-hidden="true"></div>
          </form>
        </div>
      </div>
    </div>
  );
}
