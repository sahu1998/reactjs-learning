import { Button } from "@mui/material";
import React, { useReducer } from "react";
const CounterUsingReducer = () => {
  const calculate = (state, action) => {
    switch (action.type) {
      case "add":
        return state + action.val;
      case "substract":
        return state - action.val;
      case "multiply":
        return state * action.val;
      case "devide":
        return state / action.val;
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(calculate, 10);

  return (
    <div>
      {/* <Typography> */}
      {state}
      {/* </Typography> */}
      <Button
        variant="outlined"
        onClick={() => dispatch({ type: "add", val: 100 })}
      >
        Add: 10
      </Button>
      <Button
        variant="outlined"
        onClick={() => dispatch({ type: "substract", val: 100 })}
      >
        Substract: 10
      </Button>
      <Button
        variant="outlined"
        onClick={() => dispatch({ type: "multiply", val: 100 })}
      >
        Multiply: 10
      </Button>
      <Button
        variant="outlined"
        onClick={() => dispatch({ type: "devide", val: 100 })}
      >
        Devide: 10
      </Button>
    </div>
  );
};

export default CounterUsingReducer;
