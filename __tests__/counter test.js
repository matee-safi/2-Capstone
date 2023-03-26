import countMeals from '../src/modules/counteMeal';

const mockCount = 4;
test('Count 4', () => {
  expect(countMeals(mockCount)).toBe(4);
});