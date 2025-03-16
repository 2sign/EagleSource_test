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
		let header = $("#header");
		let deps_1_li = $("#nav ul.deps_1 > li");
		let window_w = $(window).width();

		deps_1_li.off("mouseenter mouseleave");
		header.css("height", "auto");

		if(window_w >= 1024){
			deps_1_li.each(function() {
				let header_h = header.outerHeight();
				let deps_2_h = $(this).find(".deps_2_wrap").outerHeight();

				$(this).on({
					"mouseenter" : function(e){
						header.addClass("hover");

						if($(this).find(".deps_2_wrap").length > 0){
							header.css("height", header_h + deps_2_h + 30);
						}else{
							header.css("height", header_h);
						}
					},
					"mouseleave" : function(){
						header.removeClass("hover");
						header.css("height", header_h);
					}
				})
			});
		}
	}
	header_h_fnc();

	$(window).resize(function() {
		header_h_fnc();
	});





})