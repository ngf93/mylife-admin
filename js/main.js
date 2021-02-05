/* sliders */
$(document).ready(function () {
  var swiper1 = new Swiper ('.swiper_1', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  var swiper3 = new Swiper ('.swiper_3', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  });

  var swiper6 = new Swiper ('.swiper_6', {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    }
  });

  var swiper8 = new Swiper ('.swiper_8', {
    slidesPerView: 2,
    slidesPerColumn: 2,
    spaceBetween: 15,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 20,
      }
    }
  });

});


/* current year */
$(document).ready( function() {
  var now = new Date();
  var cur_year = now.getFullYear();
  $("#year").html(cur_year);
});

$(function() {
  $(".quantity-arrow-plus").click(function() {
      var num = $(this).prev(".quantity-num");
      var num_val = num.val();
      num.val(+num_val + 1);
  });
  $(".quantity-arrow-minus").click(function() {
      var num = $(this).next(".quantity-num");
      var num_val = num.val();
      if (num_val > 1) {
        num.val(+num_val - 1);
      }
  });
});


/* Left Menu on desktop */
$(document).ready(function () {
  function Scroll_block(){
    var scroll_top = $(document).scrollTop();
    $(".anchor_menu a").each(function(){
        var hash = $(this).attr("href");
        var target = $(hash);
        let top_border = target.offset().top - 80;
        let bottom_border = top_border + target.outerHeight();
        if (scroll_top >= top_border &&  scroll_top < bottom_border) {
            $(this).parent().addClass("active");
        } else {
            $(this).parent().removeClass("active");
        }
    });
  }

  $(document).on("scroll", Scroll_block);

  /* smooth scroll to anchor */
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    let crutch = $(".anchor_block").css("--crutch");
    var destination = $(elementClick).offset().top - crutch;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
  
});


/* sticky top menu from offer page */
  $(window).scroll(function(){
    let offset = $('.offer_page_header').offset().top + $('.offer_page_header').outerHeight();
    var st = $(this).scrollTop();
    if ( st > offset ) {
      $('.op_header_sticky').fadeIn(300);
      
      var swiper0 = new Swiper ('.swiper_menu', {
        loop: false,
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 30,
        slideToClickedSlide: true,
        normalizeSlideIndex: false
      });

      function Scroll_block_mobile(){
        var scroll_top = $(document).scrollTop();
        $(".swiper_menu .swiper-slide a").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            let crutch = $(".anchor_block").css("--crutch");
            let top_border = target.offset().top - crutch;
            let bottom_border = top_border + target.outerHeight();
            var slide_label = $(this).parent().attr("aria-label");
            let slide_num = slide_label.substr(0, slide_label.length - 4) - 1;
            if (scroll_top >= top_border &&  scroll_top < bottom_border) {
              console.log("index слайдa" + slide_num);
              // console.log(swiper0.activeIndex);
              // swiper0.activeIndex = slide_num;
              // console.log(swiper0.activeIndex);
              swiper0.slideTo(slide_num, '300ms', false);
            }
        });
      }

      $(document).on("scroll", Scroll_block_mobile);

    } else if (st < offset) {
      $('.op_header_sticky').fadeOut(300);
    }
  });


/* scroll top */
jQuery(document).ready(function () {
  var btn = $('#scroll_top');
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });
});


/* tooltips */
$(function () {
  $('.services_info').mouseenter(function(){
    $('.services_info').removeClass('si_full');
    $(this).addClass('si_full');
  });
})

/* добавление в избранное */
$(function () {
  $('.add_to_fav').click(function(){
    $(this).toggleClass('clicked');
  });
})

$(document).ready(function () {
  bsCustomFileInput.init()
})

$('.input-upload').on('change', function() {
  var arrayFiles = this.files, // массив с выбранными фалами
      formItem = this.parentNode, // родительский элемент, для того чтобы вставить список с файлами
      listFiles = document.createElement('ul'), // список с файлами
      li = ''; // файлы
  
  // Если список с файлами уже вставлен в ДОМ, то удаляем его
  if (formItem.querySelector('.list-files')) {
    formItem.querySelector('.list-files').remove();
  }
  
  listFiles.className = 'list-files'; // добавим класс, чтобы было удобнее стилять
  
  for (var i = 0; i < arrayFiles.length; i++) {
    li += '<li>' + arrayFiles[i].name + '</li>'; // <li>Имя файла</li>
  }
  
  listFiles.innerHTML = li;
  
  formItem.appendChild(listFiles);  
});