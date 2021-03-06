$(document).ready(function() {
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

	var urlParams = location.search.split(/[?&]/).slice(1).map(function(paramPair) {
    	return paramPair.split(/=(.+)?/).slice(0, 2);
    }).reduce(function(obj, pairArray) {
        obj[pairArray[0]] = pairArray[1];
        return obj;
    }, {});
	
	
	
	console.log(urlParams);
	
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