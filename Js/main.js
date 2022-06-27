const container = document.querySelector(".container")
const swiper = new Swiper('.hero__swiper',
  {
    speed: 300,
    pagination: {
      el: '.hero__pagination',
      type: 'bullets',
      clickable: true
    }

  })

document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;
    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });
    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

$(function () {
  $(".accordion__list").accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false
  });

});

let burger = document.querySelector('.burger-menu');
let menu = document.querySelector('.header-menu');
let menuLinks = menu.querySelectorAll('.header-menu__item');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('.burger-menu--active');

    menu.classList.toggle('header-menu--active');

    document.body.classList.roggle('stop-scroll');

  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger-menu--active');

    menu.classList.remove('header-menu--active');

    document.body.classList.remove('stop-scroll')

  })
})


document.querySelector(".header__button").addEventListener("click", function() {
  document.querySelector(".header__form").classList.add("header__form--active");
  this.classList.add("active");
})

document.querySelector(".header__button-close").addEventListener("click", function() {
  document.querySelector(".header__form--active").classList.remove("header__form--active");
  this.classList.remove("active");
})

document.querySelector(".header__button-main").addEventListener("click", function() {
  document.querySelector(".header__button-main").classList.add("header__button-main--hide");
  this.classList.add("hide");
})

document.querySelector(".header__button-close").addEventListener("click", function() {
  document.querySelector(".header__button-main").classList.remove("header__button-main--hide");
  this.classList.remove("hide");
})


// document.addEventListener("click", function(e) {
//   let target = e.target;
//   let form = document.querySelector(".header__button-close");
//   if (!target.closest(".header__button-close")) {
//   form.classList.remove("header__form--active");
//     form.querySelector("input").value = "";
//     document.querySelector(".header__button-close").classList.remove("active")
//   }
// })

document.querySelector('.burger-menu').addEventListener('click', function(){
  document.querySelector('.burger-menu__item').classList.toggle('active');
})

