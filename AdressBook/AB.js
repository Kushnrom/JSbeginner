// Practice "adress book
// User storage
var users  = [{
	irstName: 'Dmitry',
	lastName: 'Kozlov',
	birthDay: '16.07.1990',
	id: 1,
	phones: [
		'89001234567',
		'83431234567'
	]
	},
	{
	firstName: 'Ivan',
	lastName: 'Petrov',
	birthDay: '08.06.1956',
	id: 2,
	phones: [
		'89001234567',
		'83431234567'
	]
	}
];


//add user
function addUser(users) {
	var  user = {};
	user.firstName = prompt ('Введите имя:');
	user.lastName = prompt ('Введите фамилию:');
	user.birthDay = prompt ('Дату рождения:');
	user.phones = [];
	user.id = Math.random().toString(36).substr(2, 16);
	while (true ) {
		var  phone = prompt('Номер телефона:(для выхода введите пустой номер)');
		if  (!phone) break;
		user.phones.push(phone);
	}
	users.push(user)

}

//look at all array data 
console.log(Object.values(users).sort());
//object proprtys
console.log(Object.getOwnPropertyNames(users).sort()); 

//export to svc file 
function csvFormay (users) {
	return users.map (function (user) {
		return Object.keys (user) .map (function (key) {
			if (typeof user[key] == 'string' || typeof user[key] == 'number')
				return '"' + user[key] + '"';
			else return user[key] .map (function (phone) {
				return '"' + phone + '"';
			}) .join (';');
		}) .join (';')
 	}) .join('\r\n');
}


/*

// User storage
var users = [
	{
		id: 1,
		firstName: 'Dmitry',
		lastName: 'Kozlov',
		birthDay: '16.07.1990',
		phones: [
			'89001234567',
			'83431234567'
		]
	},
	{
		id: 2,
		firstName: 'Ivan',
		lastName: 'Petrov',
		birthDay: '08.06.1956',
		phones: [
			'89001234567',
			'83431234567'
		]
	}
];

function addUser(users) {
	var user = {};
	var maxId = users.reduce(function(prev,cur) {
	    return cur.id>prev.id?cur:prev;
	},{id:-Infinity});
	user.id = maxId.id + 1;
	user.firstName = prompt('Введите имя:');
	user.lastName = prompt('Введите фамилию:');
	user.birthDay = prompt('Дату рождения:');
	user.phones = [];
	while (true) {
		var phone = prompt('Номер телефона:(для выхода введите пустой номер)');
		if (!phone) break;
		user.phones.push(phone);
	}
	users.push(user);
}
function deleteUser(id, users){
	var delIndex = '';
	users.every(function(item, i){
		if (item.id == id) {
			delIndex = i;
			return false;
		}
		return true;
	});
	if (delIndex == '') return false;
	users.splice(delIndex, 1);
	return true;
}
function csvFormat(users) {
	return users.map(function(user) {
		return Object.keys(user).map(function(key) {
			if(typeof user[key] == 'string' || typeof user[key] == 'number') return '"' + user[key] + '"';
			else return user[key].map(function(phone) { return '"' + phone + '"'; }).join(';');
		}).join(';');
	}).join('\r\n');
}
function search(value, users) {
	var result = [];
	var re = new RegExp(value, 'i');

	users.forEach(function(item){
		var findString =  item.firstName + ' ' + item.lastName;
		if (re.test(findString)) {
			result.push(item);
		}
	})
	return result;
}

addUser(users);

for (var i = 0; i < users.length; ++i) {
  console.log('ID' + users[i].id + ' Имя: ' + users[i].firstName, ' Фамилия: ' + users[i].lastName, ' Дата рождения: ' + users[i].birthDay, ' Телефоны: ' + users[i].phones.join(', '));
}
console.log('Вывод CSV:')
console.log(csvFormat(users));

console.log(deleteUser(2, users) ? 'пользователь с id 2 удален': 'пользователь не найден');
console.log('Вывод CSV:')
console.log(csvFormat(users));
console.log('Поиск');
console.log(JSON.stringify(search('bond', users)));
console.log(JSON.stringify(search('anna', users)));
*/
