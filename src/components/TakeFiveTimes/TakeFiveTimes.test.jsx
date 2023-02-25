const { TakeFiveTimes } = require('./TakeFiveTimes');

describe('TakeFiveTimes test', () => {
  it('parses an array taking only five noon times from each day', () => {
    const newArray = [];
    const response = TakeFiveTimes(newArray);    
    expect(response.body).toEqual(['item 0']);
  });

});
