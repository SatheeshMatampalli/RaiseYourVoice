$(document).ready(function(){
        // Can also be used with $(document).ready()
      $('.slider').flexslider({
          controlNav: false,
          directionNav: false
      });
    $('.testi-slider').flexslider({
          controlNav: false,
          directionNav: true
      });
     $('.clients-slider').flexslider({
            animation:'slide',
            controlNav: false,
            directionNav: false,
            pauseOnHover:true,
            slideshowSpeed:3000,
            itemWidth: 120,
            itemMargin: 5
      });
    $('.login').click(function(){
        $('.login-popup').addClass('active');
        return false;
    });
    $('a.disabled').click(function(){
        return false;
    });
    $('.close').click(function(){
        setTimeout(function(){$('.login-popup').removeClass('active');},200);
    });
    jQuery('.section').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInDown',
        offset: 100
       });
//    $(function() {
//      $('a([href=#])').click(function() {
//          alert("working");
//        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//          var target = $(this.hash);
//          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//          if (target.length) {
//            $('html,body').animate({
//              scrollTop: target.offset().top
//            }, 500);
//            return false;
//          }
//        }
//      });
//    });
    $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});

$(window).scroll(function(){
    if($(window).scrollTop() > 10){
        $('header').addClass('fixed');
    }
    else{
        $('header').removeClass('fixed');
    }
});

