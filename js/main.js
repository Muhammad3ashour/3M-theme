$(function (){
    
$('.nav-item').click(function(){
   $(this).addClass('active').siblings().removeClass('active'); 
});
    
$(window).scroll(function(){
   if($(this).scrollTop() > 60)
       {
           $('.navbar').addClass('fixed');
       }
    else{
        $('.navbar').removeClass('fixed')
    }
});    
    
$('.header').height($(window).height());
    
var typed = new Typed('.typed', {
        strings: [" We are Creative Studio..", "We are always happy to help you." , "our main advantage is.." , "Quality, Quickness and Creative."],
        typeSpeed: 30,
        loop:true,
        backSpeed: 50,
        backDelay: 500,
        startDelay: 500,
	});
    $('.header .head').each(function(){
       $(this).css('padding-top', ($('.header').height() - $('.head').height()) / 2); 
    });

    var mixer = mixitup('.work-mixer', {
    animation: {
    duration: 600
        }
    });
    $('.list li').click(function(){
       $(this).addClass('active').siblings().removeClass('active'); 
    });








});

/* start about section */

$("#btn").click(function(){
    
    $(".boxData").slideToggle(500);
    $(".box1Data").slideUp(500);
    $(".box2Data").slideUp(500);
    $(".box3Data").slideUp(500);
    $(".box4Data").slideUp(500);
    
})
$("#btn1").click(function(){
    
    $(".box1Data").slideToggle(500);
    $(".boxData").slideUp(500);
    $(".box2Data").slideUp(500);
    $(".box3Data").slideUp(500);
    $(".box4Data").slideUp(500);
    
    
})
$("#btn2").click(function(){
    
    $(".box2Data").slideToggle(500);
    $(".boxData").slideUp(500);
    $(".box1Data").slideUp(500);
    $(".box3Data").slideUp(500);
    $(".box4Data").slideUp(500);
    
    
})
$("#btn3").click(function(){
    
    $(".box3Data").slideToggle(500);
    $(".box2Data").slideUp(500);
    $(".box1Data").slideUp(500);
    $(".box4Data").slideUp(500);
    
})
$("#btn4").click(function(){
    
    $(".box4Data").slideToggle(500);
    $(".box3Data").slideUp(500);
    $(".box2Data").slideUp(500);
    $(".box1Data").slideUp(500);
    $(".boxData").slideUp(500);
    
})

/* start about section */
