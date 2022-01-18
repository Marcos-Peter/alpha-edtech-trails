/*
 * Testing the rest parameter with some functions
 */

const thatsAnArray = "Thats a simple Array with a generic phrase";

function makeArray(..._param){
	const param = _param;
	console.log(param.length);
	console.log(typeof param);
	return param
}

console.log(makeArray(1,2,3,4,5,6,7,8,9,10));
console.log(makeArray(thatsAnArray));


