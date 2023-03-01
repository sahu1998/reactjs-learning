import React, { useState } from "react";
class Counter extends React.Component{
    constructor(){
        super();        
        this.state ={
            count : 0
        }
    }


    render(){
        const {count} = this.state;
        return (
        <div>
            <button onClick={() => this.setState({count : this.state.count+1})}>+</button>
            {count}
            <button onClick={() => this.setState({count : this.state.count-1})}>-</button>
        </div>)
    }
}

 export const FunctionCounter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <button onClick={() => { setCounter(counter+1)}}>+</button>
            {counter}
            <button onClick={() => { setCounter(counter-1)}}>-</button>
        </div>
    );
}
export default Counter;