$(function() {
    "use strict";
    
    $(document).ready(function() {

        $("input.form-control").focus(function() {
        	$(this).animate({width: "500px"});
        })

        $("input.form-control").blur(function() {
        	$(this).animate({width: "200px"});
        })

        $(".back_top").hide();

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
	        $(".chatter_content").toggleClass("chatter_content_effect");
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
        
        // ----------------------------------------------------AnimatedHeader
	    var cbpAnimatedHeader = (function() {

		    var docElem = document.documentElement,
		    	didScroll = false,
		    	changeHeaderOn = 200;

		    function init() {
		    	scrollPage();
		    	window.addEventListener( 'scroll', function( event ) {
		    		if( !didScroll ) {
		    			didScroll = true;
		    			setTimeout( scrollPage, 250 );
		    		}
		    	}, false );
		    }

		    function scrollPage() {
		    	var sy = scrollY();
		    	if ( sy >= changeHeaderOn ) {
		    		$(".cbp-af-header").addClass( 'cbp-af-header-shrink' );
		    		$(".container-fluid").hide();
		    		$(".toolbox").css("marginTop","-58px");
		    		$(".detail").css("marginTop","-58px");
		    		$(".back_top").show(300);
		    	}
		    	else {
		    		$(".cbp-af-header").removeClass( 'cbp-af-header-shrink' );
		    		$(".container-fluid").show(300);
		    		$(".toolbox").css("marginTop","0");
		    		$(".detail").css("marginTop","0");
		    		$(".back_top").hide(300);
		    	}
		    	didScroll = false;
		    }

		    function scrollY() {
		    	return window.pageYOffset || docElem.scrollTop;
		    }

		    init();
        })();
        // ----------------------------------------------------AnimatedHeader--end

        $(".link").children(".glyphicon-plus").hide();

        $(".link").mouseenter(function() {
        	$(this).children(".glyphicon-plus").show(200);
        })

        $(".link").mouseleave(function() {
        	$(this).children(".glyphicon-plus").hide(200);
        })
  });  
});	