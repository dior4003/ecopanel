$(document).ready(function () {
  const $cont = $(".cont");
  const $slider = $(".slider");
  const $nav = $(".nav");
  const winW = $(window).width();
  const animSpd = 750; // Change also in CSS
  const distOfLetGo = winW * 0.2;
  let curSlide = 1;
  let animation = false;
  let autoScrollVar = true;
  let diff = 0;

  // Generating slides
  let arrCities = [
    {
      title: "Стеновые   сэндвич   панели  из  стекловаты",
      icon: "⚫️",
      text: "Ecopaneltech – ведущий производитель стеновых сэндвич-панелей из пенополиизоцианурата. Материал для изготовления панелей из стали импортируется из России, Китая и Казахстана",
    },
    {
      title: "Стеновые панели с пенопластом",
      icon: "⚫️",
      text: "Ecopaneltech поставляет энергоэффективные и экономичные изолированные металлические стеновые сэндвич панели с пенопластом, на которые вы можете положиться при реализации своего строительного проекта.",
    },
    {
      title: "Кровельные панели с пенопластом",
      icon: "⚫️",
      text: "По запросу компания Ecopaneltech может предложить вам полный ассортимент утепленных кровельных панелей. Это соответствует вашей длине, толщине и большинству цветов.",
    },
    {
      title: "Стеновые   сэндвич   панели  из  стекловаты",
      icon: "⚫️",
      text: "Ecopaneltech – ведущий производитель стеновых сэндвич-панелей из пенополиизоцианурата. Материал для изготовления панелей из стали импортируется из России, Китая и Казахстана",
    },
    {
      title: "Стеновые сэндвич панели из минеральной ваты",
      icon: "⚫️",
      text: "Стеновые сэндвич-панели с утеплением компании Ecopaneltech служат долго и эффективно противостоят любому шуму и температуре.",
    },
    {
      title: "Кровельные сэндвич панели из стекловаты",
      icon: "⚫️",
      text: "Сэндвич-панели для крыши со стекловолокном – лучший способ изолировать вашу крышу. Компания Ecopaneltech предлагает высококачественные долговечные сэндвич-панели для вашей кровли.",
    },
  ]; // Change number of slides in CSS also
  let numOfCities = arrCities.length;
  let arrCitiesDivided = [];

  arrCities.map((city) => {
    let length = city.length;
    let letters = Math.floor(1);
    let exp = new RegExp(".{1," + letters + "}", "g");

    arrCitiesDivided.push(city.title.match(exp));
  });

  $(".nav__slide--1").addClass("nav-active");

  // Navigation
  function bullets(dir) {
    $(".nav__slide--" + curSlide).removeClass("nav-active");
    $(".nav__slide--" + dir).addClass("nav-active");
  }

  function timeout() {
    animation = false;
  }

  function pagination(direction) {
    animation = true;
    diff = 0;
    $slider.addClass("animation");
    $slider.css({
      transform: "translate3d(-" + (curSlide - direction) * 100 + "%, 0, 0)",
    });

    $slider.find(".slide__darkbg").css({
      transform: "translate3d(" + (curSlide - direction) * 50 + "%, 0, 0)",
    });

    $slider.find(".slide__letter").css({
      transform: "translate3d(0, 0, 0)",
    });

    $slider.find(".slide__text").css({
      transform: "translate3d(0, 0, 0)",
    });
  }
  setInterval(() => {
    $slider.find(`.slide--${curSlide}__letter`).css({
      animation: "animtxt 3s forwards",
    });

    // console.log(curSlide);
    // console.log(curSlide);
    setTimeout(() => {
      $slider.find(`.slide--${curSlide + 1}__letter`).css({
        animation: "",
      });
      $slider.find(`.slide--${curSlide - 1}__letter`).css({
        animation: "",
      });
    }, 2000);
  }, 1000);
  // setTimeout(() => {
  //   window.location = "tel:122235";
  // }, 10000);
  function navigateRight() {
    if (!autoScrollVar) return;
    if (curSlide >= numOfCities) return;
    pagination(0);
    setTimeout(timeout, animSpd);
    bullets(curSlide + 1);
    curSlide++;
  }

  function navigateLeft() {
    if (curSlide <= 1) return;
    pagination(2);
    setTimeout(timeout, animSpd);
    bullets(curSlide - 1);
    curSlide--;
  }

  function toDefault() {
    pagination(1);
    setTimeout(timeout, animSpd);
  }

  // // Events
  $(document).on("mousedown touchstart", ".slide", function (e) {
    if (animation) return;
    let target = +$(this).attr("data-target");
    let startX = e.pageX || e.originalEvent.touches[0].pageX;
    $slider.removeClass("animation");

    $(document).on("mousemove touchmove", function (e) {
      let x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = startX - x;
      if ((target === 1 && diff < 0) || (target === numOfCities && diff > 0))
        return;

      $slider.css({
        transform:
          "translate3d(-" + ((curSlide - 1) * 100 + diff / 30) + "%, 0, 0)",
      });

      $slider.find(".slide__darkbg").css({
        transform:
          "translate3d(" + ((curSlide - 1) * 50 + diff / 60) + "%, 0, 0)",
      });

      $slider.find(".slide__letter").css({
        transform: "translate3d(" + diff / 60 + "vw, 0, 0)",
      });

      $slider.find(".slide__text").css({
        transform: "translate3d(" + diff / 15 + "px, 0, 0)",
      });
    });
  });

  $(document).on("mouseup touchend", function (e) {
    $(document).off("mousemove touchmove");

    if (animation) return;

    if (diff >= distOfLetGo) {
      navigateRight();
    } else if (diff <= -distOfLetGo) {
      navigateLeft();
    } else {
      toDefault();
    }
  });

  $(document).on("click", ".nav__slide:not(.nav-active)", function () {
    let target = +$(this).attr("data-target");
    bullets(target);
    curSlide = target;
    pagination(1);
  });

  $(document).on("click", ".side-nav", function () {
    let target = $(this).attr("data-target");

    if (target === "right") navigateRight();
    if (target === "left") navigateLeft();
  });

  $(document).on("keydown", function (e) {
    if (e.which === 39) navigateRight();
    if (e.which === 37) navigateLeft();
  });

  // $(document).on("mousewheel DOMMouseScroll", function (e) {
  //   if (animation) return;
  //   let delta = e.originalEvent.wheelDelta;

  //   if (delta > 0 || e.originalEvent.detail < 0) navigateLeft();
  //   if (delta < 0 || e.originalEvent.detail > 0) navigateRight();
  // });
});
