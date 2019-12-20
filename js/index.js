const btn = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.collapse.navbar-collapse');

btn.addEventListener('click', () => {
	menu.classList.toggle('is--active');
});

jQuery(function () {
	jQuery(window).scroll(function () {
	  if (jQuery(this).scrollTop() > 300) {
	   $("#menu").addClass("menuDiferente");
	  } else {
	   $("#menu").removeClass("menuDiferente");
	  }
	});
  });



