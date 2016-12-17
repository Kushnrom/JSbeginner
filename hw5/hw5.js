//function to make object from num
function numToObj(num){
	if (num == NaN){
	  console.log('Error: parametr is not num');
	} else if(num > 999 || num < 0){
		console.log('Error: avalible rate 0-999');
	  var obj = {};
	  return obj;
	} else {
		var digits = ['units','tens','handreds'];
	    var obj = {};
	    var i = 0;
	    for(var i = 0; num != 0; i++){
	  	   obj[digits[i]] = num % 10;
	  	   num = (num-num%10) / 10;
		}
		}	
		return obj;
	}
console.log(num2Obj(123));
console.log(num2Obj(67));
console.log(num2Obj(8));


// The function reterns object as a string
function objectToQueryString(obj){
	return Object.keys(obj).map(function(key) { return key + '=' + obj[key]; }).join('&');
};
console.log(objectToQueryString({user: 'Roman'}));
console.log(objectToQueryString({user: 'Roman', password: 'pass'}));
console.log(objectToQueryString({user: 'Roman', password: 'pass', id:1}));