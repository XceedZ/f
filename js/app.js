window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

function progressBarScroll() {
	let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
		height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
		scrolled = (winScroll / height) * 100;
	document.getElementById("progressBar").style.width = scrolled + "%";
  }
  
  window.onscroll = function () {
	progressBarScroll();
  };

  window.addEventListener('scroll', () => {
	const progressBar = document.getElementById('progressBar');
	const scrollY = window.scrollY;
	const windowHeight = window.innerHeight;
	const documentHeight = document.body.clientHeight;
	const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
  
	progressBar.style.width = scrollPercent + '%';
  
	if (scrollPercent >= 91) {
	  progressBar.style.backgroundColor = '#2f645d'; // Ganti warna saat mencapai 50%
	} else if (scrollPercent >= 40) {
		progressBar.style.backgroundColor = '#9d822b';
	}
	else {
	  progressBar.style.backgroundColor = '#3b524f'; // Kembalikan warna asli jika kurang dari 50%
	}
  });
  