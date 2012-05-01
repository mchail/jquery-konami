(function($) {

	function seekAndDestroy() {
		$('html').css('cursor', 'crosshair');
		$('div, span, applet, object, iframe, \
      h1, h2, h3, h4, h5, h6, p, blockquote, pre, \
      a, abbr, acronym, address, big, cite, code, \
      del, dfn, em, img, ins, kbd, q, s, samp, \
      small, strike, strong, sub, sup, tt, var, \
      b, u, i, center, \
      dl, dt, dd, ol, ul, li, \
      fieldset, form, label, legend, \
      table, caption, tbody, tfoot, thead, tr, th, td, \
      article, aside, canvas, details, embed, \
      figure, figcaption, footer, header, hgroup,  \
      menu, nav, output, ruby, section, summary, \
      time, mark, audio, video').click(function(e) {
      	e.stopPropagation();
      	if (console && console.log) {
	      	console.log('pew');
      	}
      	$(this).fadeOut('fast');
      });
	}

	$.fn.konami = function(callback, code) {
		if(code == undefined) code = "38,38,40,40,37,39,37,39,66,65";
		if(callback == undefined) callback = seekAndDestroy;

		return this.each(function() {
			var kkeys = [];
			$(this).keydown(function(e){
				kkeys.push( e.keyCode );
				while (kkeys.length > code.split(',').length) {
					kkeys.shift();
				}
				if ( kkeys.toString().indexOf( code ) >= 0 ){
					$(this).unbind('keydown', arguments.callee);
					callback(e);
				}
			});
		});
	}

})(jQuery);
