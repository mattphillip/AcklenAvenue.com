
var startNumberTabs = function() {
  $('.number').click(function() {
    if ($(this).css("color") != "rgb(123, 177, 215)") {
      $('.number').css("color", "black");
      $('.binary').hide("blind", {
        direction: "horizontal"
      }, 500);
      $('.ntWrapper').hide("blind", {
        direction: "horizontal"
      }, 500);
      $(this).css("color", "#7BB1D7");
      $(this).prev().show("blind", {
        direction: "horizontal"
      }, 500);
      $(this).next().show("blind", {
        direction: "horizontal"
      }, 500);
    }

  });
  $($('.number')[0]).click();
};

var startCircularAvatars = function() {
  $(".circularGray").hover(function() {
    $(this).stop().animate({
      'opacity': 0
    }, 500);
  });
  $(".circularGray").mouseout(function() {
    $(this).stop().animate({
      'opacity': 1
    }, 500);
  });
};

var drawTriangle = function() {
  var elem = document.getElementById('triangle');
  canvasWidth = $(window).width();
  canvasHeight = $(window).height();
  elem.width = canvasWidth;
  elem.height = canvasHeight;
  if (elem && elem.getContext) {
    var context = elem.getContext('2d');
    if (context) {
      elem = $(elem);
      canvasWidth = elem.css("width").substring(0, elem.css("width").length - 2);
      canvasHeight = elem.css("height").substring(0, elem.css("height").length - 2);

      console.log(canvasWidth);
      console.log(canvasHeight);

      context.fillStyle = '#282828';
      context.strokeStyle = '#282828';
      context.lineWidth = 4;

      context.beginPath();
      // Start from the top-left p
      context.moveTo(parseInt(canvasWidth), 0); // give the (x,y) coordinates
      context.lineTo(parseInt(canvasWidth), parseInt(canvasHeight));
      context.lineTo(0, parseInt(canvasHeight));
      context.lineTo(parseInt(canvasWidth), 0);

      // Done! Now fill the shape, and draw the stroke.
      // Note: your shape will not be visible until you call any of the two methods.
      context.fill();
      context.stroke();
      context.closePath();
    }
  } else {

  }
};

isChrome = function() { 
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}

function scrollTo(section)
{
	if (section){
		var sectionOffset = $(section).offset();
		$('html, body').animate({scrollTop: sectionOffset.top }, 2000);
	}
	
};

startScroll = function(){
	function filterPath(string) {
  return string
    .replace(/^\//,'')
    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
    .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');
 
  $('a[href*=#]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    if (  locationPath == thisPath
    && (location.hostname == this.hostname || !this.hostname)
    && this.hash.replace(/#/,'') ) {
      var $target = $(this.hash), target = this.hash;
      if (target) {
		if (target == '#home' || target == '#work' || target == '#services' || target == '#team'){
        var targetOffset = $target.offset().top;
		console.log('target: '+target + 'offset:' +targetOffset);
			$(this).click(function(event) {
          		event.preventDefault();
          		$(scrollElem).animate({scrollTop: targetOffset}, 2000, 'easeInOutQuint', function() {
            		location.hash = target;
          		});
        	});
		}
      }
    }
  });
 
  function scrollableElement(els) {
    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
      var el = arguments[i],
          $scrollElement = $(el);
      if ($scrollElement.scrollTop()> 0) {
        return el;
      } else {
        $scrollElement.scrollTop(1);
        var isScrollable = $scrollElement.scrollTop()> 0;
        $scrollElement.scrollTop(0);
        if (isScrollable) {
          return el;
        }
      }
    }
    return [];
  }
}

startMethodEffect = function(){
	$("#method-desc").click(function() {
		if($("#service-desc").is(":visible")){
			$("#service-desc").hide("slow");
			$("#services h1").animate({left:400},1000);
			$("#services .method").show();
			$("#services .method").animate({left:-110},1000);
		}
		else
		{
			$("#service-desc").show("slow");
			$("#services h1").animate({left:0},1000);
			$("#services .method").animate({left:-1100},1000,function(){
				$("#services .method").hide();
			});
			
		}
		return false;
	});
}

startServiceEffect = function(){
	$("#service-desc").click(function() {
		if($("#method-desc").is(":visible")){
			$("#method-desc").hide("slow");
			$("#services h1").animate({left:-400},1000);
			$("#services .service").show();
			$("#services .service").animate({left:250},1000);
		}
		else
		{
			$("#method-desc").show("slow");
			$("#services h1").animate({left:0},1000);
			$("#services .service").animate({left:1092},1000, function(){
				$("#services .service").hide();
			});
			
		}
		
		return false;
	});
}

$(document).ready(function() {
 // startGraph();
  startNumberTabs();

  $('#home').css("height", $(window).height()-100);
  var s = skrollr.init();
  
  
  startCircularAvatars();
  drawTriangle();
  
  startScroll();
  
  
  startMethodEffect();
  startServiceEffect();
});


$(window).resize(function() {
  drawTriangle();
});