import "./scss/main.css";
import "./css/nMeGrw4FFPbz.css";
import "./css/gVzXuH7GRkRc.css";
import RouterApps from "./Components/Router/router";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
function App() {
  return (
    <BrowserRouter>
      <Loader />
      <RouterApps />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <a href="tel:+(410) 801-9955" className="call">
        <div className="call-btn">
          <div className="pulse">
            <div className="cursor"></div>
            <div className="phone">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </div>
            <div className="text">Заказать звонок</div>
          </div>
        </div>
      </a>
    </BrowserRouter>
  );
}

export default App;
