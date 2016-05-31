define(['jquery', 'scrollMonitor/scrollMonitor'], function ( $, scrollMonitor ) {

	function lazyLoad(elem, options){
		var watcher, src = elem.getAttribute('data-lazy-src');

		if (src === "") {
			return;
		}

		elem.removeAttribute('data-lazy-src');
		options.offsets = 100;
		watcher = scrollMonitor.create( elem, options );

		watcher.enterViewport(function() {
			var image;
			watcher.destroy();
			$(elem).css({
				"display": "none",
				"background-image": "url('"+src+"')"
			});
			image = document.createElement('img');
			image.src = src;
			image.onload = function () {
				$(elem).fadeIn(1000);
			};
		});
	}


	return function ( context, options ) {
		var context = context || document.body,
			options = options || {};
		$('div[data-lazy-src]', context).each(function( index, elem ) {
			lazyLoad(elem, options);
		});
	};

});
