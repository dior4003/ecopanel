import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../Footer";
import Header from "../Header";
import Loader from "../Loader";

export default function Quote({ link }) {
  const [data, setData] = useState({
    name: "",
    dob: "",
    snn: "",
    adress: "",
    city: "",
    state: "",
    zip: "",
    lisence: "",
    expires: "",
    ex_state: "",
    num: "",
    phone: "",
    email: "",
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
    axios
      .post(
        "https://api.telegram.org/bot5942901638:AAGM0Q-gGaf30eP4vfON_u7CUt96cvKf_XQ/sendMessage",
        {
          chat_id: -864366784,
          parse_mode: "HTML",
          text: `#Quote\n<b>Name:</b>${data.name} %0A<b>Phone:</b>${data.phone}%0A<b>Email:</b>${data.email} %0A<b>Message:</b>%0A;`,
        }
      )
      .then(function (response) {
        setData({
          name: "",
          dob: "",
          snn: "",
          adress: "",
          city: "",
          state: "",
          zip: "",
          lisence: "",
          expires: "",
          ex_state: "",
          num: "",
          phone: "",
          email: "",
        });
        notify(true);
        console.log(response);
      })
      .catch(function (error) {
        console.log("error", error);
        notify(false);
      });
  }
  return (
      <>
          <Loader/>
      <Header quote={link} />
      <div className="about__">
        <div className="container_70">
          <h1 className="title">Get a quote</h1>
          <p className="link">
            <Link to="/">Home</Link>
            {">"}
            <span>Get a quote</span>
          </p>
        </div>
      </div>

      <div className="quotes">
        <div className="container_70">
          <form method="post" onSubmit={(e) => hendleSubmit(e)}>
            <h1 className="title">New Hire Employee Information</h1>
            <div className="name">
              <div className="input_name">
                <p>1. DRIVER'S NAME:</p>
                <input
                  className="int_name"
                  type="text"
                  placeholder="Your name"
                  value={data.name}
                  onChange={(e) =>
                    setData({
                      ...data,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="input_name2">
                <div className="dob">
                  <p> DOB:</p>
                  <input
                    className="int_name"
                    type="text"
                    placeholder="DOB"
                    value={data.dob}
                    onChange={(e) =>
                      setData({
                        ...data,
                        dob: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="dob">
                  <p> SSN:</p>
                  <input
                    className="int_name"
                    type="text"
                    placeholder="SNN"
                    value={data.snn}
                    onChange={(e) =>
                      setData({
                        ...data,
                        snn: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="name">
              <div className="input_name">
                <p>2. DRIVER'S ADDRESS:</p>
                <input
                  className="int_name"
                  type="text"
                  placeholder="Your adress"
                  value={data.adress}
                  onChange={(e) =>
                    setData({
                      ...data,
                      adress: e.target.value,
                    })
                  }
                />
              </div>
              <div className="input_name2">
                <div className="dob">
                  <p> CITY:</p>
                  <input
                    className="int_name"
                    type="text"
                    placeholder="City"
                    value={data.city}
                    onChange={(e) =>
                      setData({
                        ...data,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="dob">
                  <p> STATE:</p>
                  <input
                    className="int_name"
                    type="text"
                    placeholder="State"
                    value={data.state}
                    onChange={(e) =>
                      setData({
                        ...data,
                        state: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="dob">
                  <p> ZIP:</p>
                  <input
                    className="int_name"
                    type="text"
                    placeholder="ZIP code"
                    value={data.zip}
                    onChange={(e) =>
                      setData({
                        ...data,
                        zip: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="name">
              <div className="input_name">
                <p>3. COMMERCIAL DRIVER LICENSE:</p>
                <input
                  className="int_name"
                  type="text"
                  placeholder="Your license"
                  value={data.lisence}
                  onChange={(e) =>
                    setData({
                      ...data,
                      lisence: e.target.value,
                    })
                  }
                />
              </div>
              <div className="input_name2">
                <div className="dob">
                  <p> EXPIRES:</p>
                  <input
                    className="int_name"
                    type="text"
                    placeholder="Expires year"
                    value={data.expires}
                    onChange={(e) =>
                      setData({
                        ...data,
                        expires: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="dob">
                  <p> STATE:</p>
                  <input
                    className="int_name"
                    type="text"
                    placeholder="Expires state"
                    value={data.ex_state}
                    onChange={(e) =>
                      setData({
                        ...data,
                        ex_state: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="dob">
                  <p> NUMBER:</p>
                  <input
                    className="int_name"
                    type="text"
                    placeholder="number"
                    value={data.num}
                    onChange={(e) =>
                      setData({
                        ...data,
                        num: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="name">
              <div className="input_name">
                <p>@EMAIL:</p>
                <input
                  className="int_name"
                  type="text"
                  placeholder="Your email"
                  value={data.email}
                  onChange={(e) =>
                    setData({
                      ...data,
                      email: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="name">
              <div className="input_name">
                <p>#PHONE:</p>
                <input
                  className="int_name"
                  type="text"
                  placeholder="Your phone"
                  value={data.phone}
                  onChange={(e) =>
                    setData({
                      ...data,
                      phone: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="submits">
              <input className="sub" type="submit" value="Get a quote" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
