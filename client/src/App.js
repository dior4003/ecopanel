import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Components/Router/router";
import "./scss/main.css";
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
