window.addEventListener("load", start);

let loadScreen = document.querySelector(".spinner-box");

function start() {
	loadScreen.style.display = "none"; 
}

//Set count for total number of sections
$('.section-count').text("0" + $('.section').size());

//Increase counter i when section passes
$('.section').each(function (i,el) {
  var waypoint = new Waypoint({
	 element: el,
	 offset: '50%',
	 handler: function (direction) {
		if (direction == 'down') {
			 $('.section-current').text("0" + (i+1));
		} else {
			 $('.section-current').text("0" + i);
		}
		if (i == 0) {
			document.querySelector(".page-count p").textContent = "WELCOME";
		} else if (i == 1) {
			document.querySelector(".page-count p").textContent = "PRESENTATION";
		} else if (i == 2) {
			document.querySelector(".page-count p").textContent = "PORTFOLIO";
		} else if (i == 3) {
			document.querySelector(".page-count p").textContent = "CONTACT"; 
		}

		if (direction == 'up') {
			if (i == 02) {
				console.log("middle")
				document.querySelector(".page-count p").textContent = "PRESENTATION";
			} else if (i == 01) {
				console.log("welcome");
				document.querySelector(".page-count p").textContent = "WELCOME";
			} else if (i == 03) {
				document.querySelector(".page-count p").textContent = "PORTFOLIO";
			}
		}
	 }
  })
});

//Scroll back to top
var $toplink = $('.page-count');
$toplink.click(function() {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 500);
});