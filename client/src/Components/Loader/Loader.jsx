import React, { useEffect, useState } from "react";
import "./loader.css";

export default function Loader(props) {
  const [counter, setCounter] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCounter(true);
    }, 3500);
  }, []);
  return (
    <div className={`body ${counter}`}>
      <div class="loader">
        <span>
          <img src="https://www.seekpng.com/png/full/828-8282035_delivery-truck-delivery-van-icon.png" />
        </span>
        <span>
          <img src="https://www.seekpng.com/png/full/828-8282035_delivery-truck-delivery-van-icon.png" />
        </span>
        <span>
          <img src="https://www.seekpng.com/png/full/828-8282035_delivery-truck-delivery-van-icon.png" />
        </span>
      </div>
    </div>
  );
}
