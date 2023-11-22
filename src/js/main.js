$(document).ready(function(){
    //начало скрипт для слайдера
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop:true,

        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    
    // Go to the next item
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
    // конец скрипта для слайдера

    //начало скрипта для tabs
    $('ul.menu__caption').on('click', 'li:not(.menu__content_active)', function() {
        $(this)
          .addClass('menu__btn_active').siblings().removeClass('menu__btn_active')
          .closest('div.menu__tabs').find('div.menu__content').removeClass('menu__content_active').eq($(this).index()).addClass('menu__content_active');
      });
      //конец скрипта для tabs

    // начало скрипта для выпадающего текста 
      $('.text_more-btn').on('click', function() {
        $('.text').toggleClass('text_hidden')
        if(('.text_more-btn').text() == 'see more...') {
            $('.text_more-btn').text('hide')
        } else {
            $('.text_more-btn').text('see more...')
        }
      })
    // конец скрипта для выпадающего текста 
      
    // начало скрипта для заказа 
    $('.support__order-btn').on('click', function() {
        $('.overlay').fadeIn(1000)
    })

    $('.close').on('click', function() {
        $('.overlay').fadeOut(1000)
        $('.order-popup__form').fadeOut(1000)
        $('.end').fadeOut(1000)
    })

    $('.order-popup__btn').on('click', function(e) {
        e.preventDefault()
        $('.order-popup__form').fadeOut(10)
        $('.end').fadeIn(10)
    })

     // конец скрипта для заказа 

    // начало скрипта для интекрактивного меню
    $('.burger').on('click', function() {
        $('.burger').toggleClass('active')

        if($('.header .list')[0].className.includes('active')) {
            $('.header .list').hide()   
        }else {
            $('.header .list').fadeIn(1000)
        }
        $('.header .list').toggleClass('active')

    })

    // конец скрипта для интекрактивного меню
  });