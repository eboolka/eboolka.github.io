$(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 600);
        return false;
    });
    
    // times = function(){         
    //     now = new Date();  
    //     hour = 24-now.getHours();
    //     hour = ((hour+'').length==1?hour='0'+hour:hour)+'';
    //     minu = 60-now.getMinutes();
    //     minu = ((minu+'').length==1?minu='0'+minu:minu)+'';
    //     secu = 60-now.getSeconds(); 
    //     secu = ((secu+'').length==1?secu='0'+secu:secu)+'';
    //     $('.timer-box-v1').html('<div class="timer-num"><span>'+ hour[0]+ '</span><span>'+ hour[1]+ '</span><small>часов</small></div><div class="timer-num"><span>'+ minu[0]+ '</span><span>'+ minu[1]+ '</span><small>минут</small></div><div class="timer-num"><span>'+ secu[0]+ '</span><span>'+ secu[1]+ '</span><small>секунд</small></div>');
    // }   
    // times();                                              
    // setInterval(times,1000);
    
    var now = new Date(),
        tovCol = now.getHours()*2 + Math.floor(now.getMinutes()/25);
    $('.main-reminder>span').html(55 - tovCol); 
    $('.main-sell>span').html(50*now.getHours() + tovCol); 


    
    $('.rev-block-v3 .container').slick({
      infinite: true,
      autoplay: false,
      adaptiveHeight: true,
      dots: false,
      arrows: true,
      fade: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<span data-role="none" class="slick-prev animate" aria-label="Previous" tabindex="0" role="button"></span>',
      nextArrow: '<span data-role="none" class="slick-next animate" aria-label="Next" tabindex="0" role="button"></span>',
      responsive: [
        {
          breakpoint: 976,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 659,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
          }
        }
      ]
    });  
});
 