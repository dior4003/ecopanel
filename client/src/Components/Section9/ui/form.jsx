import React, { useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    msg: "",
  });
  const notify = (event) => {
    if (event) {
      toast.success("Massage send", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  function hendleSubmit(e) {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: "post",
      headers: myHeaders,
    };
    let uri = `https://api.telegram.org/bot5942901638:AAGM0Q-gGaf30eP4vfON_u7CUt96cvKf_XQ/sendMessage?chat_id=-864366784&parse_mode=HTML&text= `;
    const param = `<b>Name:</b>${data.name} %0A<b>Phone:</b>${data.phone}%0A<b>Email:</b>${data.email} %0A<b>Message:</b>${data.msg}%0A;`;
    fetch(`${uri}${param}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setData({ name: "", phone: "", email: "", msg: "" });
        notify(true);
        console.log(result);
      })
      .catch((error) => {
        console.log("error", error);
        notify(false);
      });
  }

  return (
    <>
      <form method="post" onSubmit={hendleSubmit}>
        <div className="ova-ctfrom7">
          <div className="form-contact-us">
            <div className="contact-heading">
              <i className="flaticon-send"></i>
              <span>Send us message</span>
            </div>
            <div className="name-info ova_wrap_input">
              <span className="wpcf7-form-control-wrap" data-name="fullname">
                <input
                  type="text"
                  className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                  placeholder="Full name"
                  required={true}
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
              </span>
            </div>
            <div className="phone ova_wrap_input">
              <span className="wpcf7-form-control-wrap" data-name="your-phone">
                <input
                  type="tel"
                  value={data.phone}
                  required={true}
                  className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel"
                  placeholder="Phone number"
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
              </span>
            </div>
            <div className="email ova_wrap_input">
              <span className="wpcf7-form-control-wrap" data-name="your-email">
                <input
                  type="email"
                  value={data.email}
                  required={true}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                  placeholder="Email adress"
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
                  placeholder="Message"
                  required={true}
                  value={data.msg}
                  onChange={(e) => setData({ ...data, msg: e.target.value })}
                ></textarea>
              </span>
            </div>
            <div className="ova-submit">
              <i className="flaticon-send-message"></i>
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
    </>
  );
}
