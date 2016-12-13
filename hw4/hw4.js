
//simple method , other way is to use Math.min
function min(a, b){
	if (a < b){
	    console.log(a)
	}
	}
min(0, 10)
min(-10, 0)

//took from the internet: optimazed  method 
function countBs(str) {
  return countChar(str, 'B');
}

function countChar(str, chr) {
  var counter = 0
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === chr) {counter++;}
  }
  return counter;
}

//took from the internet: other method
var countBs = function(str) {
    return str.match(/B/g).length;
};

var countChar = function(str, character) {
    var matchExp = new RegExp(character, 'g');
    return str.match(matchExp).length;
};

//the old fashioned way
var countChar2 = function(str, character) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === character)
            count++;
    }
    return count;
};

//tests
console.log(countBs('BBC'));
// → 2
console.log(countChar('kakkerlak', 'k'));
// → 4
console.log(countChar2('kakkekekkkkkkkekrlak', 'k'));

//part 3 
function isEven(n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else {
    return n > 0 ? isEven(n-2) : isEven(n+2);
  }
}

//test
console.log(isEven(55))// false
console.log(isEven(50))// true
