const { takeFiveTimes } = require('./TakeFiveTimes');

describe('TakeFiveTimes test', () => {
  it('parses an array taking only five times from each day at noon', () => {
    const response = takeFiveTimes();    
    expect(response).toEqual(['item 0']);
  });

});
