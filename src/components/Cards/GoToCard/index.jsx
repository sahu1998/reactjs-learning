import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SingleCard from "../DemoCard/singlecard";
import data from 'S:/frontend/react_learning/todo-list/src/components/Cards/data.json';
const ViewThis = () => {
    const {id} = useParams();
    const [thisCard, setThisCard] = useState({});

    useEffect(()=>{
        if(id){
            setThisCard(data[id-1]);
        }
    }, [id])

    return <SingleCard value={thisCard}/>
}

export default ViewThis;