/* ==============
 ========= js documentation ==========================

 * theme name: Evlio
 * version: 1.0
 * description: Creative Conference Html5 Template
 * author: uiaxis
 * author url: https://themeforest.net/user/uiaxis

    ==================================================

     01. data background
     -------------------------------------------------
     02. navbar
     -------------------------------------------------
     03. schedule tab
     -------------------------------------------------
     04. pricing table
     -------------------------------------------------
     05. conference modal
     -------------------------------------------------
     06. ticket modal
     -------------------------------------------------
     07. preloader

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    // navbar
    $(".nav__bar").on("click", function () {
      $(this).toggleClass("nav__bar-toggle");
      $(".nav__menu").toggleClass("nav__menu-active");
      $(".backdrop").toggleClass("backdrop-active");
      $("body").toggleClass("body-active");
    });

    $(".backdrop, .nav__menu-close, .hide-nav").on("click", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__menu-link--dropdown").next(".nav__dropdown").slideUp(500);
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
    });

    $(window).on("resize", function () {
      $(".backdrop").removeClass("backdrop-active");
      $(".nav__bar").removeClass("nav__bar-toggle");
      $(".nav__menu").removeClass("nav__menu-active");
      $(".nav__dropdown").removeClass("nav__dropdown-active");
      $(".nav__menu-link--dropdown").removeClass(
        "nav__menu-link--dropdown-active"
      );
      $("body").removeClass("body-active");
      $(".ticket-modal").slideUp();
      $(".conference-modal").slideUp();
    });

    $(".nav__menu-link--dropdown").on("click", function () {
      $(this).next(".nav__dropdown").toggleClass("nav__dropdown-active");
      $(this).toggleClass("nav__menu-link--dropdown-active");
    });

    // on window scroll
    $(window).on("scroll", function () {
      // position navbar on scroll
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".header").removeClass("header-active");
      } else {
        $(".header").addClass("header-active");
      }
    });

    // schedule tab
    $(".schedule__tab").hide();
    $(".schedule__tab:first").show();
    $(".schedule__tab-btn").on("click", function () {
      $(".schedule__tab-btn").removeClass("schedule__tab-btn--active");
      $(this).addClass("schedule__tab-btn--active");
      $(".schedule__tab").hide();
      var activeSchedule = $(this).attr("href");
      $(activeSchedule).fadeIn(500);
      return false;
    });

    // pricing table
    $(".switch-toggle").click(function () {
      if ($(this).is(":checked")) {
        $(".ticket__content-offer").addClass("ticket__content-active");
        $(".ticket__content-regular").removeClass("ticket__content-active");
      } else if ($(this).is(":not(:checked)")) {
        $(".ticket__content-regular").addClass("ticket__content-active");
        $(".ticket__content-offer").removeClass("ticket__content-active");
      }
    });

    // preloader
    setTimeout(function () {
      $("#ctn-preloader").addClass("loaded");
      if ($("#ctn-preloader").hasClass("loaded")) {
        $("#preloader")
          .delay(1000)
          .queue(function () {
            $(this).remove();
          });
      }
    }, 2000);

    // pricing modal
    $(".open-ticket").on("click", function () {
      $(".ticket-modal").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-ticket").on("click", function () {
      $(".ticket-modal").slideUp();
      $("body").removeClass("body-active");
    });

    // conference details modal
    $(".open-conference").on("click", function () {
      $(".conference-modal").slideDown();
      $("body").addClass("body-active");
    });

    $(".close-conference").on("click", function () {
      $(".conference-modal").slideUp();
      $("body").removeClass("body-active");
    });

    // scroll to top with progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > offset) {
        $(".progress-wrap").addClass("active-progress");
      } else {
        $(".progress-wrap").removeClass("active-progress");
      }
    });
    $(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });

    // theme switcher

    var checkBox = document.getElementById("chk");

    var theme = window.localStorage.getItem("data-theme");
    if (theme) document.documentElement.setAttribute("data-theme", theme);
    checkBox.checked = theme == "light" ? true : false;

    checkBox.addEventListener("change", function () {
      if (this.checked) {
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("data-theme", "light");
        $('link[href="assets/css/main.css"]').attr("href", "assets/css/light.css");
        $('#lightLogo').attr("src", "assets/images/logo-light.png");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem("data-theme", "dark");
        $('link[href="assets/css/light.css"]').attr("href", "assets/css/main.css");
        $('#lightLogo').attr("src", "assets/images/logo.png");
      }
    });

    if (localStorage.getItem("data-theme") == "light") {
      $('link[href="assets/css/main.css"]').attr("href", "assets/css/light.css");
      $('#lightLogo').attr("src", "assets/images/logo-light.png");
    }

    if (localStorage.getItem("data-theme") == "dark") {
      $('link[href="assets/css/light.css"]').attr("href", "assets/css/main.css");
      $('#lightLogo').attr("src", "assets/images/logo.png");
    }

  });
})(jQuery);

