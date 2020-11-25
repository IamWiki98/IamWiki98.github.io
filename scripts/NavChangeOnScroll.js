const navbar = document.getElementsByClassName("navbar")[0];
const bannerSection = document.querySelector(".banner-area");

const bannerSectionOptions = {
	rootMargin: "-200px 0px 0px 0px"
};

const bannerSectionObserver = new IntersectionObserver(function(entries, bannerSectionObserver) {
	entries.forEach(entry => {
		if(!entry.isIntersecting) {
			navbar.classList.add("nav-scrolled");
		} else {
			navbar.classList.remove("nav-scrolled");
		}
	});
},
bannerSectionOptions);

bannerSectionObserver.observe(bannerSection);