//slider
var slideIndex = 0;
$(document).ready(function showSlides(){

    var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000);
});



$(document).ready(function(){
  $(".question-content").slideUp();
      $(".item-1").click(function(){
        $(".content-1").slideToggle();
        $(".icon-1").toggleClass("icon-rotate");
      });

      $(".item-2").click(function(){
        $(".content-2").slideToggle();
        $(".icon-2").toggleClass("icon-rotate");
      });

      $(".item-3").click(function(){
        $(".content-3").slideToggle();
        $(".icon-3").toggleClass("icon-rotate");
      });

      $(".item-4").click(function(){
        $(".content-4").slideToggle();
        $(".icon-4").toggleClass("icon-rotate");
      });

      $(".item-5").click(function(){
        $(".content-5").slideToggle();
        $(".icon-5").toggleClass("icon-rotate");
      });

      $(".item-6").click(function(){
        $(".content-6").slideToggle();
        $(".icon-6").toggleClass("icon-rotate");
      });

      $(".item-7").click(function(){
        $(".content-7").slideToggle();
        $(".icon-7").toggleClass("icon-rotate");
      });

      $(".item-8").click(function(){
        $(".content-8").slideToggle();
        $(".icon-8").toggleClass("icon-rotate");
      });

      $(".item-9").click(function(){
        $(".content-9").slideToggle();
        $(".icon-9").toggleClass("icon-rotate");
      });

      $(".item-10").click(function(){
        $(".content-10").slideToggle();
        $(".icon-10").toggleClass("icon-rotate");
      });
});

$(document).ready(function(){
  $(".explain").click(function(){
    $(".explain-content").slideToggle();
    $(".side-box-header span").toggleClass("arrow-down arrow-up");
  });
});


$(document).ready(function(){
  $('.picZoomer').picZoomer();

  $('.piclist li').on('click',function(event){
    var $pic = $(this).find('img');
    $('.picZoomer-pic').attr('src',$pic.attr('src'));
    $(".piclist li img").toggleClass("active deactive");
  });
});


$(document).ready(function(){
  var tempscroll = 10;

  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    if(scrollTop > tempscroll){
      $(".js-nav").slideUp();
      tempscroll = scrollTop;
    }
    else{
      if (scrollTop < tempscroll) {
        $(".js-nav").slideDown();
        tempscroll = scrollTop;
      }
    }
  });
});
