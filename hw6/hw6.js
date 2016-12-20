//  Мозг сломал , половину нагуглил , сам не знаю как но вроде получилось.
<script>
function arrayToList(array)
{
    var list = {};
    var lastRest = list;
    array.forEach(function(elem)
                  {
                      lastRest.value = elem;
                      lastRest.rest = {};
                      lastRest = lastRest.rest;
                  });
    lastRest.rest = null;
    return list;
}
function listToArray(list, array)
{
    array = array || [];
    if(list.rest != null)
    {
        array.push(list.value);
        list = list.rest;
        return listToArray(list, array);
    }
    else
    {
        return array;
    }
}
function prepend(elem, list)
{
    return {value: elem, rest: list};
}
function nth(list, index, current)
{
    current = current || 0;
    if(index == current)
    {
        return list.value;
    }
    else
    {
        if(list != null)
        {
            return nth(list.rest, index, current + 1);
        }
        else
        {
            return undefined;
        }
    }
}
</script>

console.clear();
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));


// делал вместе с http://ianovikov.com/
<script>
function reverseArray(arr) {  
    //Проверяем валидность входных данных
    var resultArr = [];
    for(var i = arr.length-1; i>=0; i--){
        resultArr.push(arr[i]);
    }
    return resultArr;

}
function reverseArrayInPlace(arr){  
    //Проверяем валидность входных данных
    for(var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        var indexRev = arr.length-i-1;
        arr[i] = arr[indexRev];
        arr[indexRev] = temp;
    }
    return arr;
}
</script>

console.log(reverseArray(["A", "B", "C"]));  
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];  
reverseArrayInPlace(arrayValue);  
console.log(arrayValue);  
// → [5, 4, 3, 2, 1]

//
<script>
var user = {
    name: 'Sergey',
    age: 30,
    email: 'sergey@gmail.com',
    friends: ['Sveta', 'Artem']
}
pick(user, ['name']); // {name: 'Sergey'}
pick(user, ['name', 'second-name']); // {name: 'Sergey'}
pick(user, ['name', 'friends']); // {name: 'Sergey', friends:['Sveta', 'Artem']} */

function pick(obj, keys) {
	var newObj = {};
		for (var i = 0; i < keys.length; i += 1) {
			if (obj[keys[i]] || obj[keys[i]] === 0) {
				newObj[keys[i]] = obj[keys[i]];
			}
		}
	return newObj;
}
</script>
