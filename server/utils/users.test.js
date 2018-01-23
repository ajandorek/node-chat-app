const expect = require('expect');

const { User } = require('./users');

describe('Users', () => {
  it('should add new user', () => {
    var users = new User();
    var user = {
      id: '123',
      name: 'Alec',
      room: 'Cool Kid Room'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    
    expect(users.users).toEqual([user]);
  });
});