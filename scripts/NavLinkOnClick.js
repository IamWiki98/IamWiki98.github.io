
// Original JavaScript code by Chirp Internet: www.chirp.com.au
// Please acknowledge use of this code by including this header.

window.addEventListener("DOMContentLoaded", function(e) {
  var links = document.getElementsByTagName("A");
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.burger');
  for(var i=0; i < links.length; i++) {
    if(!links[i].hash) continue;
    if(links[i].origin + links[i].pathname != self.location.href) continue;
    (function(anchorPoint) {
		
      links[i].addEventListener("click", function(e) {
		let offset = document.getElementsByClassName("navbar")[0].offsetHeight;
		
		if($('.burger').css('display') != 'none')
		{
			offset = 0;
		}
		
		const offsetTop = anchorPoint.offsetTop - offset;
        window.scrollTo({
			top: offsetTop,
			behavior: "smooth"
		});
		
		if(nav.classList.contains('nav-show'))
		{
			nav.classList.remove('nav-show');
			burger.classList.toggle('burger-animation');
		}
        e.preventDefault();
      }, false);
    })(document.getElementById(links[i].hash.replace(/#/, "")));
  }
}, false);