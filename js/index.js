$(window).resize(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
})
$(function(){
	$('html').css({'font-size':$(window).width()/3.9 + "px"});
	
	
	var swiper = new Swiper('.carousel .swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    
    
	
    $('#openBtn').click(function(){
    	$('.info').fadeIn(100);
    	$('.mask').fadeIn(100);
    })
    $('.mask').click(function(){
    	$('.info').fadeOut(100);
    	$('.mask').fadeOut(100);
    })
})