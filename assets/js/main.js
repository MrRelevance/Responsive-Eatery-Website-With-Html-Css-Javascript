/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
	const header = document.getElementById("header");
	const logo = document.querySelector(".nav__logo");
	// When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 100) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
	// if(this.scrollY >= 100) logo.classList.add('new-logo'); else logo.classList.remove('new-logo')
}
window.addEventListener("scroll", scrollHeader);

/*==================== HIDE / SHOW HEADER ON SCROLL ====================*/
// const body = document.body;
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
// 	const currentScroll = window.pageYOffset;
// 	if (currentScroll <= 0) {
// 		body.classList.remove("scroll-header");
// 		return;
// 	}

// 	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
// 		body.classList.remove("scroll-header");
// 		body.classList.add("scroll-down");
// 	} else if (
// 		currentScroll < lastScroll &&
// 		body.classList.contains("scroll-down")
// 	) {
// 		body.classList.remove("scroll-down");
// 		body.classList.add("scroll-header");
// 	}
// 	lastScroll = currentScroll;
// });

/*==================== SWIPER SERVICE ====================*/
let swiper = new Swiper(".service__cards", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	loop: true,
	spaceBetween: 0,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	coverflowEffect: {
		rotate: 0,
		stretch: -60,
	},
});

// const mediaQuery = window.matchMedia('(min-width: 576px)')

// function handleTabletChange(e) {

//     if (e.matches) {
//         let swiper = new Swiper(".service__cards", {
//             effect: "coverflow",
//             grabCursor: true,
//             centeredSlides: true,
//             slidesPerView: "auto",
//             loop: true,
//             spaceBetween: 0,
//             coverflowEffect: {
//                 rotate: 0,
//                 stretch: -90,
//             },
//         })
//     }

// }

// mediaQuery.addEventListener(handleTabletChange)

// handleTabletChange(mediaQuery)

/*==================== MENU FILTER SECTION ====================*/
const filterBtnsContainer = document.querySelector(".menu-filter");
filterBtnsContainer.addEventListener("click", (e) => {
	if (
		e.target.classList.contains("menu-filter-btn") &&
		!e.target.classList.contains("active")
	) {
		filterBtnsContainer.querySelector(".active").classList.remove("active");
		e.target.classList.add("active");
		filterItems(e.target);
	}
});

function filterItems(filterBtn) {
	const selectedCategory = filterBtn.getAttribute("data-filter");
	document.querySelectorAll(".menu-item").forEach((item) => {
		const category = item.getAttribute("data-category").split(",");
		if (category.indexOf(selectedCategory) !== -1) {
			item.classList.add("show");
		} else {
			item.classList.remove("show");
		}

		// if you're displaying all the items on the menu, you'll add this ( || selectedCategory === 'main') to the if statement as shown bellow. the 'main' most time is tend to be 'all'

		/* ======================================================================================= */

		// const category = item.getAttribute('data-category').split(',');
		// if(category.indexOf(selectedCategory) !== -1 || selectedCategory === 'main') {
		//     item.classList.add('show')
		// }
		// else{
		//     item.classList.remove('show')
		// }
	});
}
// Filter Active Category Menu Item
filterItems(document.querySelector(".menu-filter-btn.active"));

/*==================== GSAP ANIMATION ====================*/
gsap.registerPlugin(ScrollTrigger);

gsap.from(".stagger", {
	opacity: 0,
	y: -50,
	duration: 1,
	stagger: 0.1,
});

gsap.from(".main__logo, .home__data-title, .home__data-subtitle", {
	opacity: 0,
	y: 50,
	duration: 1,
	stagger: 0.3,
	delay: 0.8,
});

gsap.from(".home__data", {
	opacity: 0,
	duration: 1.7,
});

gsap.from(".about-long-image, .about-right-image", {
	scrollTrigger: {
		trigger: ".about-long-image",
	},
	opacity: 0,
	duration: 1,
	stagger: 0.3,
});

gsap.from(".about__img", {
	opacity: 0,
	scale: 0,
	duration: 1,
	scrollTrigger: {
		trigger: ".about__img",
	},
	// start: 'top center'
	// stagger: .2
});

gsap.from(".about__title, .about__description, .read-more", {
	scrollTrigger: {
		trigger: ".about__title",
	},
	opacity: 0,
	duration: 1,
	delay: 0.3,
	stagger: 0.3,
});

gsap.from(".menu-bg", {
	scrollTrigger: {
		trigger: ".menu-bg",
	},
	opacity: 0,
	scale: 0,
	duration: 1,
});

gsap.from(".menu__data", {
	scrollTrigger: {
		trigger: ".menu__data",
	},
	opacity: 0,
	duration: 1.3,
	delay: 0.3,
});

gsap.from(".menu-filter-btn", {
	scrollTrigger: {
		trigger: ".menu-filter-btn",
	},
	opacity: 0,
	y: 20,
	duration: 1,
	stagger: 0.1,
});

gsap.from(".menu-item", {
	scrollTrigger: {
		trigger: ".menu-item",
	},
	opacity: 0,
	y: 20,
	duration: 1,
	stagger: 0.1,
	delay: 1,
});

gsap.from(".special__data-anim", {
	scrollTrigger: {
		trigger: ".special__data-anim",
	},
	opacity: 0,
	duration: 1.3,
	delay: 0.2,
});

gsap.from(".s__box", {
	scrollTrigger: {
		trigger: ".s__box",
	},
	opacity: 0,
	y: 50,
	duration: 1,
	stagger: 0.2,
});

gsap.from(".service__data-anim", {
	scrollTrigger: {
		trigger: ".service__data-anim",
	},
	opacity: 0,
	duration: 1.3,
	delay: 0.2,
});

gsap.from(".service__cards", {
	scrollTrigger: {
		trigger: ".service__cards",
	},
	opacity: 0,
	y: 50,
	duration: 1,
});

gsap.from(".testimonial__data", {
	scrollTrigger: {
		trigger: ".testimonial__data",
	},
	opacity: 0,
	duration: 1.3,
	delay: 0.2,
});

gsap.from(".testimonial__card", {
	scrollTrigger: {
		trigger: ".testimonial__card",
	},
	opacity: 0,
	y: 50,
	duration: 1,
	stagger: 0.2,
});

gsap.from(".f-t-img__data", {
	scrollTrigger: {
		trigger: ".f-t-img__data",
	},
	opacity: 0,
	y: 90,
	duration: 1,
	stagger: 0.5,
});

gsap.from(".home__contact", {
	scrollTrigger: {
		trigger: ".home__contact",
	},
	opacity: 0,
	duration: 1.3,
	stagger: 0.3,
});

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	// When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
