import { Route, Routes } from "react-router-dom";
import About from "../About/About";
import Contacts from "../Cantacts";
import Main from "../Main/Main";
import News from "../News";
import Product from "../Product";

export default function Router() {
  const data = [
    {
      path: "/",
      element: <Main />,
      exact: false,
    },
    {
      path: "/product",
      element: <Product />,
      exact: false,
    },
    {
      path: "/about",
      element: <About />,
      exact: false,
    },
    {
      path: "/contact",
      element: <Contacts />,
      exact: false,
    },
    {
      path: "/news",
      element: <News />,
      exact: false,
    },
  ];
  return (
    <Routes>
      {data.map((item) => (
        <Route
          key={item}
          path={item.path}
          element={item.element}
          exact={item.exact}
        ></Route>
      ))}
    </Routes>
  );
}
