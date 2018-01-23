[{
  id: 'asdfhjklweqr123423',
  name: 'Alec',
  room: 'Mets Fans',
}];

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)

class User {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
}

module.exports = {User};

// class Person {
//   constructor (name, age) {
//     this.name = name,
//     this.age = age
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`
//   }
// };

// var me = new Person('Alec', 25);
// var description = me.getUserDescription();
// console.log(description);