// STYLES

var overlay_css = {
	background: '#EEE',
	width: '100%',
	height: '100%',
	position: 'absolute',
	top: 0,
	left: 0,
	'text-align': 'center',
	zIndex: 1000
};

var tasktext_css = {
	'font-size': '40px',
	'font-weight': 'bold',
	'width': '70%',
	'margin': '0px auto',
	'padding': '200px 40px 20px 40px'
};

var button_css = {
	'-webkit-appearance': 'button',
	'position': 'relative',
	'-moz-box-shadow': '2px 2px 6px 0px #e8e8e8',
	'-webkit-box-shadow': '2px 2px 6px 0px #e8e8e8',
	'box-shadow': '2px 2px 6px 0px #e8e8e8',
	'height': '1.85em',
	'border': '1px solid #7a7a7a',
	'-webkit-border-radius': '4px',
	'-moz-border-radius': '4px',
	'border-radius': '4px',
	'background-color': '#f3f3f3',
	'padding': '0 12px',
	'color': '#555',
	'-webkit-text-size-adjust': '140%',
	'font-size': '20px',
	'cursor': 'pointer',
	'font-weight': 'bold',
	'margin': '20px 20px 12px'
};

var button_hover_css = {
	'background-color': '#fafafa',
	'color': '#616161'
};

var button_mousedown_css = {
	'top': '1px',
	'right': '-1px',
	'-moz-box-shadow': '1px 1px 4px 0px #e8e8e8',
	'-webkit-box-shadow': '1px 1px 4px 0px #e8e8e8',
	'box-shadow': '1px 1px 4px 0px #e8e8e8'
};

var button_alldone_css = {
	'height': '2em',
	'font-size': '25px',
	"color": "green",
	'-webkit-border-radius': '5px',
	'-moz-border-radius': '5px',
	'border-radius': '5px'
};


var smalltext_css = {
	'font-size': '10px',
	'font-style': 'italic',
	'margin': '0 auto'
};

// CREATE

function create_overlay($) {
	var d = document.createElement('div');
	$(d).css(overlay_css).attr('id', 'focus_overlay');
	$('body').append(d);
}

function create_tasktext($) {
	var d = document.createElement('div');
	$(d).css(tasktext_css).attr('id', 'focus_tasktext');
	$('#focus_overlay').append(d);
}

function create_button($) {
	var d = document.createElement('input');
	d.setAttribute("type","button");
	$(d).css(button_css).attr('id', 'focus_button');
	$('#focus_overlay').append(d);
	
	$(d).hover( function(){
		$(this).css(button_hover_css);
	},
	function(){
		$(this).css(button_css);
	});
	
	$(d).mousedown( function(){
		$(this).css(button_mousedown_css);
	});
	$(d).mouseup( function(){
		$(this).css(button_css);
		mark_done_actions($);
	});
}

function create_smalltext($) {
	var d = document.createElement('div');
	$(d).css(smalltext_css).attr('id', 'focus_smalltext');
	$('#focus_overlay').append(d);
}


// UPDATE

function update_task_text($) {
	if (get_number_of_items($) > 0) {
		var mytext = get_task_text($,1);
		var mytext_html = convert_urls_to_html(mytext);
		$('#focus_tasktext').html(mytext_html);
	}
	else {
		remove_task_text($);
	}
}

function update_button_text($) {
	if (get_number_of_items($) > 0) {
		$('#focus_button').val("Done");
	} else {
		mark_button_alldone($);
	}
}

function mark_button_alldone($) {
	$('#focus_overlay').css({"padding-top": "200px"});
	$('#focus_button').val("All done!").css(button_alldone_css);
	$("#focus_smalltext").text("Click to close.");
	$("#focus_button").hover( function(){
		$(this).css(button_hover_css);
	},
	function(){
		$(this).css(button_alldone_css);
	});
	$("#focus_button").mouseup( function(){
		remove_overlay($);
	});
}

function mark_done_actions($) {
	if (get_number_of_items($)>1){
		var mytext = get_task_text($,2);
		var mytext_html = convert_urls_to_html(mytext);
		$('#focus_tasktext').html(mytext_html);
		update_button_text($);
	} else {
		remove_task_text($);
		mark_button_alldone($);
	}
	mark_current_done($);
}

// try to detect urls. Source: http://stackoverflow.com/a/37687/1221212
function convert_urls_to_html(text) {
	var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
	return text.replace(exp,"<a href='$1' target=\"_blank\">$1</a>"); 
}


// REMOVE

function remove_overlay($) {
	$('#focus_overlay').remove();
}

function remove_task_text($) {
	$('#focus_tasktext').remove();
}

// WUNDERLIST-SPECIFIC FUNCTIONS
 
function get_number_of_items($) {
	return $(".tasks").children().length;
}

function get_task_text($, ind){
	return $(".tasks li:nth-child("+ind+") .task-body .title-wrapper .title").text();
}

function mark_current_done($) {
	$(".tasks li:first-child .task-body .task-checkbox").trigger('click');
}

// MAIN

if($('#focus_overlay').length === 0) {
	create_overlay($);
	create_tasktext($);
	create_button($);
	create_smalltext($);
	
	update_task_text($);
	update_button_text($);
}
else {
	remove_overlay($);
}