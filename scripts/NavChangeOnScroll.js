const navbar = document.getElementsByClassName("navbar")[0];
const bannerSection = document.querySelector(".banner-area");

const offsetMargin = 200;
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


window.addEventListener('scroll', event => {
	let navigationLinks = document.querySelectorAll('.navbar .nav a');
	let fromTop = window.scrollY;
	
	navigationLinks.forEach(link => {
		let section = document.querySelector(link.hash);
		
		if(section.offsetTop - offsetMargin <= fromTop &&
			section.offsetTop + section.offsetHeight - offsetMargin > fromTop
			&& (window.innerHeight + window.scrollY) < document.body.offsetHeight)
			{
				link.classList.add('nav-active');
			} 
			else
			{
				link.classList.remove('nav-active');
			}
	});
	
	if((window.innerHeight + window.scrollY) >= document.body.offsetHeight)
	{
		navigationLinks[navigationLinks.length - 1].classList.add('nav-active');
	}
});