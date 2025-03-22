class Footer extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
			\t<footer id="footer">
			\t\t<div class="footer_inner">
			\t\t\t<div class="f_logo">
			\t\t\t\t<a href="/" class="">
			\t\t\t\t\t<img src="/public/assets/images/logo.png" alt="HOTN'THINGS" />
			\t\t\t\t</a>
			\t\t\t</div>
			\t\t\t<div class="f_cs">
			\t\t\t\t<p>채팅상담 운영 | 1522-1874</p>
			\t\t\t\t<p>Mon-Fri 10:00 - 17:00 (Lunch: pm 12:20 - 13:30)
			\t\t\t\t<p>Sat &amp; Sun, Holiday off</p>
			\t\t\t</div>
			\t\t\t<ul class="f_menu">
			\t\t\t\t<li><a href="">제휴 파트너 문의</a></li>
			\t\t\t\t<li><a href="">채팅상담</a></li>
			\t\t\t\t<li><a href="">도움말</a></li>
			\t\t\t\t<li><a href="">브랜드 소개</a></li>
			\t\t\t</ul>
			\t\t\t<div class="f_info">
			\t\t\t\t(주)티엠스마일ㅣ대표자명 이준호ㅣ04779 202호 서울특별시 성동구 상원1길 5 (성수동1가)<br>
			\t\t\t\t사업자등록번호 172-87-01834 | 통신판매업 신고번호 2024-서울성동-1329<br>
			\t\t\t\t개인정보보호책임자 : 김수민ㅣ <a href="/member/agreement.html">이용약관</a> ㅣ <a href="/member/privacy.html">개인정보처리방침</a>
			\t\t\t</div>
			\t\t</div>
			\t</footer>
		`;
	}
}

// 웹 컴포넌트 등록
customElements.define('common-footer', Footer);