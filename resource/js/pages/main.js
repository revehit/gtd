//header scrolltop
$(function(){
	var header = document.querySelector("#header");
	var headerHeight = header.offsetHeight;

	window.onscroll = function () {
	  var windowTop = window.scrollY;
		// 스크롤 세로값이 헤더높이보다 크거나 같으면 
		// 헤더에 클래스 'drop'을 추가한다
	  if (windowTop >= headerHeight) {
		header.classList.add('drop');
		header.classList.add('onn');
	  } 
	  // 아니면 클래스 'drop'을 제거
	  else {
		header.classList.remove('drop');
		header.classList.remove('onn');
		$('body').removeClass('modal-open');
	  }
	};
});


//mainvisual
	$(function(){
		var MainVisual =$('.main_banner');
		MainVisual.slick({
			slide:'li',
			autoplay:false,
			infinite:true,
			autoplaySpeed:8000,
			speed:1000,
			pauseOnHover:false,
			accessibility:true, //접근성
			//prevArrow: $('.main_banner_wrap .prev'), 
			//nextArrow: $('.main_banner_wrap .next'),
			arrows:false,
			dots:true,
			dotsClass:'mv_dots',
			appendDots: $('.mv_dots_outer'),
			draggable : true,//드래그 가능 여부 
		});

		
		$('.main_banner .btn_moreview').hover(function(){
			$(this).addClass('mov_spd02');
		}, function(){
			$(this).removeClass('mov_spd02');
		});
	});


//section02
	$(function(){	
		$('.section02 > ul > li').hover(function(){
			$(this).addClass('on');
		}, function(){
			$(this).removeClass('on');
		});
	});

		

//section03
	$(window).load(function(){
		$('.section03 .pc_show .product_list').mCustomScrollbar({
			horizontalScroll:true,
			theme:"light-thin",
			mouseWheelPixels: 1000,
		});
	});
	$(function(){
		var se03_swiper = new Swiper ('.section03 .slide.tabmo_show',{
			//pagination: '.swiper-pagination',
			pagination: {
			  el: ".swiper-pagination",
			  type: "progressbar",
			},
			slidesPerView: 2,
			centeredSlides: true,
			paginationClickable: true,
			loop: true,
			spaceBetween: 30, //슬라이드 사이 간격
			slideToClickedSlide: true, //다음 슬라이드 클릭 시 이동	

		});
	});





	
		
	
//section05
	$(function(){
	// ------- //
		var se05_swiper = new Swiper ('.section05 .slide', {
			slidesPerView: 'auto',
			spaceBetween: 40,
			//navigation arrows
			navigation:{
				nextEl:'.se05_arrow.next',
				prevEl:'.se05_arrow.prev',
			},
			observer: true,
  			observeParents: true,
			
			breakpoints:{
				1024:{
					pagination: '.swiper-pagination',
					slidesPerView: 2,
					centeredSlides: true,
					paginationClickable: true,
					loop: true,
					spaceBetween: 30, //슬라이드 사이 간격
					slideToClickedSlide: true //다음 슬라이드 클릭 시 이동
				},
				720:{
					pagination: '.swiper-pagination',
					slidesPerView: 2,
					centeredSlides: true,
					paginationClickable: true,
					loop: true,
					spaceBetween: 10, //슬라이드 사이 간격
					slideToClickedSlide: true //다음 슬라이드 클릭 시 이동
				},
			},
		});

	// ------- //
		var Section05_hov=$('.sec05_sl_outer li');
		if ($(window).width() > 1024) { // 1024보다 클 때 동작
			$(Section05_hov).on('mouseleave',function(){
				$(Section05_hov).removeClass('bg');
			});
			$(Section05_hov).on('mouseover',function(){
				$('Section05_hov').removeClass('bg');
				$(this).addClass('bg');
			});
		}
	
	});


	

	
	
	




	



