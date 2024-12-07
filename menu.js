let topButton = document.getElementById('topBtn');

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
