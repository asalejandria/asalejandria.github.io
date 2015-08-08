$(document).ready(function () {

  $(".ball").click(function () {
    var originalMargin = $(this).css("margin-left");

    var marginNum = originalMargin.slice(0, originalMargin.length - 2);

    var newMargin = parseInt(marginNum) + 20;

    $(this).css("margin-left", newMargin + "px");

   


  });

  $(".tab").click(function () {
  	$(".content").hide();

  	var clickedTab = $(this).attr("data-contentid");
  	$(clickedTab).show();
  	console.log(clickedTab);
  })

});