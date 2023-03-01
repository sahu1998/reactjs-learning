export const increment = (amt) => {
  return {
    type: "inc",
    payload: amt,
  };
};
export const decrement = (amt) => {
  return {
    type: "dec",
    payload: amt,
  };
};
