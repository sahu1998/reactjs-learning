import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../MainLayout";
const HomePage = () => {
  const history = useNavigate();

  useEffect(() => {
    console.log("Home page", localStorage.getItem("token"));
    if (localStorage.getItem("token") === "false") {
      console.log("You are not loged in");
      history("/signin");
    }
  }, []);

  return <MainLayout>Home Page</MainLayout>;
};

export default HomePage;
