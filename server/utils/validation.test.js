const expect = require('expect');

const { isRealString } = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var str = 123424;
    var validation = isRealString(str);

    expect(validation).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var str = '      ';
    var validation = isRealString(str);

    expect(validation).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    var str = '   some chat room   ';
    var validation = isRealString(str);

    expect(validation).toBe(true);
  });
});