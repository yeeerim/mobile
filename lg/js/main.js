$(function(){
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },  
      });

      //정지 버튼을 누르면 재생버튼으로 변경
      //swicth 기능
      let sw = true;   
      $(".btn_pause").click(function(){
       if(sw==true){
            $(".btn_pause").addClass("on");
            // swiper슬라이더에서 일시정지
            swiper.autoplay.stop();
            sw=false;
       }else{
            $(".btn_pause").removeClass("on");
            // swiper슬라이더에서 다시 재생
            swiper.autoplay.start();
            sw=true;
       }
      });
      // promotion slide
      $('.slick1').slick({
        slide: 'div',
        infinite: false,
        autoplay: true,
        fade: true
      });
      // banner slide
      $('.slick2').slick({
        slide: 'div',
        infinite: true,
        autoplay: true,
        dots: true
      });
      // best product slide
      $('.slick3').slick({
        slide: 'div',
        infinite: true,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3500
      });
      // item slide
      $('.slick4').slick({
        slide: 'div',
        infinite: true,
        autoplay: true,
        dots: false,
        slidesToScroll: 1,
        variableWidth: true
      });
      // qna
      $('.list2:gt(0)').hide();
      $('.quest>li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
        $('.list2').hide();
        $(this).children('.list2').show();
        
      });
      // service
      $('.slick5').slick({
        slide: 'div',
        infinite: true,
        dots: true,
        autoplay: true
      });
      // 퀵버튼
      $(window).on('scroll', function(){
        if($(window).scrollTop()){
          $('.goTo').show();
        }else{
          $('.goTo').hide();
        }
      });
      // side menu
      $('.depth2:gt(0)').hide();
      $('.menu>li').click(function(){
        $(this).addClass('on')
        let num = $(this).index();
        $('.depth2').hide();
        $(this).children('.depth2').show();
      });
      $('.depth3').hide();
      $('.sub').click(function(){
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).children('.depth3').slideToggle();
        $(this).siblings().find('.depth3').slideUp();
      });

      $('.m_btn').click(function(){
        $('.side_menu').animate({
          'left' : 0
        })
        $('body').addClass('full');
        $('.cover').fadeIn();
      });
      
      $('.close').click(function(){
        $('.side_menu').animate({
          'left':-345
        })
        $('body').removeClass('full');
        $('.cover').fadeOut();
        $('.depth3').slideUp();
      });

});