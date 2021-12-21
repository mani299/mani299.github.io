/* I (Paddy) used Emers code from Week 10 Wed code - manipulating the DOM and changed the var names to fit my own */

function changeCSS(){
	var x = document.getElementById("menu"); 
	x.className = "showList";
	document.getElementById("menu").style.color = "black"; //this will change the colour of my font
	x.style.fontFamily = "Tangerine";
	x.style.fontSize = "x-large";
}

//this is the function to hide the text behind the images

function hide(){
	document.getElementById("menu").className = "hideList";
}

//I added a 2 after menu and showlist for the 2nd image, and so on until the 6th image

function changeCSS2(){
	var x = document.getElementById("menu2"); x.className = "showList2";
	document.getElementById("menu2").style.color = "black"; //change color
	x.style.fontFamily = "Tangerine";
	x.style.fontSize = "x-large";
}

function hide2(){
	document.getElementById("menu2").className = "hideList2";
}

function changeCSS3(){
	var x = document.getElementById("menu3"); x.className = "showList3";
	document.getElementById("menu3").style.color = "black"; //change color
	x.style.fontFamily = "Tangerine";
	x.style.fontSize = "x-large";
}

function hide3(){
	document.getElementById("menu3").className = "hideList3";
}

function changeCSS4(){
	var x = document.getElementById("menu4"); x.className = "showList4";
	document.getElementById("menu4").style.color = "black"; //change color
	x.style.fontFamily = "Tangerine";
	x.style.fontSize = "x-large";
}

function hide4(){
	document.getElementById("menu4").className = "hideList4";
}

function changeCSS5(){
	var x = document.getElementById("menu5"); x.className = "showList5";
	document.getElementById("menu5").style.color = "black"; //change color
	x.style.fontFamily = "Tangerine";
	x.style.fontSize = "x-large";
}

function hide5(){
	document.getElementById("menu5").className = "hideList5";
}

function changeCSS6(){
	var x = document.getElementById("menu6"); x.className = "showList6";
	document.getElementById("menu6").style.color = "black"; //change color
	x.style.fontFamily = "Tangerine";
	x.style.fontSize = "x-large";
}

function hide6(){
	document.getElementById("menu6").className = "hideList6";
}