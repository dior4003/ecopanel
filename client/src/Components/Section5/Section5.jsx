import React from "react";
import { Parallax } from "react-parallax";
import useCounter from "../Hooks/UseCounter";

export default function Section5() {
  const count = useCounter(2000);
  const data = [
    {
      num: 9,
      title: "Видов продукции",
    },
    {
      num: 100,
      title: "Гарантируем качество",
    },
    {
      num: 5,
      title: "лет на рынке",
    },
    {
      num: 1523,
      title: "довольных клиентов",
    },
  ];
  return (
    <section className="section5">
        <Parallax
          bgImageSize={{ width: "100%" }}
          bgImage="https://demo.farost.net/karion/wp-content/uploads/2017/10/bg-section-wholove.png"
          strength={400}
        >
          <div className="content">
            <div className="container_70">
              <h2 className="title_1">
                СТЕНОВЫЕ СЭНДВИЧ ПАНЕЛИ ОТ ECO PANEL TECH - ЦЕНА НИЖЕ, КАЧЕСТВО
                ВЫШЕ!
              </h2>
              <p className="title_2">
                На сегодняшний день, наши сендвич панели для стен являются очень
                популярными. С помощью них можно быстро построить все что
                угодно. Сэндвич панели в Узбекистане используются в частном
                домостроении, при постройке, как одноэтажных, так и многоэтажных
                домов. Более того, кроме быстроты постройки здания и легкости
                конструкции, стоимость сэндвич панелей является очень
                оптимальной и не высокой. При желании панели сэндвич можно легко
                модернизировать. Поэтому вы можете с уверенностью заказать
                сэндвич панели от Eco Panel Tech и наслаждаться его качеством.
              </p>
              <div className="counter_box">
                {data.map((item, i) => (
                  <div className="counter_item" key={i}>
                    <span className="item_num">
                      {count > item.num ? item.num : count}
                    </span>
                    <span className="item_title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Parallax>
    </section>
  );
}
