var $ = require('jquery');

module.exports = function(){
	$('#app').html(require('raw!jade-html!./blog.jade'));
}