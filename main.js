$(document).ready(function(){
	$('.carousel__inner').slick({
		infinite: true,
  		slidesToShow: 4,
  		slidesToScroll: 1,
		adaptiveheight: true,
		speed: 1200,
		autoplay: true,
		autoplaySpeed: 2500,
		prevArrow: '<button type="button" class="slick-prev"><img src="left.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="right.png"></button>'
		
	
});
  });
 let button = document.querySelector('.logo')
 let colorWhite = false;
 	button.addEventListener("click", function(){
		if(colorWhite === false) {
			document.querySelector('body').style.background = "tomato";
			colorWhite = true;
		} else {
			document.querySelector('body').style.background = "white";
			colorWhite = false;
		}
		
	});
