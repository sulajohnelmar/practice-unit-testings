const mathUtils = require('./mathUtils');

test('add number correctly', () => {
    expect(mathUtils.add(2, 3)).toBe(5);
});
test('handles zero correctly', () => {
    expect(mathUtils.add(0, 5)).toBe(5);
});
test('handle negative numbers correctly', () => {
    expect(mathUtils.add(-2, 3)).toBe(1);
});