import "./style.css";
import "../public/js/jquery-3.7.1.min.js"


var mainSwiper = new Swiper("#photo_frame_sld", {
	spaceBetween: 0,
	centeredSlides: true,
	loop: true,
	effect: "fade",
	navigation: {
		nextEl: ".sld_btn[type='next']",
		prevEl: ".sld_btn[type='prev']",
	},
});


$(function(){

	//scroll event
	function scroll_fnc(){
		const sc_top = window.scrollY || document.documentElement.scrollTop;
		const body = document.querySelector("body");

		if(sc_top > 0){
			body.classList.add("scroll");
		}else{
			body.classList.remove("scroll");
		}
	}
	scroll_fnc();

	window.addEventListener("scroll", function () {
		scroll_fnc();
	});


	//[mobile] header - gnb btn
	$("#header .m_gnb_btn").on({
		"click" : function(){
			const body = $("body");
			const menu_open = body.hasClass("nav_open");

			if(!menu_open){
				body.addClass("scroll nav_open");
			}else{
				body.removeClass("nav_open");
			}
		}
	})


	//[pc] header - nav hover
	function header_h_fnc(){
		let deps_1_li = $("#nav ul.deps_1 > li");
		let header = $("#header");
		let window_w = $(window).width();

		deps_1_li.off("mouseenter mouseleave");

		if(window_w >= 1024){
			header.css("height", "75px");

			deps_1_li.each(function() {
				$(this).find(".deps_2_wrap").each(function() {
					let header_h = header.outerHeight();
					let deps_2_h = $(this).innerHeight();

					$(this).parents("li").on({
						"mouseenter" : function(){
							header.addClass("hover");
							header.css("height", header_h + deps_2_h + 30);
						},
						"mouseleave" : function(){
							header.removeClass("hover");
							header.css("height", header_h);
						}
					})
				});
			});
		}else{
			header.css("height", "52px");
		}
	}
	header_h_fnc();

	$(window).resize(function() {
		header_h_fnc();
	});





})