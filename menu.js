let topButton = document.getElementById('topBtn');
<<<<<<< HEAD
// let menuNav = document.getElementsByClassName('menu-nav')
=======
>>>>>>> 6a4116a9d7c303aae4767b13092b4babc6870865
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		topButton.style.display = 'block';
	} else {
		topButton.style.display = 'none';
	}
}

function backToTop() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
}
