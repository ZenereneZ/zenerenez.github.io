(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Closes responsive menu when a link is clicked
  $('.navbar-collapse>ul>li>a').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  });

  // Magnific popup calls. Taken from start bootstrap creative theme
  $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
      },
      image: {
          tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
  });

})(jQuery); // End of use strict
