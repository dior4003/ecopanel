import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Components/Router/router";
import "./scss/main.css";
function App() {
  return (
    <BrowserRouter>
      <Router />
      <a href="tel:+998339091111" className="call">
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
