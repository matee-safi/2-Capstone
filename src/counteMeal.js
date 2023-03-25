const countMeals = (count) => {
  //  console.log(count);
  const totalMeals = typeof count === 'number' && count;
  return totalMeals;
};
export default countMeals;