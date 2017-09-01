// global variables here. Calcstring is all the input, last answer is the numerical version of 
// the calculation for future use, and previousComps holds multiple lastAnswers. 
	var calcString = "";
	var lastAnswer;
	var previousComps = [];


	function add(a,b) {
		var c = a + b;
		return c;
	}

	function subtract(a,b) {
		var c = a - b;
		return c;
	}

	function multiply(a,b) {
		var c = a * b;
		return c;
	}

	function divide(a,b) {
		var c = a / b;
		return c;

	}
// parses the numbers that are set to be added, splits and reduces the array, and devides by length
	function avg() {
		var averagedNum;
		var regex = "[\\+\\-\\*\\/]";
		var idx = calcString.search(regex);
		var symbol = calcString.charAt(idx);
		var arr = calcString.split(symbol);

		for(var i in arr){
			arr[i] = parseFloat(arr[i]);
		}
	
		averagedNum = (arr.reduce(function(total, num){
			return total + num;
		}))/arr.length;
		

		answers.innerHTML = averagedNum.toFixed(2);
		lastAnswer = averagedNum;
		previousComps.push(averagedNum);
	}
// reset button
	function allClear() {
		var answers = document.getElementById("answers");
		answers.innerHTML = "0";
		calcString = "";
		lastAnswer = undefined;
		previousComps = [];

	}
// gets the number to add to global variable calcstring
	function getNum(id) {

		calcString += id;
		answers.innerHTML = calcString;
	}
// gets the symbol to add to calc string 
	function getSym(id) {

		calcString += id;
		answers.innerHTML = calcString;
	}	

// parses and calculates the numbers
	function calculate() {
		var regex = "[\\+\\-\\*\\/]";
		var idx = calcString.search(regex);
		var symbol = calcString.charAt(idx);
		var array = calcString.split(symbol);
		var firstNum = parseFloat(array[0]);
		var secondNum = parseFloat(array[1]);
		var calculation;

//all works except for neg numbers, because it may be a string?
		
		switch(symbol){
			case "+":
				calculation = add(firstNum, secondNum);
				break;
			case "-":
				calculation = subtract(firstNum, secondNum);
				break;
			case "*":
				calculation = multiply(firstNum, secondNum);
				break;
			case "/":
				calculation = divide(firstNum, secondNum);
				break;
		}

		answers.innerHTML = calculation.toFixed(2);
		lastAnswer = calculation;
		calcString = calculation;
		previousComps.push(calculation);
		// console.log(lastAnswer);
		// console.log(typeof lastAnswer);
	}
// }