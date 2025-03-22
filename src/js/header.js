class Header extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			<div class="top_banner">
				<a href="/">
					<span class="font-newbery">[COUPON]</span><p>카카오 채널 추가 시 무료배송 쿠폰 지급</p>
				</a>
			</div>
			<header id="header">
				<div class="header_inner">
					<div id="logo">
			\t\t\t\t<img class="logo" src="/public/assets/images/logo.png" alt="HOTN'THINGS">
			\t\t\t\t<img class="logo_scroll" src="/public/assets/images/logo-scroll.png" alt="HOTN'THINGS">
			\t\t\t</div>
			
			\t\t\t<button class="m_gnb_btn"><span><i>mobile gnb btn</i></span></button>
			\t\t\t<button class="search_btn"><i class="material-symbols-outlined">search</i></button>
			\t\t\t<button class="cart_btn"><i class="material-symbols-outlined">shopping_cart</i></button>
			
			\t\t\t<nav id="nav" class="font-newbery">
			\t\t\t\t<div class="nav_inner">
			\t\t\t\t\t<ul class="deps_1">
			\t\t\t\t\t\t<li>
			\t\t\t\t\t\t\t<a href="/">ABOUT</a>
			\t\t\t\t\t\t\t<div class="deps_2_wrap">
			\t\t\t\t\t\t\t\t<ul class="deps_2">
			\t\t\t\t\t\t\t\t\t<li><a href="/">OUR BRAND</a></li>
			\t\t\t\t\t\t\t\t\t<li><a href="/">INQUIRY</a></li>
			\t\t\t\t\t\t\t\t</ul>
			\t\t\t\t\t\t\t</div>
			\t\t\t\t\t\t</li>
			\t\t\t\t\t\t<li class="shop_li">
			\t\t\t\t\t\t\t<a href="/">SHOP</a>
			\t\t\t\t\t\t\t<div class="deps_2_wrap">
			\t\t\t\t\t\t\t\t<ul class="deps_2">
			\t\t\t\t\t\t\t\t\t<li>
			\t\t\t\t\t\t\t\t\t\t<a href="/">ALL PRODUCTS</a>
			\t\t\t\t\t\t\t\t\t\t<p class="product_info font-sans">한 입으로 당신의 매 순간에 특별함을 더해주는 하랜띵스</p>
			\t\t\t\t\t\t\t\t\t</li>
			\t\t\t\t\t\t\t\t\t<li>
			\t\t\t\t\t\t\t\t\t\t<a href="/">PYOGORUFFLE</a>
			\t\t\t\t\t\t\t\t\t\t<p class="product_info font-sans">트러플 풍미와 표고의 감칠맛, 화이트와인식초의 산뜻함이 결합된 고급스러운 매운맛</p>
			\t\t\t\t\t\t\t\t\t\t<i class="arrow_right material-symbols-outlined">trending_flat</i>
			\t\t\t\t\t\t\t\t\t\t<img class="product_image" src="/public/assets/images/pyogo-snb.png" alt="">
			\t\t\t\t\t\t\t\t\t</li>
			\t\t\t\t\t\t\t\t\t<li>
			\t\t\t\t\t\t\t\t\t\t<a href="/">PARMESAN GOCHUJANG</a>
			\t\t\t\t\t\t\t\t\t\t<p class="product_info font-sans">트러플 풍미와 표고의 감칠맛, 화이트와인식초의 산뜻함이 결합된 고급스러운 매운맛</p>
			\t\t\t\t\t\t\t\t\t\t<i class="arrow_right material-symbols-outlined">trending_flat</i>
			\t\t\t\t\t\t\t\t\t\t<img class="product_image" src="/public/assets/images/parmesan-snb.png" alt="">
			\t\t\t\t\t\t\t\t\t</li>
			\t\t\t\t\t\t\t\t\t<li>
			\t\t\t\t\t\t\t\t\t\t<a href="/">XO SHRIMP</a>
			\t\t\t\t\t\t\t\t\t\t<p class="product_info font-sans">청양고추를 넣은 알싸한 간장 베이스에 새우로 감칠맛을 끌어올린 단짠 매력</p>
			\t\t\t\t\t\t\t\t\t\t<i class="arrow_right material-symbols-outlined">trending_flat</i>
			\t\t\t\t\t\t\t\t\t\t<img class="product_image" src="/public/assets/images/shrimp-snb.png" alt="">
			\t\t\t\t\t\t\t\t\t</li>
			\t\t\t\t\t\t\t\t\t<li>
			\t\t\t\t\t\t\t\t\t\t<a href="/">HOTN'THINGS KIT</a>
			\t\t\t\t\t\t\t\t\t\t<p class="product_info font-sans">일상에 미슐랭급 풍미를 선사할 하랜띵스의 대표 소스 3종 세트</p>
			\t\t\t\t\t\t\t\t\t\t<i class="arrow_right material-symbols-outlined">trending_flat</i>
			\t\t\t\t\t\t\t\t\t\t<img class="product_image" src="/public/assets/images/set-snb.png" alt="">
			\t\t\t\t\t\t\t\t\t</li>
			\t\t\t\t\t\t\t\t</ul>
			
			\t\t\t\t\t\t\t\t<p class="shop_info">
			\t\t\t\t\t\t\t\t\tHOTN'THINGS exists to spread the concept of 'HOT' around the world.<br>
			\t\t\t\t\t\t\t\t\tThis 'HOT' is not only the realm of the taste sense, but it is also the realm<br>
			\t\t\t\t\t\t\t\t\tof the sixth sense that is somehow fun and exciting.<br>
			\t\t\t\t\t\t\t\t\tExperience the thrill of everyday life created by HOTN’THINGS!
			\t\t\t\t\t\t\t\t</p>
			
			\t\t\t\t\t\t\t\t<div class="shop_image">
			\t\t\t\t\t\t\t\t\t<img src="/public/assets/images/napoli-li.jpg" alt="나폴리 맛피아">
			\t\t\t\t\t\t\t\t\t<img src="/public/assets/images/shop-all2.webp" alt="핫소스">
			\t\t\t\t\t\t\t\t</div>
			\t\t\t\t\t\t\t</div>
			\t\t\t\t\t\t</li>
			\t\t\t\t\t\t<li>
			\t\t\t\t\t\t\t<a href="/">COMMUNITY</a>
			\t\t\t\t\t\t\t<div class="deps_2_wrap">
			\t\t\t\t\t\t\t\t<ul class="deps_2">
			\t\t\t\t\t\t\t\t\t<li><a href="/">EVENT</a></li>
			\t\t\t\t\t\t\t\t\t<li><a href="/">REVIEW</a></li>
			\t\t\t\t\t\t\t\t\t<li><a href="/">RECIPES & PARING</a></li>
			\t\t\t\t\t\t\t\t\t<li><a href="/src/pages/community-napolimatfia.html">NAPOLI MATFIA</a></li>
			\t\t\t\t\t\t\t\t\t<li><a href="/">FAQ</a></li>
			\t\t\t\t\t\t\t\t\t<li><a href="/">1:1 Q&A</a></li>
			\t\t\t\t\t\t\t\t</ul>
			\t\t\t\t\t\t\t</div>
			\t\t\t\t\t\t</li>
			\t\t\t\t\t</ul>
			
			\t\t\t\t\t<ul class="utility_menu">
			\t\t\t\t\t\t<li class="search_li"><a href="">SEARCH</a></li>
			\t\t\t\t\t\t<li class="cart_li"><a href="">CART</a></li>
			\t\t\t\t\t\t<li class="joinlogin_li"><a href="">JOIN/LOGIN</a></li>
			\t\t\t\t\t</ul>
			\t\t\t\t</div>
			\t\t\t</nav>
			\t\t</div>
			\t</header>
		`;
	}
}

// 웹 컴포넌트 등록
customElements.define('common-header', Header);