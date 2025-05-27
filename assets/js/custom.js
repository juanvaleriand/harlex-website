(function ($) {
  "use strict";

  // Mean Menu
  $(".mean-menu").meanmenu({
    meanScreenWidth: "991",
  });

  // Preloader
  $(window).on("load", function () {
    setTimeout(() => {
      $(".preloader-harlex").fadeOut();
    }, 1200);
  });

  // Nice Select JS
  $("select").niceSelect();

  // Header Sticky
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 150) {
      $(".navbar-area").addClass("is-sticky");
    } else {
      $(".navbar-area").removeClass("is-sticky");
    }
  });

  // Partner Wrap
  $(".partner-wrap").owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: false,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 2,
      },
      576: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1200: {
        items: 4,
      },
    },
  });

  // Testimonials Wrap
  $(".testimonials-wrap").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: false,
    smartSpeed: 1500,
    navText: [
      "<i class='flaticon-left-arrow-1'></i>",
      "<i class='flaticon-right-arrow-1'></i>",
    ],
    responsive: {
      768: {
        items: 2,
      },
      992: {
        items: 1,
      },
    },
  });

  // Company Wrap
  $(".company-wrap").owlCarousel({
    loop: false,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    center: false,
    dots: false,
    smartSpeed: 1500,
    margin: 15,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });

  // Go to Top
  // Scroll Event
  $(window).on("scroll", function () {
    var scrolled = $(window).scrollTop();
    if (scrolled > 300) $(".go-top").addClass("active");
    if (scrolled < 300) $(".go-top").removeClass("active");
  });

  // Click Event
  $(".go-top").on("click", function () {
    $("html, body").animate({
        scrollTop: "0",
      },
      0
    );
  });

  // FAQ Accordion
  $(".accordion")
    .find(".accordion-title")
    .on("click", function () {
      // Adds Active Class
      $(this).toggleClass("active");
      // Expand or Collapse This Panel
      $(this).next().slideToggle("fast");
      // Hide The Other Panels
      $(".accordion-content").not($(this).next()).slideUp("fast");
      // Removes Active Class From Other Titles
      $(".accordion-title").not($(this)).removeClass("active");
    });

  // Count Time
  function makeTimer() {
    var endTime = new Date("November 30, 2030 17:00:00 PDT");
    var endTime = Date.parse(endTime) / 1000;
    var now = new Date();
    var now = Date.parse(now) / 1000;
    var timeLeft = endTime - now;
    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );
    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
  }
  setInterval(function () {
    makeTimer();
  }, 300);

  // Popup Image
  $('a[data-imagelightbox="popup-btn"]').imageLightbox({
    activity: true,
    overlay: true,
    button: true,
    arrows: true,
  });

  // Popup Video
  $('a[data-imagelightbox="video"]').imageLightbox({
    activity: true,
    overlay: true,
    button: true,
  });

  // Quality Service Wrap
  $(".quality-service-wrap").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: true,
    items: 1,
    dots: false,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
    navText: [
      "<i class='flaticon-left-arrow-1'></i>",
      "<i class='flaticon-right-arrow-1'></i>",
    ],
  });

  // Dripli Slider
  $(".dripli-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    mouseDrag: false,
    items: 1,
    dots: true,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    animateOut: "fadeOut",
  });

  // Dripli Slider-2
  $(".dripli-slider-2").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: false,
    items: 1,
    dots: false,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    animateOut: "slideOutUp",
    navText: [
      "<i class='flaticon-left-arrow-1'></i>",
      "<i class='flaticon-right-arrow-1'></i>",
    ],
  });

  // Singles Services Wraps
  $(".singles-services-wraps").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    items: 1,
    dots: true,
    autoHeight: true,
    autoplay: true,
    smartSpeed: 1500,
    autoplayHoverPause: true,
    animateOut: "slideOutUp",
    navText: [
      "<i class='flaticon-left-arrow-1'></i>",
      "<i class='flaticon-right-arrow-1'></i>",
    ],
  });

  //Slider Text Animation
  $(".dripli-slider-area").on("translate.owl.carousel", function () {
    $(
        ".dripli-slider-text span, .dripli-slider-text h1, .dripli-slider-text .typewrite"
      )
      .removeClass("animated fadeInUp")
      .css("opacity", "0");
    $(".dripli-slider-text p")
      .removeClass("animated fadeInDown")
      .css("opacity", "0");
    $(".dripli-slider-text a")
      .removeClass("animated fadeInDown")
      .css("opacity", "0");
  });

  $(".dripli-slider-area").on("translated.owl.carousel", function () {
    $(
        ".dripli-slider-text span, .dripli-slider-text h1, .dripli-slider-text .typewrite"
      )
      .addClass("animated fadeInUp")
      .css("opacity", "1");
    $(".dripli-slider-text p")
      .addClass("animated fadeInDown")
      .css("opacity", "1");
    $(".dripli-slider-text a")
      .addClass("animated fadeInDown")
      .css("opacity", "1");
  });

  // Search Popup JS
  $(".close-btn").on("click", function () {
    $(".search-overlay").fadeOut();
    $(".search-btn").show();
    $(".close-btn").removeClass("active");
  });
  $(".search-btn").on("click", function () {
    $(this).hide();
    $(".search-overlay").fadeIn();
    $(".close-btn").addClass("active");
  });

  // MixItUp JS
  try {
    var mixer = mixitup("#Container", {
      controls: {
        toggleDefault: "none",
      },
    });
  } catch (err) {}

  //animation
  new WOW().init();

  // Feedback Carousel
  var $imagesSlider = $(".portfolio-slides .our-portfolio>div"),
    $thumbnailsSlider = $(".portfolio-thumbnails>div");
  // images options
  $imagesSlider.slick({
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    fade: true,
    autoplay: true,
    draggable: true,
    asNavFor: ".portfolio-thumbnails>div",
    prevArrow: ".portfolio-feedback .prev-arrow",
    nextArrow: ".portfolio-feedback .next-arrow",
  });

  // Thumbnails options
  $thumbnailsSlider.slick({
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    centerMode: true,
    draggable: false,
    focusOnSelect: true,
    asNavFor: ".portfolio-slides .our-portfolio>div",
    prevArrow: ".portfolio-thumbnails .prev-arrow",
    nextArrow: ".portfolio-thumbnails .next-arrow",
  });
  var $caption = $(".portfolio-slides .caption");
  var captionText = $(".our-portfolio .slick-current img").attr("alt");
  updateCaption(captionText);
  $imagesSlider.on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $caption.addClass("hide");
    }
  );
  $imagesSlider.on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      captionText = $(".our-portfolio .slick-current img").attr("alt");
      updateCaption(captionText);
    }
  );

  function updateCaption(text) {
    // if empty, add a no breaking space
    if (text === "") {
      text = "&nbsp;";
    }
    $caption.html(text);
    $caption.removeClass("hide");
  }

  // Input Plus & Minus Number JS
  $(".input-counter").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="text"]'),
      btnUp = spinner.find(".plus-btn"),
      btnDown = spinner.find(".minus-btn"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.on("click", function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  // Tabs
  $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
  $(".tab ul.tabs li a").on("click", function (g) {
    var tab = $(this).closest(".tab"),
      index = $(this).closest("li").index();
    tab.find("ul.tabs > li").removeClass("current");
    $(this).closest("li").addClass("current");
    tab
      .find(".tab_content")
      .find("div.tabs_item")
      .not("div.tabs_item:eq(" + index + ")")
      .slideUp();
    tab
      .find(".tab_content")
      .find("div.tabs_item:eq(" + index + ")")
      .slideDown();
    g.preventDefault();
  });

  // Subscribe form JS
  $(".newsletter-form")
    .validator()
    .on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formErrorSub();
        submitMSGSub(false, "Please enter your email correctly.");
      } else {
        // everything looks good!
        event.preventDefault();
      }
    });

  function callbackFunction(resp) {
    if (resp.result === "success") {
      formSuccessSub();
    } else {
      formErrorSub();
    }
  }

  function formSuccessSub() {
    $(".newsletter-form")[0].reset();
    submitMSGSub(true, "Thank you for subscribing!");
    setTimeout(function () {
      $("#validator-newsletter").addClass("hide");
    }, 4000);
  }

  function formErrorSub() {
    $(".newsletter-form").addClass("animated shake");
    setTimeout(function () {
      $(".newsletter-form").removeClass("animated shake");
    }, 1000);
  }

  function submitMSGSub(valid, msg) {
    if (valid) {
      var msgClasses = "validation-success";
    } else {
      var msgClasses = "validation-danger";
    }
    $("#validator-newsletter, #validator-newsletter-2")
      .removeClass()
      .addClass(msgClasses)
      .text(msg);
  }

  // AJAX MailChimp JS
  $(".newsletter-form").ajaxChimp({
    url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", // Your url MailChimp
    callback: callbackFunction,
  });

  if ($(".owl-2").length > 0) {
    $(".owl-2").owlCarousel({
      center: false,
      items: 1,
      loop: true,
      stagePadding: 0,
      margin: 20,
      smartSpeed: 1000,
      autoplay: true,
      nav: true,
      dots: true,
      pauseOnHover: false,
      responsive: {
        600: {
          margin: 20,
          nav: true,
          items: 2,
        },
        1000: {
          margin: 20,
          stagePadding: 0,
          nav: true,
          items: 3,
        },
      },
    });
  }

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  var carousel = function () {
    $(".featured-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      margin: 30,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      nav: true,
      autoplayHoverPause: true,
      items: 1,
      dots: false,
      navText: ["<p><small>Prev</small><span class='ion-ios-arrow-round-back'></span></p>", "<p><small>Next</small><span class='ion-ios-arrow-round-forward'></span></p>"],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  };
  carousel();
})(jQuery);