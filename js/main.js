var outerSwiper;
var isOnBlogSection = false;
var windowWidth = $(window).width();
var app;

function startCircularAvatars(){
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

function drawTriangle()
{
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
      context.moveTo(0, 0); // give the (x,y) coordinates
      context.lineTo(parseInt(canvasWidth), parseInt(canvasHeight));
      context.lineTo(0, parseInt(canvasHeight));
      context.lineTo(0, 0);

      // Done! Now fill the shape, and draw the stroke.
      // Note: your shape will not be visible until you call any of the two methods.
      context.fill();
      context.stroke();
      context.closePath();
    }
  } else {

  }
};

var scrollToSectionWithName = function(sectionName){
	console.log($(sectionName).offset().top);
	if (sectionName == "#team") {
		$('html, body').animate({scrollTop: $(sectionName).offset().top-200}, "slow");
	}
	else
	{
		$('html, body').animate({scrollTop: $(sectionName).offset().top}, "slow");
	}
	
};

function startMethodEffect(){
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

function startServiceEffect(){
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

function startServiceContentEffect(){
	$("#agile-consulting-title").click(function(){

	  if ($("#custom-software-desc").is(":visible")) {
	  	$("#custom-software-desc").hide("slow");
	  	$("#custom-software-title").addClass("notActive");
	  };	
	  
	  if ($("#nearshore-desc").is(":visible")) {
	  	$("#nearshore-desc").hide("slow");
	    $("#nearshore-title").addClass("notActive");
	  };

	  $("#custom-software").animate({paddingTop: "220px"},"slow");
	  $("#agile-consulting-desc").show("slow");
	  $("#agile-consulting-title").removeClass("notActive");
	  return false;
  });
  
  $("#custom-software-title").click(function(){
  	if ($("#agile-consulting").is(":visible")) {
  		$("#agile-consulting-desc").hide("slow");
	    $("#agile-consulting-title").addClass("notActive");
  	};
	  
	if ($("#nearshore").is(":visible")) {
		$("#nearshore-desc").hide("slow");
	    $("#nearshore-title").addClass("notActive");
	};
	  
	  $("#custom-software").animate({paddingTop: "280px"},"slow");
	  $("#custom-software-desc").show("slow");
	  $("#custom-software-title").removeClass("notActive");
	  return false;
  });
  
  $("#nearshore-title").click(function(){
  	if ($("#agile-consulting-desc").is(":visible")) {
  		$("#agile-consulting-desc").hide("slow");
	    $("#agile-consulting-title").addClass("notActive");
  	};
	  
	if ($("#custom-software-desc").is(":visible")) {
		$("#custom-software-desc").hide("slow");
	    $("#custom-software-title").addClass("notActive");
	};
	  
	  $("#custom-software").animate({paddingTop: "160px"},"slow");
	  $("#nearshore-desc").show("slow");
	  $("#nearshore-title").removeClass("notActive");
	  return false;
  });
  
  $("#agile-consulting").css("padding-top","0");
  $("#custom-software").css("padding-top","280");
  $("#nearshore").css("padding-top","0");
  $("#agile-consulting-desc").hide();
  $("#custom-software-desc").show();
  $("#nearshore-desc").hide();
}

function startMethodContentEffect(){
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

function startArchiveToggle(){
	$('#archive>li>a').click(function(){
        $(this).next('ul').slideToggle();
		return false;
  });
}

function startSammy(){
	app = $.sammy('#content', function() {
      
          console.log("sammy");

          this.get('#/', function(context) {
          		scrollToSectionWithName("#home");
          });

          this.get('#/services', function(context){
          		scrollToSectionWithName("#services");
          });

          this.get('#/work', function(context){
          		scrollToSectionWithName("#work");
      	  });

          this.get('#/team', function(context){
          	    console.log("go to team");

          		scrollToSectionWithName("#team");
          });

          this.get('#/contact', function(context){
          	scrollToSectionWithName("#contact");
          });   
        });

		app.run('#/');
}

$(document).ready(function() {

$('#home').css("height", $(window).height());

			var s = skrollr.init();
			startCircularAvatars();
			drawTriangle();
			startServiceContentEffect();
			$('#quotes').cycle({ 
			    fx:      'scrollRight', 
			    delay:   -15000,
			    height: 500,
			    pause:1
			});
			$("#quotes .row").css("position","relative");
			startWorkContent();
  			startSammy();

  			$("#submit-quote").click(function(){
  				

				  // var hasError = false;
				  // var emailReg = "/^([w-.]+@([w-]+.)+[w-]{2,4})?$/";

				  // var clientEmail = $("#client-email").val();
				  // if(clientEmail == '') {
				  //  $("#client-email").after('<span class="error">You forgot to enter your email address</span>');
				  //  hasError = true;
				  // } else if(!emailReg.test(clientEmail)) {
				  //  $("#client-email").after('<span class="error">Enter a valid email address.</span>');
				  //  hasError = true;
				  // }

				  // var clientName = $("#client-name").val();
				  // if (clientName == '') {
				  // 	$("#client-name").after('<span class="error">You forgot to enter your name.</span>');
				  // 	hasError = true;
				  // }

				  // var clientProject = $("#client-project").val();
				  // if (clientProject == '') {
				  // 	$("#client-project").after('<span class="error">You forgot to enter the project name.</span>');
				  // 	hasError = true;
				  // }

				  // var clientMessage = $("#client-message").val();
				  // if (clientMessage == '') {
				  // 	$("#client-message").after('<span class="error">You forgot to enter the project name.</span>');
				  // 	hasError = true;
				  // }
				  // else if (clientMessage.length < 140) {
				  // 	$("#client-message").after('<span class="error">We think you need to add more description to it.</span>');
				  // 	hasError = true;
				  // }

				  $.ajax({
					type: "POST",
					url: "http://api.postmarkapp.com/email",
					data: { name: "John", location: "Boston" }
					}).done(function( msg ) {
						
					});



  				return false;
  			});
});

function startWorkContent(){
	$("#vanderbilt").click(function(){
		$("#thrv3_content").slideUp("slow");
		$("#invivolink_content").slideUp("slow");
		$("#leankit_content").slideUp("slow");
		$("#gifthub_content").slideUp("slow");
		$("#piims_content").slideUp("slow");
		$("#vanderbilt_content").slideDown("slow");
		return false;
	});

	$("#piims").click(function(){
		$("#thrv3_content").slideUp("slow");
		$("#vanderbilt_content").slideUp("slow");
		$("#invivolink_content").slideUp("slow");
		$("#leankit_content").slideUp("slow");
		$("#gifthub_content").slideUp("slow");
		$("#piims_content").slideDown("slow");
		return false;
	});

	$("#invivolink").click(function(){
		$("#thrv3_content").slideUp("slow");
		$("#vanderbilt_content").slideUp("slow");
		$("#leankit_content").slideUp("slow");
		$("#gifthub_content").slideUp("slow");
		$("#piims_content").slideUp("slow");
		$("#invivolink_content").slideDown("slow");
		return false;
	});

	$("#leankit").click(function(){
		$("#thrv3_content").slideUp("slow");
		$("#vanderbilt_content").slideUp("slow");
		$("#gifthub_content").slideUp("slow");
		$("#piims_content").slideUp("slow");
		$("#invivolink_content").slideUp("slow");
		$("#leankit_content").slideDown("slow");
		return false;
	});

	$("#gifthub").click(function(){
		$("#thrv3_content").slideUp("slow");
		$("#vanderbilt_content").slideUp("slow");
		$("#piims_content").slideUp("slow");
		$("#invivolink_content").slideUp("slow");
		$("#leankit_content").slideUp("slow");
		$("#gifthub_content").slideDown("slow");
		return false;
	});
}

function loadAllSectionsAndScrollToSection(sectionName){
        $('#content').empty();
        $('#content').load('allsections.html', function(){
        	var s = skrollr.init();
			startCircularAvatars();
			drawTriangle();
			startServiceContentEffect();
			$('#quotes').cycle({ 
			    fx:      'scrollRight', 
			    delay:   -6000,
			    height: 400,
			});
			$("#quotes .row").css("position","relative");
			scrollToSectionWithName(sectionName);
        });
};


$(window).resize(function() {
  drawTriangle();
});