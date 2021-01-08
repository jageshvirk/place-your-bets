export const getRandomInt = (min, max) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);
  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
};

export const calLevel = (wins) => {
  return Math.floor((wins || 0) / 5);
};
