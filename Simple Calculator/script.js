//here is a function to clear the screen

function clearDisplayUnit(){ 
    document.getElementById("result").value="";
}

//function to show the result
function display(value){ 
    document.getElementById("result").value+=value;
}

//function to calculate  the result of the given input

function calculate(){
    var  firstVar=document.getElementById("result").value;
    var secondVar= eval(firstVar);
    document.getElementById("result").value=secondVar;
}