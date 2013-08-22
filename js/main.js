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
          		scrollToSectionWithName("#team");
          });

          this.get('#/contact', function(context){
          	scrollToSectionWithName("#contact");
          });   
        });

		app.run('#/');
}

window.mobilecheck = function() {
	var check = false;
	(function(a){
		if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))
			check = true
	})(navigator.userAgent||navigator.vendor||window.opera);
	return check; 
}

$(document).ready(function() {

			if (window.mobilecheck()) {
				$('#home').css("min-height", "550px");
				$('#tagline').css("min-height","450px");
				$('#work').css('background-size',"100% 100%");
			}
			else{
				$(".slide").css("position","");
				$(".slide").css("background-attachment","fixed");
				$('#home').css("min-height", $(window).height());
				$('#tagline').css("min-height","550px");
			}


			
			

		    

			var s = skrollr.init();

			startCircularAvatars();
			drawTriangle();
			startServiceContentEffect();
			$('#quotes').cycle({ 
			    fx:      'scrollRight', 
			    delay:   -15000,
			    height: 250,
			    pause:1
			});
			
			$("#quotes .row").css("position","relative");;
			startWorkContent();
  			startSammy();


  			$("#home-menu").click(function(){
  				app.refresh();
  			});

  			$("#services-menu").click(function(){
  				app.refresh();
  			});

  			$("#work-menu").click(function(){
  				app.refresh();
  			});

  			$("#team-menu").click(function(){
  				app.refresh();
  			});

  			$("#contact-menu").click(function(){
  				app.refresh();
  			});

  			$("#submit-quote").click(function(){

  				var mailModel = {
  					Name:$("#client-name").val(),
  					Email:$("#client-email").val(),
  					ProjectName:$("#client-project").val(),
  					Message:$("#client-message").val()
  				};

  				var error = false;
  				if (mailModel.Name=="") {
  					$("#client-name").css("border-color","red");
  					error = true;
  				}
  				if (mailModel.Email == "" || !isValidEmailAddress(mailModel.Email)) {
  					$("#client-email").css("border-color","red");
  					error = true;
  				}
  				if (mailModel.ProjectName == ""){
  					$("#client-project").css("border-color","red");
  					error = true;
  				}
  				if (mailModel.Message == ""){
  					$("#client-message").css("border-color","red");
  					error = true;
  				}

  				if (error) {
  					alert('All fields are required');
  					return false;
  				};

  				$.ajax({
					type: "POST",
					url: "http://emailer-3.apphb.com/api/Mail",
					data: mailModel,
					dataType: 'application/json',
					success : function(msg){
						console.log("success: "+msg);
					}
					});

  					$("#client-name").val("");
  					$("#client-email").val("");
  					$("#client-project").val("");
  					$("#client-message").val("");
  					alert('Email sent. We will contact you soon, Thanks!')

  			 	return false;
  			});
});

function startWorkContent(){
	$("#vanderbilt").click(function(){
		$("#thrv3_content").slideUp("slow");
		$("#invivolink_content").slideUp("slow");
		$("#leankit_content").slideUp("slow");
		// $("#gifthub_content").slideUp("slow");
		$("#piims_content").slideUp("slow");
		$("#vanderbilt_content").slideDown("slow");
		return false;
	});

	$("#piims").click(function(){
		$("#thrv3_content").slideUp("slow");
		$("#vanderbilt_content").slideUp("slow");
		$("#invivolink_content").slideUp("slow");
		$("#leankit_content").slideUp("slow");
		// $("#gifthub_content").slideUp("slow");
		$("#piims_content").slideDown("slow");
		return false;
	});

	$("#invivolink").click(function(){
		$("#thrv3_content").slideUp("slow");
		$("#vanderbilt_content").slideUp("slow");
		$("#leankit_content").slideUp("slow");
		// $("#gifthub_content").slideUp("slow");
		$("#piims_content").slideUp("slow");
		$("#invivolink_content").slideDown("slow");
		return false;
	});

	$("#leankit").click(function(){
		$("#thrv3_content").slideUp("slow");
		$("#vanderbilt_content").slideUp("slow");
		// $("#gifthub_content").slideUp("slow");
		$("#piims_content").slideUp("slow");
		$("#invivolink_content").slideUp("slow");
		$("#leankit_content").slideDown("slow");
		return false;
	});

	// $("#gifthub").click(function(){
	// 	$("#thrv3_content").slideUp("slow");
	// 	$("#vanderbilt_content").slideUp("slow");
	// 	$("#piims_content").slideUp("slow");
	// 	$("#invivolink_content").slideUp("slow");
	// 	$("#leankit_content").slideUp("slow");
	// 	$("#gifthub_content").slideDown("slow");
	// 	return false;
	// });
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

function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^(("[\w-+\s]+")|([\w-+]+(?:\.[\w-+]+)*)|("[\w-+\s]+")([\w-+]+(?:\.[\w-+]+)*))(@((?:[\w-+]+\.)*\w[\w-+]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][\d]\.|1[\d]{2}\.|[\d]{1,2}\.))((25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\.){2}(25[0-5]|2[0-4][\d]|1[\d]{2}|[\d]{1,2})\]?$)/i);
    return pattern.test(emailAddress);
};


$(window).resize(function() {
  drawTriangle();
});