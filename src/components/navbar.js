const $ = require("jquery");
// require("style!css!./navbar.css");

function hasBackdropBlur() {
    return (
        ('-webkit-backdrop-filter' in document.body.style) || ('backdrop-filter' in document.body.style)
    );   
}

function removeBlur(e) {
    if (!hasBackdropBlur()) {
        e.removeClass("bg-faded");
    }
}

function addBlur(e) {
    if (!hasBackdropBlur()) {
        e.addClass("bg-faded");
    }
}

function scroll() {
    const t = $("#mainTopNav");
    if (document.body.scrollTop > 40) {
        addBlur(t);
    } else {
        removeBlur(t);
    }
}

module.exports = function(ctx,next){
	var html = require("raw!jade-html!./navbar.jade");
    $("#navbar").html(html);
    changeActiveTopNav(ctx.path);
    next();
}

function changeActiveTopNav(path) {
    $("#mainTopNav li.nav-item, #mainTopNav a").removeClass('active');
    var target = $('#mainTopNav li a[href]').filter((i,e) => path.startsWith(e.getAttribute('href'))); 
    target.addClass("active").closest("li.nav-item").addClass("active");
}