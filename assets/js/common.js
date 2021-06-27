$(document).ready(function() {
	$("#header").load("header.html");
	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
			wide:      [ '961px',  '1880px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
	});

	$window.on('load', function() {
		window.setTimeout(function() {
			$body.removeClass('is-preload');
		}, 100);
	});
	
	// Toggle.
	$(
		'<div id="headerToggle">' +
			'<a href="#header" class="toggle"></a>' +
		'</div>'
	).appendTo($body);

	// Header.
	$('#header').panel({
		delay: 500,
		hideOnClick: true,
		hideOnSwipe: true,
		resetScroll: true,
		resetForms: true,
		side: 'left',
		target: $body,
		visibleClass: 'header-visible'
	});
});

function isEmpty(value) {
     if(value == "" || value == null || value == undefined || ( value != null && typeof value == "object" && !Object.keys(value).length )) {
         return true;
     } else {
         return false;
     }
 }