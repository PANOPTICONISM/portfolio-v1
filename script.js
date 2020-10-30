//Set count for total number of sections
$('.section-count').text($('.section').size());

//Increase counter i when section passes
$('.section').each(function (i,el) {
  var waypoint = new Waypoint({
	 element: el,
	 offset: '50%',
	 handler: function (direction) {
		if (direction == 'down') {
			 $('.section-current').text(i+1);
		} else {
			 $('.section-current').text(i);
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