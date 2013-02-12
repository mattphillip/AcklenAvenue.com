$(document).ready(function(){
	$('section[data-type="background"]').each(function(){
		var $bgobj = $(this);
		$(windows).scroll(function(){
			var yPos = -($windows.scrollTop() / $bgobj.data('speed'));
			var coords = '50%'+yPos+'px';
			$bgobj.css({backgroundPosition: coords});
		});
	});
});
