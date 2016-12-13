// Practice "adress book"
//1st part
function addUser(users) {
	var​ user = {};
	user.firstName = prompt​('Введите имя:');
	user.lastName = prompt​('Введите фамилию:');
	user.birthDay = prompt​('Дату рождения:');
	user.phones = [];
	while​ (true​) {
		var​ phone = prompt​('Номер телефона:(для выхода введите пустой номер)');
		if​ (!phone) break​;
		user.phones.push(phone);
	}
	users.push(user);
}

//2nd part
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