const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');
// const navIcon = document.querySelector('.nav-icon-btn');


navBtn.onclick = function () {
  navIcon.classList.toggle('nav-icon--active');
  nav.classList.toggle('header__top-row--mobile')
  document.body.classList.toggle('no-scroll')
}


// Phone Mask

mask('[data-tel-input ]')

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value === '+') input.value = ''
  })
  input.addEventListener('blur', () => {
    if (input.value === '+') input.value = ''
  })
})

// APi Yandex Map

ymaps.ready(function () {  
  var map = new ymaps.Map("map", {
    center: [41.568824,64.202665], 
    zoom: 16
  });

  if (map) {
    ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
      var placemark = new Placemark([55.37, 35.45]);
    });
  }
});