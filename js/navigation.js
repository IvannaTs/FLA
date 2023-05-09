$(function () {

  // Fixed header start
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();
  let scrollPos = $(window).scrollTop();

  let nav = $(".nav");
  let navToggle = $("#navToggle");

  checkScroll(scrollPos, introH);

  $(window).on("scroll resize", function () {
    introH = intro.innerHeight();
    scrollPos = $(this).scrollTop();

    checkScroll(scrollPos, introH)
  });

  function checkScroll() {
    if (scrollPos > introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  };
  // Fixed header end

  // Smoth scroll start
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let elementId = $(this).data('scroll');
    let elementOffset = $(elementId).offset().top;

    nav.removeClass("show");

    $("html, body").animate({
      scrollTop: elementOffset - 80
    }, 700);
  });
  // Smoth scroll end

  // Nav Toggle start
  navToggle.on("click", function (event) {
    event.preventDefault();

    nav.toggleClass("show");

  })
  // Nav Toggle end

  const burger = document.querySelector('.burger');
  const contactTelephone = document.querySelector('.contact-telephone');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    contactTelephone.classList.toggle('hide');
  });

});


