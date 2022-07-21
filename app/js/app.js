// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Splide from "@splidejs/splide";

// Slider
document.addEventListener("DOMContentLoaded", () => {
  var splide = new Splide("#charity", {
    classes: {
      arrow: "splide__arrow charity-slider__arrow",
      arrows: "splide__arrows charity-slider__arrows",
      prev: "splide__arrow--prev charity-slider__arrow_prev",
      next: "splide__arrow--next charity-slider__arrow_next",
    },
    type: "loop",
    perPage: 3,
    gap: "20px",
    perMove: 1,
    pagination: false,
    breakpoints: {
      992: {
        perPage: 2,
      },
      768: {
        perPage: 1,
      },
    },
  });

  splide.mount();
});

// About fund slider
document.addEventListener("DOMContentLoaded", () => {
  var splide = new Splide("#forces", {
    classes: {
      arrow: "splide__arrow forces-help__arrow",
      arrows: "splide__arrows forces-help__arrows",
      prev: "splide__arrow--prev forces-help__arrow_prev",
      next: "splide__arrow--next forces-help__arrow_next",
      pagination: "splide__pagination forces-help__pagination",
    },
    type: "loop",
    perPage: 1,
    perMove: 1,
    gap: "20px",
    focus: "center",
    trimSpace: false,
    padding: "30%",
    pagination: true,
    breakpoints: {
      992: {
        padding: "20%",
      },
      768: {
        padding: "15%",
      },
    },
  });

  splide.mount();
});

// Burger Menu
document.addEventListener("DOMContentLoaded", () => {
  const headerBureger = document.querySelector(".header__burger");
  const headerNav = document.querySelector(".header__nav");

  headerBureger.addEventListener("click", function (event) {
    headerBureger.classList.toggle("burger_closed");
    headerNav.classList.toggle("header__nav_opened");
  });
});

// Lang items
document.addEventListener("DOMContentLoaded", () => {
  const langSwitcher = document.querySelector(".lang-switcher");
  const langSwitcherList = document.querySelector(".lang-switcher__list");

  langSwitcher.addEventListener("click", function (event) {
    langSwitcher.classList.toggle("switcher_closed");
    langSwitcherList.classList.toggle("lang-switcher__list_opened");
  });
});

// Fixed Header
document.addEventListener("DOMContentLoaded", () => {
  let header = document.querySelector(".header");

  document.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 1) {
      header.classList.add("header_has-bg");
    } else {
      header.classList.remove("header_has-bg");
    }
  });
});

// Tabs human
document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[data-tab-target]");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove("active");
      });
      tabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      tab.classList.add("active");
      target.classList.add("active");
    });
  });
});

// Donation accordion
let don = document.getElementsByClassName("donation__accordion");

for (let i = 0; i < don.length; i++) {
  don[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// FAQ accordion
let faq = document.getElementsByClassName("faq__accordion");

for (let i = 0; i < faq.length; i++) {
  faq[i].addEventListener("click", function () {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
