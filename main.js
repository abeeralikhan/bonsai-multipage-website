const navControl = document.querySelector('.navbar-controls');
const navLogoActive = document.querySelector('.navbar-open.logo');
const navLogoInActive = document.querySelector('.navbar-close.logo');
const navControlActive = document.querySelector('.navbar-open.control');
const navControlInActive = document.querySelector('.navbar-close.control');

const navLink = document.querySelectorAll('.nav-link');

const navMenu = document.querySelector('.navbar-menu');

navControl.addEventListener('click', () => {
	if (navControlActive.classList.contains('hidden')) {
		navControlActive.classList.remove('hidden');
		navLogoActive.classList.remove('hidden');

		navControlInActive.classList.add('hidden');
		navLogoInActive.classList.add('hidden');
		navMenu.classList.add('hidden');
		return;
	}

	navControlActive.classList.add('hidden');
	navLogoActive.classList.add('hidden');

	navControlInActive.classList.remove('hidden');
	navLogoInActive.classList.remove('hidden');
	navMenu.classList.remove('hidden');
});

navLink.forEach((li) => {
	li.addEventListener('click', () => {
		navControlActive.classList.add('hidden');
		navLogoActive.classList.add('hidden');

		navControlInActive.classList.remove('hidden');
		navLogoInActive.classList.remove('hidden');
		navMenu.classList.remove('hidden');
	});
});
