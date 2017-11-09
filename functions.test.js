const fns = require('./functions');

test('Expects fns.returnTwo to return 2', ()=>{
  expect(fns.returnTwo()).toBe(2);
});

test('Expects fns.greeting to return "Hello, [name]." where name is equal to the value passed in.', ()=>{
  expect(fns.greeting('James')).toBe('Hello, James.');
  expect(fns.greeting('Jill')).toBe('Hello, Jill.');
});

describe('Math functions:', ()=> {
  test('Expects fns.add to return the sum of the values passed in.', ()=>{
    expect(fns.add(1, 2)).toBe(3);
    expect(fns.add(5, 9)).toBe(14);
  });

  test('Expects fns.subtract to return the difference of the values passed in.', ()=>{
    expect(fns.subtract(1, 2)).toBe(-1);
    expect(fns.subtract(5, 9)).toBe(-4);
  });

  test('Expects fns.multiply to return the product of the values passed in.', ()=>{
    expect(fns.multiply(1, 2)).toBe(2);
    expect(fns.multiply(5, 9)).toBe(45);
  });

  test('Expects fns.divide to return the quotient of the values passed in.', ()=>{
    expect(fns.divide(1, 2)).toBe(.5);
    expect(fns.divide(18, 9)).toBe(2);
  });
});
