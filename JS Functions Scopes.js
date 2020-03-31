/*functions are a reusable piece of code that performs a task
 - a function is an object, just like objects and arrays
  - a function and its return value are not the same thing. 
   - defining a function requires PBR(Parameters, body, return value)

   			 - Parameters - what input does the function need in order to run?
   			  - Body - what will the function do with that information?
   			  - Return - what outpout will exectuing the function give back?*/

   example of a function function_name(argument) {
   	// body...
   }

   function sum(placeHolder1, placeHolder2){
   		var sumofTwo = placeHolder1 + placeHolder2;
   		return sumofTwo;
   }
   console.log(sum(3,4));


   ORDER MATTERS!!!!

   George - example to help understand
   function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);



-question asked: I thought the input or variables were limited to the number of variables put in to the function? for example function function_name(placeholder1, placeholder2) would allow for 2 variables
From George Gardner to Everyone:  09:56 AM
Nope you can use as many as you want, but each one that you declare must be filled
From Kaley Fry to Everyone:  09:56 AM
Arr is a placeholder for arrays and let num of arr lets in more than one array index item

-- see oneNote for picture table reference. 



declare/define/instatiating a function means to "build a function" meaning put together the Parameters, body, and return

Calling a function means to bring it in to play by  naming the function with () at the end
function()



----note a function with out a name is called an anonymous function.


----------SCOPE---------

Scope is the set of variables a piece of code has access to .
    - Only functions create Scope
    - Parameters and variables declared inside a function are LOCAL to that function's Scope
     - variables are only visible inside that scope they are defined and in its child scopes.

  examples:
  		function add (){
  			var a = "This variable is only visible inside the add function"
  		}
  		console.log(a)//will return undefined

  		function getGreeting(name){
  			var greeting = "hello";
  			return greeting + name;
  		}
  		getGreeting('Shane'); // 'Hello Shane'
  		console.log(greeting); // undefined because it is outside of the {} scope


 -------BLOCKS----------------------

 Blocks CAN have thier own scope when using the let and const keyword to declare a variable, however declaring a variable using the var keyworkd makes the scope of the variable global (at least the declaration part.)

 			Const - is constant does not change
 			let and var - let things in like a window, can be changed. so long as you are outside of the variable it will work. 

 	if you have if(true){
 					animal = bird
 	}
 		you would not be able to console.log(animal) out of the curly brackets or the scope. 

 	but if you have if(true){
 						var animal = bird
 	}
 		you would be able to console.log(animal) because animal is now a variable. 

 		//function scope examples from George
​
function getGreeting(name) {
    var greeting = 'hello ';
    return greeting + name;
}
​
console.log(getGreeting('Shane'));
console.log(greeting); //function scoped no return
​
//----------------------------------------------------------\\
​
//block scope
​
if(true) {
    var animal = 'eel';
    console.log(animal);
}
​
console.log(animal);




--------global-------
 - when you do not call a variable type it is global. 
 	function greet(name) {
 		greeting = "hello ";
 		return greeting + name
 	}
 	greet('Shane');
 	greeting// would print 'hello'


 	if a variable does not use let, var, const, then it is considered a global variable. with out the var keyword, variables are global and can be accessed anywhere. 


------Scope Chain and Closures------------------

when a scope is created, it is nested inside another scope. 
 - to resolve a variable, JS looks at the imediate scope, then parent scopes in order. 
  - A closure is an inner function that has access to the outer function's variables. both scopes togethr are the scope chain.' 


------Variable Name Conflicts------

Sometimes parent scopes have variables with the same name. 
	- declaring the variable name in the inner scope hides the variable with teh asme name in the outer scope. This is a new variable, so assigning to the inner variable won't affect the outer.' 




  -----THIS---------


  you add the ( ) to select the function inside of it
If you console.log speak without the () you see the whole function instead of what it returns
