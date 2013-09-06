if($('#focus_overlay').length === 0) {
	create_overlay($);
	create_text($);
	create_button($);
}
else {
	remove_overlay($);
}

function create_overlay($) {
	var d = document.createElement('div');
	$(d).css({
		background: '#EEE',
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		'text-align': 'center',
		zIndex: 1000
	}).attr('id', 'focus_overlay');
	$('body').append(d);
}

function create_text($) {
	var mytext = $(".tasks li:first-child .task-body .title-wrapper .title").text();
	var d = document.createElement('div');
	$(d).css({
		'font-size': '40px',
		'font-weight': 'bold',
		'width': '70%',
		'margin': '0px auto',
		'padding': '200px 40px 20px 40px'
	}).attr('id', 'focus_text').text(mytext);
	$('#focus_overlay').append(d);
}

function create_button($) {
	var d = document.createElement('input');
	d.setAttribute("type","button");
	d.setAttribute("value","Done");
	$(d).css({
		'-webkit-appearance': 'button',
		'position': 'relative',
		'-moz-box-shadow': '2px 2px 6px 0px #e8e8e8',
		'-webkit-box-shadow': '2px 2px 6px 0px #e8e8e8',
		'box-shadow': '2px 2px 6px 0px #e8e8e8',
		'height': '1.85em',
		'border': '1px solid #7a7a7a',
		'-webkit-border-radius': '3px',
		'-moz-border-radius': '3px',
		'border-radius': '3px',
		'background-color': '#f3f3f3',
		'padding': '0 12px',
		'color': '#555',
		'-webkit-text-size-adjust': '140%',
		'font-size': '20px',
		'cursor': 'pointer',
		'font-weight': 'bold',
		'margin': '20px'
	}).attr('id', 'focus_button');
	$('#focus_overlay').append(d);
	
	$(d).hover( function(){
		$(this).css({
			'background-color': '#fafafa',
			'color': '#616161'
		});
	},
	function(){
		$(this).css({
			'background-color': '#f3f3f3',
			'color': '#555'
		});
	});
	
	$(d).mousedown( function(){
		$(this).css({
			'top': '1px',
			'right': '-1px',
			'-moz-box-shadow': '1px 1px 4px 0px #e8e8e8',
			'-webkit-box-shadow': '1px 1px 4px 0px #e8e8e8',
			'box-shadow': '1px 1px 4px 0px #e8e8e8'
		});
	});
	$(d).mouseup( function(){
		$(this).css({
			'top': '0px',
			'right': '0px',
			'-moz-box-shadow': '2px 2px 6px 0px #e8e8e8',
			'-webkit-box-shadow': '2px 2px 6px 0px #e8e8e8',
			'box-shadow': '2px 2px 6px 0px #e8e8e8'
		});
	});
}

function remove_overlay($) {
	$('#focus_overlay').remove();
}