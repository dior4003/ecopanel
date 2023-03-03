import React, { useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Item = (props) => {
  const className = "item level" + props.level;
  console.log(props.level);
  return (
    <div className={className}>
      <video
        src={props.img}
        controls={props.level === 0 ? true : false}
        autoPlay={props.level === 0 ? true : false}
        loop={props.level === 0 ? true : false}
        muted
      ></video>
    </div>
  );
};

export default function Corusel({ actives, item = [] }) {
  const [active, setActive] = useState(actives);
  const [items, setItems] = useState(item);
  const [direction, setDirection] = useState("");
  function generateItems() {
    var items = [];
    var level;
    for (var i = active - 2; i < active + 3; i++) {
      var index = i;
      if (i < 0) {
          index = item.length + i;
          console.log(index);
      } else if (i >= item.length) {
          index = i % item.length;
          console.log(index);
      }
      
      level = active - i;
      items.push(
        <Item
          key={index}
          id={item[index]}
          level={level}
          img={item[index].img}
          active={active}
        />
      );
    }
    return items;
  }
  function moveLeft() {
    var newActive = active;
    newActive--;
    setActive(newActive < 0 ? items.length - 1 : newActive);
    setDirection("left");
  }

  function moveRight() {
    var newActive = active;
    setActive((newActive + 1) % items.length);
    setDirection("right");
  }
  return (
    <div className="section6">
      <h1 className="title"></h1>
      <div id="carousel" className="noselect">
        <div className="arrow arrow-left" onClick={moveLeft}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <ReactCSSTransitionGroup transitionName={direction}>
          {generateItems()}
        </ReactCSSTransitionGroup>
        <div className="arrow arrow-right" onClick={moveRight}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}
