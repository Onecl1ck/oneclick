'use strict';

//let fn = ()=> {x++; console.log('x inside',x)};
function a() {
	var x = 2;
	return function() {
		return x++; 
	}
};
console.log(a());
console.log(a()());
console.log(a()());

/*
function createCounter() {
   var numberOfCalls = 0;
   return function() {
      return ++numberOfCalls;
   }
}
var fnc = createCounter();
console.log(fnc()); //1
console.log(fnc()); //2
console.log(fnc()); //3
*/