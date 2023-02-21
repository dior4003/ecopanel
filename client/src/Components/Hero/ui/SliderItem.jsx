import React from "react";

export default function SliderItem({ item, a }) {
  const ss = "hello".split("");
  return (
    <div
      className="sliders_item"
    >
      <div
        className={`img0`}
        style={{
          background: `url(${item})`,
          backgroundSize: "100% 100%",
        }}
      ></div>
      <div
        className={`img-a0`}
        style={{
          background: `url(${item})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div style={{ display: "flex" }}>
          {ss.map((ele) => (
            <h1>{ele}</h1>
          ))}
        </div>
      </div>
    </div>
  );
}
