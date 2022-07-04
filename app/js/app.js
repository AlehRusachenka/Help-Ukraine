// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import Splide from "@splidejs/splide";

// Slider
document.addEventListener("DOMContentLoaded", () => {
  var splide = new Splide(".splide", {
    classes: {
      arrow: "splide__arrow charity-slider__arrow",
    },
    type: "loop",
    perPage: 3,
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

// Burger Menu
document.addEventListener("DOMContentLoaded", () => {
  const headerBureger = document.querySelector(".header__burger");
  const headerNav = document.querySelector(".header__nav");

  headerBureger.addEventListener("click", function (event) {
    headerBureger.classList.toggle("burger_closed");
    headerNav.classList.toggle("header__nav_opened");
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

var acc = document.getElementsByClassName("donation__accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
