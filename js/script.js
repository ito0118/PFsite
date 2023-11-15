$(function () {
    $(window).on('scroll', function () {
        if ($('.keyvis').height() < $(this).scrollTop()) {
            $('.js-header').addClass('change-color');
      } else {
            $('.js-header').removeClass('change-color');
      }
    });
  });

  
  const ham = document.querySelector('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
  const nav = document.querySelector('#js-nav'); //js-navの要素を取得し、変数navに格納