//index page//

	var area= document.getElementById("area");
	var title= document.getElementById("title");
	var choice1 =document.getElementById("choice1");
	var choice2 =document.getElementById("choice2");

window.setTimeout(function(){
	title.style.opacity=0;
	choice1.style.opacity=0;
	choice2.style.opacity=0;
	area.style.opacity= 1;
	area.style.transition = "opacity 1s";
	},1000);

window.setTimeout(function(){
	title.style.opacity = 1;
	title.style.transition ="opacity 1s"
	},2000);

window.setTimeout(function(){
	choice1.style.opacity = 1;
	choice1.style.transition ="opacity 1s"
	},3000);

window.setTimeout(function(){
	choice2.style.opacity = 1;
	choice2.style.transition ="opacity 1s"
	},4000);

//comeback page//

var comeback= document.getElementById("comebackopacity");

window.setTimeout(function(){
	comeback.style.opacity=1;
	comeback.style.transition= "opacity 1s";
	},1000);

//story page 1//

var fo= document.getElementById("gotoforest");

var ro= document.getElementById("gotoriver");

window.setTimeout(function(){
	fo.style.opacity= 1;
	}, 1000);

window.setTimeout(function(){
	ro.style.opacity= 1;
	}, 2000);

var story1div= document.getElementById("story1div");

window.setTimeout(function(){
	story1div.style.opacity= 1;
	story1div.style.transition= "opacity 1S";
	},3000);

window.setTimeout(function(){
	story1div.style.transform= "translate(50px,310px)";
	story1div.style.transition= "transform 1s";
	},4000);

window.setTimeout(function(){
	story1div.style.height= "380px";
	story1div.style.width= "700px";
	story1div.style.borderRadius="50px";
	story1div.style.transition= "width 1s, height 1s";
	},5000);

var story1words= document.getElementById("story1words");

window.setTimeout(function(){
	story1words.style.opacity= 1;
	story1words.style.transition= "opacity 1s";
	},6000);

//story2-1 forest page//

var story21div= document.getElementById("story2-1div");

window.setTimeout(function(){
	story21div.style.opacity=1;
	story21div.style.transition="opacity 1s";
	},1000);

window.setTimeout(function(){
	story21div.style.transform= "translate(550px, 15px)";
	story21div.style.transition= "transform 1s";
	},2000);

window.setTimeout(function(){
	story21div.style.height="280px";
	story21div.style.width="680px";
	story21div.style.borderRadius="50px";
	story21div.style.transition="width 1s, height 1s";
	},3000);

var story21words= document.getElementById("story2-1words");

window.setTimeout(function(){
	story21words.style.opacity=1;
	story21words.style.transition="opacity 1s";
	},4000);

var cliffo= document.getElementById("gotocliff");

var villageo= document.getElementById("gotovillage");

window.setTimeout(function(){
	cliffo.style.opacity= 1;
	}, 5000);

window.setTimeout(function(){
	villageo.style.opacity= 1;
	}, 6000);

//story2-2 river page//

var story22div= document.getElementById("story2-2div");

window.setTimeout(function(){
	story22div.style.opacity=1;
	story22div.style.transition="opacity 1s";
	},1000);

window.setTimeout(function(){
	story22div.style.transform= "translate(600px,350px)";
	story22div.style.transition= "transform 1s";
	},2000);

window.setTimeout(function(){
	story22div.style.height="300px";
	story22div.style.width="650px";
	story22div.style.borderRadius="50px";
	story22div.style.transition="width 1s, height 1s";
	},3000);

var story22words= document.getElementById("story2-2words");

window.setTimeout(function(){
	story22words.style.opacity=1;
	story22words.style.transition="opacity 1s";
	},4000);

var wonderlando= document.getElementById("gotowonderland");

var moono= document.getElementById("gotomoon");

window.setTimeout(function(){
	wonderlando.style.opacity= 1;
	}, 5000);

window.setTimeout(function(){
	moono.style.opacity= 1;
	}, 6000);