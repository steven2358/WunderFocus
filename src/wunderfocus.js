var elements = new Array("#lists",".addtask","h2.completed",".completed-tasks","#task-actions","#detail",".tasks li");

var elements_visible = $("#lists").is(":visible");

if (elements_visible) {
	// SET BG
	$(".main-interface").css("background-color", "#FFF");
	
	// TOGGLE ELEMENTS
	for ( var i in elements ) {
		$(elements[i]).hide();
	}
	$(".tasks li:first-child").show();
	
	// LAYOUT
	$("#tasks").css("right","300px");
	
	// STYLE
	$(".tasks li:first-child").css("position", "relative").css("top", "200px").css("height", "100%");;

	$(".tasks li:first-child .task-body").css("-webkit-box-shadow","none").css("box-shadow","none");
	$(".tasks li:first-child .task-body").css("background","none").css("border-radius","none");
	$(".tasks li:first-child .task-body").css("box-sizing","none").css("height","100%");
	
	$(".tasks li:first-child .task-body .task-separator").hide();
	$(".tasks li:first-child .task-body .task-star").hide();
	
	$(".tasks li:first-child .task-body .title-wrapper").css("overflow","visible").css("white-space","normal");
	$(".tasks li:first-child .task-body .title-wrapper").css("line-height","30px");
	$(".tasks li:first-child .task-body .title-wrapper .title").css("font-size","40px");
	
//	var checky = $(".tasks li:first-child .task-body .title-wrapper").height()/2 - 4;
//	$(".tasks li:first-child .task-body .task-checkbox").css("position","relative").css("top", checky);
}
else {
	// RESET BG
	$(".main-interface").removeAttr("style");

	// RESET ELEMENTS
	for (var i in elements){
		$(elements[i]).removeAttr("style");
	}

	// RESET LAYOUT
	$("#tasks").removeAttr("style");
	
	// STYLE
	$(".tasks li:first-child").removeAttr("style");
	
	$(".tasks li:first-child .task-body").removeAttr("style");
	
	$(".tasks li:first-child .task-body .task-separator").removeAttr("style");
	$(".tasks li:first-child .task-body .task-star").removeAttr("style");
	
	$(".tasks li:first-child .task-body .title-wrapper").removeAttr("style");
	$(".tasks li:first-child .task-body .title-wrapper .title").removeAttr("style");
}
