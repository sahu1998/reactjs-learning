import React from "react";
import { Route, Routes } from "react-router-dom";
import ShopCards from "../DemoCard";
import ViewThis from "../GoToCard";


const RoutingDemo = () => {

    return (
        <Routes>
            <Route path="/" element = {<ShopCards/>}></Route>
            <Route path={`view-more/:id`} element = {<ViewThis/>}></Route>
            <Route path="*" element = {<div>404: Page Not Found</div>}></Route>
        </Routes>
    );
}

export default RoutingDemo;