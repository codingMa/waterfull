$(function(){
	waterfall();
})
function waterfall(){
	var screenW = $(window).width();
	var boxW = $($(".box")[0]).outerWidth();
	var cols = Math.floor(screenW/boxW);
	var waterfallW = cols*boxW+"px";
	$(".waterfall").width(waterfallW);
	var colH = [];
	$(".box").each(function(index){
		if(index<cols){
			colH[index] = $(this).outerHeight();
		} else {
			var minH = Math.min.apply(null, colH);
			var minHIndex = $.inArray(minH, colH);
			$(this).css({
				"position":"absolute",
				"top":minH+"px",
				"left":minHIndex*boxW+"px"
			})
			colH[minHIndex]+=$(this).outerHeight();
		}
	})
}
	
