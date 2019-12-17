const btn = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.collapse.navbar-collapse');

btn.addEventListener('click', () => {
	menu.classList.toggle('is--active');
});

