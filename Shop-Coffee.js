let totalcof = 0;
let totalnum = 0;
let lastcoffee = null;
new Swiper(".swiper", {
  slidesPerView: 2.3,
  mousewheel: true,
  centeredSlides: false,
  centeredSlidesBounds: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 16,
    },
  },
});
const modaljob = document.querySelector("#Contac-job");
const coffemenudetails = document.querySelectorAll(".detailsmodal");
const myModal = new bootstrap.Modal("#menu-coffe");
const btnsendi = document.querySelector(".fa-paper-plane");
const btn = document.querySelector("#btn-top");
const btni = document.querySelector("#btn-top i");
const slidernextbtn = document.querySelector(
  "#headSlider .carousel-control-prev",
);
const modals = document.querySelectorAll(".modal-auto");
const imgwithcontainer = document.querySelectorAll(".response-img img");
const cofeedetailmodal = document.querySelectorAll(".card");
let i = 0;
// todo coffee detail menu
cofeedetailmodal.forEach((i) => {
  i.addEventListener("click", function () {
    const btn = i.querySelector("button");
    btn.click();
  });
  i.addEventListener("mouseover", () => {
    const btn = i.querySelector("button");
    btn.classList.add("active");
  });
  i.addEventListener("mouseout", () => {
    const btn = i.querySelector("button");
    btn.classList.remove("active");
  });
});
// todo img fullscreen
imgwithcontainer.forEach((i) => {
  i.addEventListener("click", function () {
    if (i.requestFullscreen) {
      i.requestFullscreen();
    }
  });
});
// todo modal with click
modals.forEach((md) => {
  md.addEventListener("click", function () {
    const btn = md.querySelector(".btn-grad");
    btn.click();
  });
});
// todo nextslider
setInterval(function () {
  slidernextbtn.click();
}, 5000);
// todo menu coffee btn click
for (let i = 0; i < coffemenudetails.length; i++) {
  coffemenudetails[i].addEventListener("hidden.bs.modal", function () {
    myModal.show();
  });
}
// todo modal open with selects empty
modaljob.addEventListener("show.bs.modal", function () {
  const int = document.querySelectorAll(".jobs input");
  const select = document.querySelectorAll(".jobs select");
  int.forEach((i) => {
    i.value = "";
  });
  select.forEach((s) => {
    s.value = "";
  });
});
// todo document top scroll
btn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
