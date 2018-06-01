 /*
    #######################################################
    FILENAME: mycode.js
    OVERVIEW: GDI JS Class 2
    PURPOSE: Different Let's Develop It Solutions
    #######################################################
*/

/*
	To declare (create) a function, you can give it a name, 
	then include all the code for the function inside curly brackets {}
*/
function parrotFacts() {
  console.log('Some parrot species can live for over 80 years');
  console.log('Kakapos are a critically endangered flightless parrot');
}

/*
	Let’s Develop It 2.1
	Write a function that outputs a sentence. 
	Then invoke that function later in your code.
*/
function sentence(){
	var mySentence = 'Hello I`m Denise Nguyen!';
	console.log(mySentence);
}

/*
	Let’s Develop It 2.2
	Write a simple program to combine a first name and a last name inside a function. 
	Then update the function to accept a first and last name as arguments.
*/
function nameFunction(){
    var firstName = 'Denise';
    var lastName = 'Nguyen';
    var fullName = firstName + ' ' + lastName;    // value is 'Erik Krieg'
	console.log(fullName);
    document.getElementById("demo").innerHTML = fullName;
}

function nameFunction2(){
    var firstName = 'Jane';
    var lastName = 'Smith';
    var fullName = firstName + ' ' + lastName;    // value is 'Erik Krieg'
    document.getElementById("Name").value = fullName;
}

function nameFunction3(){
	var firstName = 'Joe';
	var lastName = 'Smith';
	var fullName = firstName + ' ' + lastName;    // value is 'Erik Krieg'
	document.getElementById("Name2").innerHTML = fullName;
}

function square(num) {
  return num * num;
}
console.log(square(4));       // outputs '16'
var squareOfFive = square(5); // squareOfFive equals '25'


/*
	Let’s Develop It 2.3
	Add a return statement to your 'name' function. 
	Use that function to set the value of a variable.
*/
function nameFunction4(first,last) {
    return "Hello " + first + " " + last;
}
console.log(nameFunction4("John","Smith"));


/*	
	Let’s Develop It 2.4
	Make a variable called "temperature". Write some code that tells 
	you to put on a coat if it is below 50 degrees.
*/
function temp(){
var temperature = 22;
	if (temperature < 50) {
	    console.log("Put on a coat");
	} 
}

/*
	Let’s Develop It 2.5
	Modify your "wear a coat" code for these conditions:
	If it's less than 50 degrees, wear a coat.
	If it's less than 30 degrees, wear a coat and a hat.
	If it's less than 0 degrees, stay inside.
	Otherwise, wear whatever you want.
*/
function temp2(){
var temperature = 49;
	if (temperature < 30) {
	console.log('Wear a coat and a hat')
	} else if (temperature < 50) {
	console.log('Put on a coat');
	} else if (temperature < 65) {
	console.log('Wear just a sweater');
	} else {
	console.log('Wear whatever you want(:');
	}
}

/*
	Let’s Develop It 2.6
	Add a logical operator to your "what to wear" program.
*/
function temp2(){
var temperature = -1;
	if (temperature < 0 || temperature > 100) {
    console.log(' STAY INSIDE!!!! it is terrible out there');
	} else if (temperature < 30) {
	console.log('Wear a coat and a hat')
	} else if (temperature < 50) {
	console.log('Put on a coat');
	} else if (temperature < 65) {
	console.log('Wear just a sweater');
	} else {
	console.log('Wear whatever you want(:');
	}
}