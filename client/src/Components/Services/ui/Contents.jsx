import React from "react";

export default function Contents(props) {
  const { current, item, id } = props;
  return (
    <>
      {current === id ? (
        <div className="content__">
          <div className="decr">
            <p className="p_decr">{item.decr1}</p>
          </div>
          <img src={item.img1} alt="" className="content_img" />
          <p className="p_decr">{item.decr2}</p>
          <h2 className="title">{item.title1}</h2>
          <p className="p_decr">{item.decr3}</p>
          <img src={item.img} alt="" className="content_img" />
          <p className="p_decr">{item.decr4}</p>
        </div>
      ) : null}
    </>
  );
}
