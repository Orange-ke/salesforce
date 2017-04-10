$(function() {
   "use strict";
    
  $(document).ready(function() {

        $("input.form-control").focus(function() {
        	$(this).animate({width: "500px"});
        })

        $("input.form-control").blur(function() {
        	$(this).animate({width: "200px"});
        })

	    $("#slider_").hover(
		    function() {
		      $(".slds-r1,.slds-r2,.slds-r4").addClass("slds-first").css("background","#D32F2F");
		      $(".slds-r3,.slds-r5,.slds-r7").addClass("slds-second").css("background","#388E3C");
		      $(".slds-r6,.slds-r8,.slds-r9").addClass("slds-third").css("background","#512DA8");
		    },function() {
		      $(".slds-r1,.slds-r2,.slds-r4").removeClass("slds-first").css("background","#54698D");
		      $(".slds-r3,.slds-r5,.slds-r7").removeClass("slds-second").css("background","#54698D");
		      $(".slds-r6,.slds-r8,.slds-r9").removeClass("slds-third").css("background","#54698D");
		    }
	    )

	    $("#slider_").click(function() {
	        $("#slider_").toggleClass("slider_effect");
	        $(".toolbox").toggleClass("toolbox_effect");
	        $(".slide_content_").toggleClass("slide_content_effect");
	        $(".chatter_").toggleClass("chatter_effect");
	    });
	    
	    $(".slide_content_ a").click(function() {
	    	if ($(".slide_content_ a").hasClass("active")) {
	    		$(".slide_content_ a").removeClass("active");
	    	}
	    	$(this).addClass("active");
	    })

	    $("a.chatter").click(function() {
	    	document.title = "Chatter | Salesforce";
	        $(".chatter_").load('chatter.html');
	    })

  });  
});	