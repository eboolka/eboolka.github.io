$(function(){
	
	/* choose color */

	$(".color_item").click(function() {
		$(".color_item").removeClass("active");
		$(this).addClass("active");
	});
	
	/* scroll */
	
	$("a[href^='#']").click(function() {
		var _href = $(this).attr("href");
		if (_href == "#order_form") {
			var color = $(this).parents(".model_block").find(".color_item.active").attr("data-color");
			var model = $(this).parents(".model_block").find("h3").text();
			if (color) {
				$("input[name='comment'").val(model.replace(/['"ТЋТЛ]/g, '')+" ("+color+")");
			}
			else {
				$(".color_item").removeClass("active");
				$("input[name='comment'").val(model);
			}
		}
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	/* sliders */

	$(".slider").owlCarousel({
		items: 1,
		loop: true,
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		nav: true,
		navText: ""
	});

	$(".reviews_list").owlCarousel({
		smartSpeed: 300,
		mouseDrag: false,
		pullDrag: false,
		dots: false,
		navText: "",
		responsive: {
			0: {
				items: 1,
				nav: true,
				loop: true
			},
			640: {
				items: 2,
				margin: 20,
				nav: true,
				loop: true
			},
			960: {
				items: 3,
				margin: 20,
				nav: false,
				loop: false
			}
		}
	});

});