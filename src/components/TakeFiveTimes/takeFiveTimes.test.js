import { takeFiveTimes } from './takeFiveTimes';

describe('TakeFiveTimes test', () => {
  const mockFn = jest.fn(takeFiveTimes);
  it('parses an array taking only five times from each day at noon', () => {
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('item 0');
    expect(mockFn).toEqual(['item 0']);
  });

});
