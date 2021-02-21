$(function(){

    $("header").slideDown(700);
    
    $(".main").slideDown(1500,function(){
        $(".main-title h1,.main-title h3").fadeIn(1000);
        $(".about,.video,.news,.contact").show();
    });

    $(".nav-item ul a").click(function(){
        var target = $($(this).attr("href")).offset().top;
        target -= 90;
        $("html,body").animate({scrollTop: target}, 1000);
        return false;
    });

    $(window).scroll(function (){
        $('.fadein').each(function(){
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > elemPos - windowHeight + 100){
                $(this).addClass('scrollin');
            }
        });
    });

    
});
