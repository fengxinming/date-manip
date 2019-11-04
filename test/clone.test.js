import clone from '../src/clone';

it('测试 clone 方法', () => {
  const date1 = new Date();

  expect(+clone(date1)).toBe(+date1);
});
