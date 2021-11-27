var hid = document.getElementById("home-id");
var htag = document.getElementById("home-tag");
var main = document.getElementById("main");

hid.addEventListener("click",function(e){
	e.preventDefault();
	main.scrollTo({
		behavior:"smooth",
		top:0
	});
},false);

var pid = document.getElementById("profile-id");
var parea = document.getElementById("profile-area");
pid.addEventListener("click",function(e){
	e.preventDefault();
	main.scrollTo({
		behavior:"smooth",
		top: parea.offsetTop
	});
},false);

var wid = document.getElementById("work-id");
var warea = document.getElementById("work-area");
wid.addEventListener("click",function(e){
	e.preventDefault();
	main.scrollTo({
		behavior:"smooth",
		top: warea.offsetTop
	});
},false);

