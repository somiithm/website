"use strict";
// document.querySelector('p').textContent = 'this is index page';
const navbar = require("./components/navbar.js");
const page = require("page");
const $ = require("jquery");


page("/",navbar,require("./components/welcome.js"));

page("/blog",navbar,require("./pages/blog.js"));

page("/aboutme",navbar,require("./pages/aboutme.js"));

page("/interests",navbar,require("./pages/interests.js"));


page();