$(document).ready(function() {
	$("#less").hide();
	$("#moreInfo").hide();
	
	$("a.fancy").fancybox();
});

$("#more").hover(function() { document.body.style.cursor = 'pointer'; },
				 function() { document.body.style.cursor = 'default'; });
				 
$("#less").hover(function() { document.body.style.cursor = 'pointer'; },
				 function() { document.body.style.cursor = 'default'; });
				 
$(".normalPreview").hover(function(){$(this).stop(true, false);
									$(this).animate({
											opacity: 1.0
											}, 400);
									},
						  function(){$(this).animate({
											opacity: 0.5
											}, 200);
									});
$("#more").click(function(){
	toggleMoreInfo("#more", "#less");
});

$("#less").click(function(){
	toggleMoreInfo("#less", "#more");
});

function toggleMoreInfo(toBeHidden, toBeShown) {
	$("#moreInfo").animate(
	{
		height: 'toggle'
	}, 700, "easeInSine", function(){ $(toBeHidden).hide(500); $(toBeShown).show(500); }
	);
}
