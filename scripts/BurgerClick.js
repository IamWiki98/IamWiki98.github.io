const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav');
	
	burger.addEventListener('click', ()=>{
		nav.classList.toggle('nav-show');
		
		burger.classList.toggle('burger-animation');
	});
}

navSlide();