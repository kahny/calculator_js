//first get the numbers to display 

window.onload = function(event){

	result = []  //http://stackoverflow.com/questions/17583544/referenceerror-variable-is-not-defined   this is why you don't declare var inside
	
	//The following variables get the values of the number keys 
	var one = document.getElementById("one"),
		two = document.getElementById("two"),
		three = document.getElementById("three"),
		four = document.getElementById("four"),
		five = document.getElementById("five"),
		six = document.getElementById("six"),
		seven = document.getElementById("seven"),
		eight = document.getElementById("eight"),
		nine = document.getElementById("nine");

	//The following variables are the operator keys 
	var multiply = document.getElementById("multiply"),
		enter = document.getElementById("enter"),
		add = document.getElementById('add'),
		divide = document.getElementById('divide'),
		subtract = document.getElementById('subtract'),
		clear = document.getElementById('clear')


	//number keys
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
