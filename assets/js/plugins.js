/* ==============
 ========= js documentation ==========================

 * theme name: Evlio
 * version: 1.0
 * description: Creative Conference Html5 Template
 * author: uiaxis
 * author url: https://themeforest.net/user/uiaxis

    ==================================================

     01. init wow js
     -------------------------------------------------
     02. video popup
     -------------------------------------------------
     03. event slider
     -------------------------------------------------
     04. speaker slider

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // wow init
    new WOW().init();

    // video popup
    if ($(".video-popup").length) {
      $(".video-popup").magnificPopup({
        type: "iframe",
      });
    }

    // event slider
    $(".event__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-event"),
        nextArrow: $(".next-event"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // speaker slider
    $(".speaker__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        prevArrow: $(".prev-speaker"),
        nextArrow: $(".next-speaker"),
        centerMode: true,
        centerPadding: "0px",
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });
  });
})(jQuery);
