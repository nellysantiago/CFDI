const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnizq = document.querySelector("#boton-izq");
const btnder = document.querySelector("#boton-der");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function cambDer() {
  let sliderSectionFirts = document.querySelector(".slider-section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirts);
    slider.style.marginLeft = "-100%";
  }, 500);
}

function cambIzq() {
  let sliderSection = document.querySelectorAll(".slider-section");
  let sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0";
  slider.style.transition = "all 0.5s";
  setTimeout(function () {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 500);
}

btnder.addEventListener("click", function () {
  cambDer();
});

btnizq.addEventListener("click", function () {
  cambIzq();
});

setInterval(function () {
  cambDer();
}, 5000);
