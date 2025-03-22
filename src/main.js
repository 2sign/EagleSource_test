import "./style.css";
import "../public/js/jquery-3.7.1.min.js"
// import { append_header } from '/src/js/header.js';
// import { append_footer } from '/src/js/footer.js';


//header, footer 추가 (페이지 로드 시 실행)
// document.addEventListener('DOMContentLoaded', () => {
// 	const current_page = window.location.pathname;
// 	const excluded_pages = [
// 		'/',
// 		'/src/pages/community-qna.html',
// 	];
//
// 	if(!excluded_pages.includes(current_page)){
// 		append_header();
// 		append_footer();
// 	}
// });




//photo frame slide
var mainSwiper = new Swiper("#photo_frame_sld", {
	spaceBetween: 0,
	centeredSlides: true,
	loop: true,
	effect: "fade",
	navigation: {
		nextEl: ".sld_btn[data-type='next']",
		prevEl: ".sld_btn[data-type='prev']",
	},
});



//scroll event
window.addEventListener("scroll", function () {
	const sc_top = window.scrollY || document.documentElement.scrollTop;
	const body = document.querySelector("body");

	if(sc_top > 0){
		body.classList.add("scroll");
	}else{
		body.classList.remove("scroll");
	}
});


//[mobile] header - gnb btn
document.querySelector("#header .m_gnb_btn").addEventListener("click", function() {
	const body = document.body;
	const menuOpen = body.classList.contains("nav_open");

	if(!menuOpen){
		body.classList.add('scroll', 'nav_open');
	}else{
		body.classList.remove('nav_open');
	}
});


//[pc] header - nav hover
document.addEventListener('DOMContentLoaded', function() {
	const header = document.getElementById('header');
	const deps1Li = document.querySelectorAll('#nav ul.deps_1 > li');
	const originalHeaderHeight = header.offsetHeight;

	deps1Li.forEach(item => {
		item.addEventListener('mouseenter', function() {
			const deps2Wrap = this.querySelector('.deps_2_wrap');
			if (deps2Wrap) {
				const deps2Height = deps2Wrap.offsetHeight;
				header.style.height = `${originalHeaderHeight + deps2Height + 30}px`; //30px 추가 여유 공간
				header.classList.add('hover');
			}
		});

		item.addEventListener('mouseleave', function() {
			header.style.height = `${originalHeaderHeight}px`; //원래 높이로 되돌리기
			header.classList.remove('hover');
		});
	});

	//창 크기 조정 시 원래 높이로 되돌리기
	window.addEventListener('resize', function() {
		header.style.height = `${originalHeaderHeight}px`;
	});
});

