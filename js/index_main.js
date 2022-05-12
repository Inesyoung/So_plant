$(function () {
	$(".plants, .sub").mouseover(function () {
		$(".sub").stop().slideDown("fast")
	}); //plants mouseover
	$(".plants, .sub").mouseleave(function () {
		$(".sub").stop().slideUp("fast")
	}); //plants mouseover

	$(window).scroll(function () {
		var ws = $("html, body").scrollTop();
		if (ws > 30) {
			$(".header").addClass("on");
		} else {
			$(".header").removeClass("on");
		}
	}); //window scroll

	var time = setInterval(leftmoving, 3000);
	$(".left").click(function () {
		leftmoving()
	}); //left click
	$(".right").click(function () {
		rightmoving()
	});
	$(".plant_img li, .pos").hover(function () {
		clearInterval(time);
	}, function () {
		time = setInterval(leftmoving, 3000);
	})

	function leftmoving() {
		$(".plant_img").animate({
			left: "-=500px"
		}, 1000, function () {
			$(".plant_img li").first().appendTo(".plant_img");
			$(".plant_img").css({
				left: "+=500px"
			})
		})
	};

	function rightmoving() {
		$(".plant_img").animate({
			left: "+=500px"
		}, 1000, function () {
			$(".plant_img li").last().prependTo(".plant_img");
			$(".plant_img").css({
				left: "-=500px"
			})
		})
	};

	$(".plant_img li").mouseover(function () {
		$(this).children("p").stop().fadeIn("fast");
	});
	$(".plant_img li").mouseleave(function () {
		$(this).children("p").stop().fadeOut("fast");
	});

	
	var time2 = setInterval(snsmove, 3000);

	function snsmove() {

		$(".sns").animate({
			left: "-=500px"
		}, 1000, function () {
			$(".sns li").first().appendTo(".sns");
			$(".sns").css({
				left: "+=500px"
			})
		})
	};
	$(".mag1").hover(function(){
		$(".more").stop().fadeIn("fast");
	},function(){
		$(".more").stop().fadeOut("fast");
	});//
	
	$(".mag3").hover(function(){
		$(".more3").stop().fadeIn("fast");
	},function(){
		$(".more3").stop().fadeOut("fast");
	});//
	$(".mag2").hover(function(){
		$(".more2").stop().fadeIn("fast");
	},function(){
		$(".more2").stop().fadeOut("fast");
	});//
	$(".mag4").hover(function(){
		$(".more4").stop().fadeIn("fast");
	},function(){
		$(".more4").stop().fadeOut("fast");
	});//
	$(".chatbox").css("display","none");
	$(".chat a img").click(function(e){
		e.preventDefault();
	
	/*	$(".chatbox").css({display:"block"});
		$(".chatbox").animate({width:"300px",height:"300px"},300)*/
		$(".chatbox").fadeIn();
	});//chat img click
	$(".chatbox button").click(function(){
		$(".chatbox").fadeOut();
	});
	$(".popup button").click(function(){
		$(".popup").css({display:"none"})
	});//

}); //전체 쿼리
