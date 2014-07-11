//first get the numbers to display 

window.onload = function(event){

	var result = []  //http://stackoverflow.com/questions/17583544/referenceerror-variable-is-not-defined   this is why you don't declare var inside
	
	var idArray = ["zero", "one","two", "three", "four", "five", "six", "seven", "eight", "nine"];
	//The following variables get the values of the number keys 
	

	// Set variables for the corresponding number div, for instance "var one = document.getElementById("one")""
	for(var i=0; i<idArray.length; i++){
		var id = idArray[i];	
		id = document.getElementById(id)

	}	


	//The following variables are the operator keys 
	var multiply = document.getElementById("multiply"),
		enter = document.getElementById("enter"),
		add = document.getElementById('add'),
		divide = document.getElementById('divide'),
		subtract = document.getElementById('subtract'),
		clear = document.getElementById('clear')


	/*set onclick functions for each key, for instance:

	one.onclick = function(event){
		document.getElementById("result_display_value").innerHTML = 1	
		result.push(1)
		console.log(result)
	}
	*/


	var idArray2 = {"zero":0, "one":1,"two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9};
	
	for(var i = 0; i < idArray.length; i++){
		var id = idArray[i];  // one, two etc.
		// console.log(id)
	 	var idNum = idArray2[id] //1, 2 etc.
		// console.log(idNum)
		

		//This test doesn't work 
		// one.onclick= function(event){
		// 	console.log("HI")
		// }

		id.onclick = function(event){
			document.getElementById("result_display_value").innerHTML = idNum
			result.push(idNum)
			console.log(idNum)
			console.log(result)
			console.log("HI!")
		}

	}
/*

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

	three.onclick = function(event){
		document.getElementById("result_display_value").innerHTML = 3 
		result.push(3)
		console.log(result)
	}

	four.onclick = function(event){
		document.getElementById("result_display_value").innerHTML = 4 
		result.push(4)
		console.log(result)
	}

	five.onclick = function(event){
		document.getElementById("result_display_value").innerHTML = 5 
		result.push(5)
		console.log(result)
	}

	six.onclick = function(event){
		document.getElementById("result_display_value").innerHTML = 6 
		result.push(6)
		console.log(result)
	}

	seven.onclick = function(event){
		document.getElementById("result_display_value").innerHTML = 7 
		result.push(7)
		console.log(result)
	}

	eight.onclick = function(event){
		document.getElementById("result_display_value").innerHTML = 8 
		result.push(8)
		console.log(result)
	}

	nine.onclick = function(event){
		document.getElementById("result_display_value").innerHTML = 6 
		result.push(6)
		console.log(result)
	}
*/

	//OPERATORS 
	multiply.onclick = function(event){
		document.getElementById("operator_display").innerHTML = "*"
		result.push(" * ")
		console.log(result)
	}

	add.onclick = function(event){
		document.getElementById("operator_display").innerHTML = "+"
		result.push(" + ")
		console.log(result)
	}

	subtract.onclick = function(event){
		document.getElementById("operator_display").innerHTML = "-"
		result.push(" - ")
		console.log(result)
	}

	divide.onclick = function(event){
		document.getElementById("operator_display").innerHTML = "/"
		result.push(" / ")
		console.log(result)
	}


	//enter and clear 
	enter.onclick = function(event){
		var totalCount =  eval(result.join("")) //this evaluates the array of numbers and operators

		document.getElementById("operator_display").innerHTML = result.join("") + " = "
		document.getElementById("result_display_value").innerHTML = totalCount
		console.log(totalCount)
	}

	clear.onclick = function(event){
		result = [];
		document.getElementById("result_display_value").innerHTML = ""
		document.getElementById("operator_display").innerHTML = ""
	}






}
