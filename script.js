window.addEventListener("load", start);

let loadScreen = document.querySelector(".spinner-box");

function start() {
	loadScreen.style.display = "none";
}

//Set count for total number of sections
$i('.section-count').text("0" + $i('.section').size());

//Increase counter i when section passes
$i('.section').each(function (i, el) {
	var waypoint = new Waypoint({
		element: el,
		offset: '50%',
		handler: function (direction) {
			if (direction == 'down') {
				$i('.section-current').text("0" + (i + 1));
			} else {
				$i('.section-current').text("0" + i);
			}
			if (i == 0) {
				document.querySelector(".page-count p").textContent = "WELCOME";
			} else if (i == 1) {
				document.querySelector(".page-count p").textContent = "PRESENTATION";
			} else if (i == 2) {
				document.querySelector(".page-count p").textContent = "EXPERIENCE";
			} else if (i == 3) {
				document.querySelector(".page-count p").textContent = "PORTFOLIO";
			} else if (i == 4) {
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
					document.querySelector(".page-count p").textContent = "EXPERIENCE";
				} else if (i == 04) {
					document.querySelector(".page-count p").textContent = "PORTFOLIO";
				}
			}
		}
	})
});

//Scroll back to top
var $jtoplink = $j('.page-count');
$jtoplink.click(function () {
	$i('html, body').animate({
		scrollTop: $j('body').offset().top
	}, 100);
});

// TYPEWRITER
$j(document).ready(function () {

	typing(0, $j('.typewriter-text').data('text'));

	function typing(index, text) {

		var textIndex = 1;

		var tmp = setInterval(function () {
			if (textIndex < text[index].length + 1) {
				$i('.typewriter-text').text(text[index].substr(0, textIndex));
				textIndex++;
			} else {
				setTimeout(function () {
					deleting(index, text)
				}, 2000);
				clearInterval(tmp);
			}

		}, 150);
	}

	function deleting(index, text) {

		var textIndex = text[index].length;

		var tmp = setInterval(function () {

			if (textIndex + 1 > 0) {
				$i('.typewriter-text').text(text[index].substr(0, textIndex));
				textIndex--;
			} else {
				index++;
				if (index == text.length) {
					index = 0;
					document.querySelector("h1").textContent = "MULTIMEDIA"
				} else {
					index++;
				}
				if (index == text.length) {
					index = 1;
					document.querySelector("h1").textContent = "FRONTEND"
				}
				typing(index, text);
				clearInterval(tmp);
			}

		}, 150)
	}

});

// filters
filterSelection("all")

function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("project");
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
}
// Show filtered elements
function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];
		}
	}
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
let showAll = document.querySelector(".active");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		showAll.classList.remove("active");
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", " ");
		this.className += " active";
	});
}