(function() {
    //  헤더상단 lang
    $('.util .lang .btn_lang').on('click',function() {
        $('.util .lang .list_lang').slideToggle();
    });


    // pc gnb 
    var header = $('#header');
    $('.gnb .depth1>li').on('mouseenter', function() {
        header.addClass('on'); 
        $(this).find('.submenu_wrap').show().parent().siblings().find('.submenu_wrap').hide();
    }).on('mouseleave', function() {
        header.removeClass('on');
    });



    // 모바일 gnb_box
    $('#header .btn_menu_toggle').on('click', function() {
        $('#header .m_gnb_box').toggleClass('open');
        $(this).toggleClass('on');
        $('body').toggleClass('hidden');
    });
    

    // pc메인슬라이드
    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        effect:'fade',
        autoplay: {
            delay: 4000,
        },
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        
    });


    // 메인슬라이터 토글버튼
    var autoFlag = true;
    $('.main_slider .btn_slider_toggle').on('click', function() {
        $(this).toggleClass('on');

        if(autoFlag) {
            mainSlider.autoplay.stop();
            $(this).find('.blind').text('자동재생')
        } else {
            mainSlider.autoplay.start();
            $(this).find('.blind').text('일시정지')
        }
        autoFlag = !autoFlag
    });


    // 메인 뉴스슬라이더
    var newsSlider = new Swiper('.news_slider', {
        loop: true,
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    });
    // 메인 사회공헌슬라이더
    var socialSlider = new Swiper('.social_slider', {
        loop: true,
      
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

    });


    // 푸터 하단 패밀리사이트
    $('.family_wrap .family_site .btn_family').on('click', function () {
        $(this).siblings().slideToggle();
        $(this).toggleClass('on');
    });
    

    // 모바일 패밀리사이트
    $('.m_family_wrap .m_family_site .btn_m_family').on('click', function() {
        $('.m_family_site .m_list_family').toggleClass('open');
        $(this).toggleClass('on');
    }).on('click', function() {
        
    });

})();















