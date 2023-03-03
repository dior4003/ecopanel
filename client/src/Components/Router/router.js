import { Route, Routes } from "react-router-dom";
import React from "react";
import Main from "../Main/Main";
import Services from "../Services";
import About from "../About";
import Contact from "../Contact";
import Quote from "../Quote";
export default function RouterApps() {
  const data = [
    {
      path: "/",
      element: <Main link={true} />,
      exact: true,
    },
    {
      path: "/services",
      element: <Services link={true} />,
      exact: true,
    },
    {
      path: "/about",
      element: <About link={true} />,
      exact: true,
    },
    {
      path: "/contact",
      element: <Contact link={true} />,
      exact: true,
    },
    {
      path: "/quote",
      element: <Quote link={true} />,
      exact: true,
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
