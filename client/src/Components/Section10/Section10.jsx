import React from "react";

export default function Section10() {
  return (
    <section className="section_10">
      <div className="header">
        <h1 className="title">Our location</h1>
      </div>
      <div className="img">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2177.371448481177!2d-76.320123250037!3d39.48585738609119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7e777c1d465e9%3A0x1ed82261b730ab81!2s138%20Laurel%20Woods%20Ct%2C%20Abingdon%2C%20MD%2021009%2C%20Amerika%20Qo%E2%80%98shma%20Shtatlari!5e0!3m2!1suz!2s!4v1675131025079!5m2!1suz!2s"
          allowFullScreen={true}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
