let wantedTabellWidth = 1000;
function calcPWeb() {
	let windowWidth = window.innerWidth;
	if (windowWidth > wantedTabellWidth) {
		document.getElementById('tabell').style.width = wantedTabellWidth;
		document.getElementById('Hode').style.width = wantedTabellWidth;
}
	else {
		document.getElementById('tabell').style.width = windowWidth;
		document.getElementById('Hode').style.width = windowWidth;
	}
}
let firstRun = true;
let firstScroll = true;
let scrollTimeMs = 80;
let scrollPause = 1500;
function wait() {
calcAWeb();
if (firstScroll) {
firstScroll = false;
setTimeout(pageScroll, 3000);
}
}
function pageScroll() {
var objDiv = document.getElementById("scroll");
objDiv.scrollTop = objDiv.scrollTop + 1;
var x = parseFloat(objDiv.scrollTop);
var y = parseInt(getComputedStyle(document.getElementById("scroll")).height);
var z = parseInt(objDiv.scrollHeight);
if (((x + y) >= (z - 2)) && (objDiv.scrollTop > 0)) {
setTimeout(resetScroll, scrollPause);
}
else {
setTimeout(pageScroll, scrollTimeMs);
}
}
function resetScroll() {
var objDiv = document.getElementById("scroll");
objDiv.scrollTop = 0;
setTimeout(pageScroll, scrollPause);
}
function calcAWeb() {
if (firstRun) {
firstRun = false;
// Make hidden copy of table
let newCopyTable = '<TABLE id="tabell_copy" COLS="50"></TABLE>';
document.getElementsByTagName('body')[0].innerHTML += newCopyTable;
document.getElementById('tabell_copy').innerHTML = document.getElementById('tabell').innerHTML;
}
let originalTableWidth = document.getElementById('tabell_copy') ? document.getElementById('tabell_copy').offsetWidth : 'auto';
// Set width
if (document.getElementById("tabell")) document.getElementById("tabell").style.width = originalTableWidth;
let newTableWidth = document.getElementById("scroll").rows[0] ? document.getElementById("scroll").rows[0].offsetWidth : "auto"; 
if (document.getElementById("Hode")) document.getElementById("Hode").style.width = newTableWidth;
if (document.getElementById("tabhode")) document.getElementById("tabhode").style.width = newTableWidth;
}
function pwsize(){
		let h = window.innerHeight;
		let w = window.innerWidth;
		let bh = 90;
		let cw = 200;
		if (document.getElementById("banner")) document.getElementById("banner").setAttribute("height", bh - 2);
		if (document.getElementById("banner")) document.getElementById("banner").setAttribute("width", w - 4);
		let mh = h - bh - 10;
		if (document.getElementById("contents")) document.getElementById("contents").setAttribute("height",mh);
		if (document.getElementById("main")) document.getElementById("main").setAttribute("height",mh);
		setTimeout(() => {
			let h = document.body.clientHeight;
			let w = document.body.clientWidth;
			let mw = w - document.getElementById("contents").offsetWidth - 4;
			if (document.getElementById("main")) document.getElementById("main").setAttribute("width",mw);
			if (document.getElementById("main")) document.getElementById("main").setAttribute("align","right");
},1)
}
function bwsize(){
		let h = window.innerHeight;
		let w = window.innerWidth;
		if (document.getElementById("page")) document.getElementById("page").setAttribute("height", h);
		if (document.getElementById("page")) document.getElementById("page").setAttribute("width", w);
}
document.addEventListener('DOMContentLoaded',(event) => {
		setTimeout(pwsize,10);
})
