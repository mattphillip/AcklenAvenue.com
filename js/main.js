
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
		  console.log('target: '+target);
		if (target == '#home' || target == '#work' || target == '#services' || target == '#team' || target == '#contact'){
        console.log('paso target: '+target);
	    var targetOffsetTop = $target.offset().top;
		var targetOffsetRight = $target.offset().right;
		//console.log('target: '+target + 'offset:' +targetOffset);
			$(this).click(function(event) {
          		event.preventDefault();
				
				/*$(scrollElem).animate({scrollRight: targetOffsetRight}, 2000, 'easeInOutQuint', function() {
            		location.hash = target;
          		});
          		$(scrollElem).animate({scrollTop: targetOffsetTop}, 2000, 'easeInOutQuint', function() {
            		location.hash = target;
          		});*/
				$(scrollElem).animate({scrollRight: targetOffsetRight}, 2000);
          		$(scrollElem).animate({scrollTop: targetOffsetTop}, 2000);
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
			$("#services .method").animate({left:230},1000);
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
			$("#services .service").animate({left:350},1000);
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

startServiceContentEffect = function(){
	$("#agile-consulting-title").click(function(){
	  $("#custom-software-desc").hide("slow");
	  $("#custom-software-title").addClass("notActive");
	  
	  $("#nearshore-desc").hide("slow");
	  $("#nearshore-title").addClass("notActive");
	  
	  $("#agile-consulting-desc").show("slow");
	  $("#agile-consulting-title").removeClass("notActive");
	  return false;
  });
  
  $("#custom-software-title").click(function(){
	  $("#agile-consulting-desc").hide("slow");
	  $("#agile-consulting-title").addClass("notActive");
	  
	  $("#nearshore-desc").hide("slow");
	  $("#nearshore-title").addClass("notActive");
	  
	  $("#custom-software-desc").show("slow");
	  $("#custom-software-title").removeClass("notActive");
	  return false;
  });
  
  $("#nearshore-title").click(function(){
	  $("#agile-consulting-desc").hide("slow");
	  $("#agile-consulting-title").addClass("notActive");
	  
	  $("#custom-software-desc").hide("slow");
	  $("#custom-software-title").addClass("notActive");
	  
	  $("#nearshore-desc").show("slow");
	  $("#nearshore-title").removeClass("notActive");
	  return false;
  });
  
  $("#agile-consulting-desc").show();
  $("#custom-software-desc").hide();
  $("#nearshore-desc").hide();
}

startMethodContentEffect = function(){
	$("#project-about-title").click(function(){
	  $("#which-piece-desc").hide("slow");
	  $("#which-piece-title").addClass("notActive");
	  
	  $("#continous-feedback-desc").hide("slow");
	  $("#continous-feedback-title").addClass("notActive");
	  
	  $("#wanted-desc").hide("slow");
	  $("#wanted-title").addClass("notActive");
	  
	  $("#functionality-desc").hide("slow");
	  $("#functionality-title").addClass("notActive");
	  
	  $("#project-about-desc").show("slow");
	  $("#project-about-title").removeClass("notActive");
	  return false;
  });
  
  $("#which-piece-title").click(function(){
	  $("#project-about-desc").hide("slow");
	  $("#project-about-title").addClass("notActive");
	  
	  $("#continous-feedback-desc").hide("slow");
	  $("#continous-feedback-title").addClass("notActive");
	  
	  $("#wanted-desc").hide("slow");
	  $("#wanted-title").addClass("notActive");
	  
	  $("#functionality-desc").hide("slow");
	  $("#functionality-title").addClass("notActive");
	  
	  
	  $("#which-piece-desc").show("slow");
	  $("#which-piece-title").removeClass("notActive");
	  return false;
  });
  
  $("#continous-feedback-title").click(function(){
	  $("#project-about-desc").hide("slow");
	  $("#project-about-title").addClass("notActive");
	  
	  $("#which-piece-desc").hide("slow");
	  $("#which-piece-title").addClass("notActive");
	  
	  $("#wanted-desc").hide("slow");
	  $("#wanted-title").addClass("notActive");
	  
	  $("#functionality-desc").hide("slow");
	  $("#functionality-title").addClass("notActive");
	  
	  $("#continous-feedback-desc").show("slow");
	  $("#continous-feedback-title").removeClass("notActive");
	  
	  return false;
  });
  
  $("#wanted-title").click(function(){
	  $("#project-about-desc").hide("slow");
	  $("#project-about-title").addClass("notActive");
	  
	  $("#which-piece-desc").hide("slow");
	  $("#which-piece-title").addClass("notActive");
	  
	  $("#continous-feedback-desc").hide("slow");
	  $("#continous-feedback-title").addClass("notActive");
	  
	  $("#functionality-desc").hide("slow");
	  $("#functionality-title").addClass("notActive");
	  
	  $("#wanted-desc").show("slow");
	  $("#wanted-title").removeClass("notActive");
	  return false;
  });
  
  $("#functionality-title").click(function(){
	  $("#project-about-desc").hide("slow");
	  $("#project-about-title").addClass("notActive");
	  
	  $("#which-piece-desc").hide("slow");
	  $("#which-piece-title").addClass("notActive");
	  
	  $("#continous-feedback-desc").hide("slow");
	  $("#continous-feedback-title").addClass("notActive");
	  
	  $("#wanted-desc").hide("slow");
	  $("#wanted-title").addClass("notActive");
	  
	  $("#functionality-desc").show("slow");
	  $("#functionality-title").removeClass("notActive");
	  return false;
  });
  
  
  
  $("#continous-feedback-desc").show();
  $("#functionality-desc").hide();
  $("#wanted-desc").hide();
  $("#which-piece-desc").hide();
  $("#project-about-desc").hide();
}

$(document).ready(function() {
 // startGraph();
  startNumberTabs();

  $('#home').css("height", $(window).height()-100);
  var s = skrollr.init();
  
  
  startCircularAvatars();
  drawTriangle();
  
  //startScroll();
  
  startServiceContentEffect();
  startMethodContentEffect();
  
  
 
  $("#blog-menu").click(function(){
	  $('html, body').animate({scrollTop: $("#blog").offset().top}, "slow");
      $('html, body').animate({scrollLeft: $("#blog").offset().left}, "slow");
	  return false;
  });
  
  $("#home-menu").click(function(){
	   $('html, body').animate({scrollLeft: -$("#home").offset().left}, "slow");
	  $('html, body').animate({scrollTop: $("#home").offset().top}, "slow");
     
	  return false;
  });
  
  $("#services-menu").click(function(){
	  $('html, body').animate({scrollLeft: -$("#services").offset().left}, "slow");
	  $('html, body').animate({scrollTop: $("#services").offset().top}, "slow");
	  return false;
  });
  
  $("#work-menu").click(function(){
	  $('html, body').animate({scrollLeft: -$("#work").offset().left}, "slow");
	  $('html, body').animate({scrollTop: $("#work").offset().top}, "slow");
	  return false;
  });
  
  $("#team-menu").click(function(){
	  $('html, body').animate({scrollLeft: -$("#team").offset().left}, "slow");
	  $('html, body').animate({scrollTop: $("#team").offset().top}, "slow");
	  return false;
  });
  
  $("#contact-menu").click(function(){
	  $('html, body').animate({scrollLeft: -$("#contact").offset().left}, "slow");
	  $('html, body').animate({scrollTop: $("#contact").offset().top}, "slow");
	  return false;
  });
  
  $('#archive>li>a').click(function(){
        $(this).next('ul').slideToggle();
		return false;
  });
  
  
  startMethodEffect();
  startServiceEffect();
});


$(window).resize(function() {
  drawTriangle();
});