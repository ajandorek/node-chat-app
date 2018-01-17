var expect = require('expect');

var { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Alec';
    var text = 'some text';
    var message = generateMessage(from, text);

    expect(message).toInclude({ from, text });
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct message object', () => {
    var from = 'Alec';
    var latitude = 10;
    var longitude = 12;
    var url = 'https://www.google.com/maps?q=10,12';
    var message = generateLocationMessage(from, latitude, longitude)

    expect(message).toInclude({ from, url });
    expect(message.createdAt).toBeA('number');
  });
});