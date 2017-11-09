const fns = require('./functions');

test('Expects fns.returnTwo to return 2', ()=>{
  expect(fns.returnTwo()).toBe(2);
});

test('Expects greeting to return "Hello, [name]." where name is equal to the value passed in.', ()=>{
  expect(fns.greeting('James')).toBe('Hello, James.');
  expect(fns.greeting('Jill')).toBe('Hello, Jill.');
});

test('Expects add to return the sum of the values passed in.', ()=>{
  expect(fns.add(1, 2)).toBe(3);
  expect(fns.add(5, 9)).toBe(14);
})
