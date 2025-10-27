$(document).ready(function () {
  $('.hamburger, .header__nav-link').click(function () {
    $(this).toggleClass("active");
    $(".header__nav .nav__list").toggleClass("active");
    $(".header__buttons").toggleClass("active");
    $("body").toggleClass("no-scroll");
  })

})
