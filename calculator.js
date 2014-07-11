//first get the numbers to display 

window.onload = function(event){

	result = []  //http://stackoverflow.com/questions/17583544/referenceerror-variable-is-not-defined   this is why you don't declare var inside
	var one = document.getElementById("one");
	var two = document.getElementById("two");
	var multiply = document.getElementById("multiply");
	var enter = document.getElementById("enter");


	


	one.onclick = function(event){
		document.getElementById("result_display_value").innerHTML = 1	
		result.push(1)
		console.log(result)
	}

	two.onclick = function(event){
		document.getElementById("result_display_value").innerHTML = 2 
		result.push(2)
		console.log(result)
	}

	//OPERATORS 
	multiply.onclick = function(event){
		document.getElementById("operator_display").innerHTML = "*"
		result.push(" * ")
		console.log(result)
	}

	
	enter.onclick = function(event){
		document.getElementById("operator_display").innerHTML = "="
		var totalCount =  eval(result.join(""))
		console.log(totalCount)
	}



}
