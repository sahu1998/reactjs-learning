import React, { useEffect, useState } from 'react';
import data from 'S:/frontend/react_learning/todo-list/src/components/Cards/data.json';
import SingleCard from './singlecard';

export default function ShopCards() {

  const [mydata, setMydata] = useState([]);

  useEffect(()=>{
    setMydata(data);
  },[]);

  console.log(mydata)
  return (
    <div style={{
      padding: "24px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    }}>
      {mydata.map((value, index) => {
        return (
          <SingleCard key= {index} value={value}/>
        );
      })}

    </div>
  );
}