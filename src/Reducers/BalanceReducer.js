const initialState = 100;
const BalanceReducer = (state = initialState, action) => {
  let payload = action.payload
  
  console.log(action);
  switch (action.type) {
    case "inc":
      return state + payload;
    case "dec":
      return state - payload;
    default:
      return state;
  }
};

export default BalanceReducer;