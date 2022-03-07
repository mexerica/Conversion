let vall = 0
let x = 2 
document.querySelector('#header1').innerHTML = vall;

function add() {
 vall++;	
 document.querySelector('#header1').innerHTML = vall;
}

function sub() {
 if (vall > 0) {
  vall--;	
  document.querySelector('#header1').innerHTML = vall;
 }
}

function answer() {
	//vall = Integer.parseInt(document.getElementById('#vall').value);
	document.querySelector('#header2').innerHTML = (vall >>> 0).toString(x);
}

function change() {
	if (x == 2) {
		x = 8
	} else if (x == 8){
	 	x = 16
	} else {
		x = 2
	}
	document.querySelector('#header2').innerHTML = (vall >>> 0).toString(x);
}

function color() {
  var element = document.body;
  element.classList.toggle("alternative");
}