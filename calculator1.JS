let del = document.getElementById('del');

del.addEventListener('click', deleteFromBack)
function deleteFromBack(){ 
    var display1=document.getElementById('Display');
    display1.textContent=display1.textContent.slice(0,-1);
	 console.log(display1.textContent);
}

function squareNum(value){
	document.getElementById('Display').textContent +=value;
}


function clearDisplay(){
	document.getElementById('Display').textContent='';
}


var display= document.getElementById('Display');
let square = document.getElementById('EXP');
// the square of a number function 

square.addEventListener('click',square1)
function square1(){
	
display.textContent=parseInt(display.textContent)*parseInt(display.textContent)
	
}

let sqr1 =document.getElementById('squaroot');

sqr1.addEventListener('click', shift)

function shift(){
display.textContent= Math.sqrt(display.textContent)
}
