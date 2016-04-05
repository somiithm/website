const $ = require("jquery");
var slider = function () {

	    /* SET PARAMETERS */
	    var change_img_time     = 5000; 
	    var transition_speed    = 500;

	    var simple_slideshow    = $("#main-slider"),
	        listItems           = simple_slideshow.children('li'),
	        listLen             = listItems.length,
	        i                   = 0,

	        changeList = function () {

	            listItems.eq(i).fadeOut(transition_speed, function () {
	                i += 1;
	                if (i === listLen) {
	                    i = 0;
	                }
	                listItems.eq(i).fadeIn(transition_speed);
	            });

	        };

	    listItems.not(':first').hide();
	    setInterval(changeList, change_img_time);

	};

var backgroundAnimator = function(){
	var ch_time = 300;
	var body = $('body');

	var app = $('#app');
	color = {r : 0, g:0,b:0};

	var f = true;

	var change = function(){
		if(f){
			if(!forward(color)){
				f = false;
			}
		} else {
			if(!backward(color)){
				f = true;
			}
		}
		rgbString = "rgb(" + color.r + "," + color.g + "," + color.b + ")"; 
		app.css("background-color",rgbString);
	}

	var forward = function(color){
		if(color.r < 255){
			color.r = color.r+5;
		} else if(color.g < 255) {
			color.g = color.g+5;
		} else if(color.b < 255) {
			color.b = color.b+5;
		} else {
			return false;
		}
		return true;
	}

	var backward = function(color){
		if(color.r > 0){
			color.r = color.r-5;
		} else if(color.g > 0) {
			color.g = color.g-5;
		} else if(color.b > 0) {
			color.b = color.b-5;
		} else {
			return false;
		}
		return true;
	}
	setInterval(change,ch_time);
}


module.exports =  function(){
	$('#app').html(require("raw!jade-html!./welcome.jade"));
	slider();
	// backgroundAnimator();
}
	

