$('.menu-btn').on('click',function(){
  $('menu').css({left:'0'});
  $('main').on('click',function(){
    $('menu').css({left:'-80%'});
  });
});


$('.slider').slick({
  autoplay: true,
  arrows: false,
  centerMode: true,
  centerPadding:'110px',
  autoplaySpeed: 3000,
  speed: 1000,
  infinite: true,
  slidesToShow:1, //1024px以上のサイズに適用
　　prevArrow:'<div class="prev"><i class="fas fa-caret-left"></i></div>',
　　nextArrow:'<div class="next"><i class="fas fa-caret-right"></i></div>',

   responsive: [
    {
      breakpoint: 1024, // 768~1023px以下のサイズに適用
         settings: {
            slidesToShow:3
         }
     }, {
       breakpoint: 768, // 480〜767px以下のサイズに適用
         settings: {
            slidesToShow: 2
          }
      },{
       breakpoint: 480, // 〜479px以下のサイズに適用
          settings: {
             slidesToShow: 1,
             centerMode: false
          }
       }
   ]
 });

 $('.fa-bars').on('click',function(){
   $('.overlay').fadeIn();
   $('.fa-times-circle').on('click',function(){
     $('.overlay').fadeOut();
   });
 });
