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