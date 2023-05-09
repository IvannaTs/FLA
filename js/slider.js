jQuery(function ($) {
  jQuery(document).ready(function () {

    $('.veterans .slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      dots: true,
      swipe: true,
      TouchMove: true,
      appendArrows: $('.veterans .slider-arrows'),
      appendDots: $('.veterans .slider-dots'),
      focusOnSelect: true,
      lazyLoad: 'ondemand',
      responsive: [
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
          }
        }
      ]
    });


    $('.IntDisplacedPersons .slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      dots: true,
      swipe: true,
      TouchMove: true,
      appendArrows: $('.IntDisplacedPersons .slider-arrows'),
      appendDots: $('.IntDisplacedPersons .slider-dots'),
      lazyLoad: 'ondemand',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
          }
        }
      ]
    });


    $('.PeopleWithDisabilities .slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      dots: true,
      swipe: true,
      TouchMove: true,
      appendArrows: $('.PeopleWithDisabilities .slider-arrows'),
      appendDots: $('.PeopleWithDisabilities .slider-dots'),
      pauseOnHover: true,
      focusOnSelect: true,
      lazyLoad: 'ondemand',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
          }
        }
      ]
    });


    $('.kids .slider').slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      dots: true,
      swipe: true,
      TouchMove: true,
      appendArrows: $('.kids .slider-arrows'),
      appendDots: $('.kids .slider-dots'),
      lazyLoad: 'ondemand',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
          }
        }
      ]
    });
  });
});