import React, { useRef, useState } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import vid from "../../img/video1.MP4";
import vid2 from "../../img/video2.MP4";
import vid3 from "../../img/video3.MP4";

const Item = (props) => {
  const className = "item level" + props.level;
  const videoEl = useRef(null);

  const handleLoadedMetadata = () => {
    const video = videoEl.current;
    if (!video) return;
    console.log(`The video is ${video.duration} seconds long.`);
  };
  return (
    <div className={className}>
      {props.level === 0 ? (
        <video
          src={props.vid}
          controls={props.level === 0 ? true : false}
          autoPlay={props.level === 0 ? true : false}
          loop={props.level === 0 ? true : false}
          muted
          ref={videoEl}
          onLoadedMetadata={handleLoadedMetadata}
        ></video>
      ) : (
        <img src={props.img} alt="" />
      )}
    </div>
  );
};

export default function Corusel() {
  const [active, setActive] = useState(1);
  const [item, setItem] = useState([
    {
      vid: vid,
      img: "https://www.stltruckers.com/assets/thumbs/webp/a48c2bd628d9e74ea5d146ad0baee742.webp",
    },
    {
      vid: vid2,
      img: "https://www.stltruckers.com/assets/thumbs/crop/544x544/d1e2da376b54161e67342411fd59249e.webp",
    },
    {
      vid: vid3,
      img: "https://www.stltruckers.com/assets/thumbs/crop/832x468/633ee217183ed02d053a73afda81b691.webp",
    },
  ]);
  const [items, setItems] = useState(item);
  const [direction, setDirection] = useState("");
  function generateItems() {
    var items = [];
    var level;
    for (var i = active - 1; i < active + 2; i++) {
      var index = i;
      if (i < 0) {
        index = item.length + i;
      } else if (i >= item.length) {
        index = i % item.length;
      }

      level = active - i;
      items.push(
        <Item
          key={index}
          id={item[index]}
          level={level}
          vid={item[index].vid}
          active={active}
          img={item[index].img}
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
