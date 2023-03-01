import React, { createContext, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import ExpenseList from "./components/Expense-tracker/ExpenseList";
// import FormDemo from "./components/MuiForm/FormDemo";
// import UseFormDemo from "./components/UseFormHook/UseFormDemo";
// import StudentData from "./components/Cruduseform/InSingleFile";
// import NavBar from "./components/UnitConverter/NavBar/NavBar";
// import EmployeeData from "./components/Cruduseform/Table";
// import CrudMain from "./components/Cruduseform/CrudMain";
// import Routing from "./components/Routing";
import { BrowserRouter } from "react-router-dom";
// import ShopCards from "./components/Cards/DemoCard";
// import RoutingDemo from "./components/Cards/Routing";
// import Nav from "./components/Cards/Navigation";
// import Sidebar from "./components/Sidebar";
// import TodoInput from "./components/Todolist/TodoInput";
// import Todo from "./components/Todolist/Main";
// import Panel from "./components/CarManagement/Home";
// import FileSystemNavigator from "./components/CarManagement/Home/select";
// import MyTable from "./components/Crud/Table";
import AllRoutes from "./components/CarManageUsingApiHandler/AllRoutes";
// import { FunctionCounter } from "./components/Counter/Counter";
// import YupValidation from "./components/YupFormValidation";
// import TodoApp from "./components/TodoUsingContext/TodoApp";
// import CounterUsingReducer from "./components/counterUsingReducer";
import { ThemeProvider } from "@emotion/react";
// import ThemeDemo from "./components/ThemeProviderDemo";
import theme from "./themeProvider/theme";
// import { createTheme } from "@mui/material";
import ToggleColorMode from "./components/CarManageUsingApiHandler/Pages/ThemeMode";
// import { Provider } from "react-redux";
// import CounterRedux from "./components/CounterUsingRedux";
// import store from "./store";

function App() {
  return (
    <div className="App">
      {/* <React.Fragment>
        <Container  fixed >
          <FormDemo />
        </Container>
      </React.Fragment> */}

      {/* <ExpenseList/> */}

      {/* <UseFormDemo/> */}

      {/* <MyTable/> */}

      {/* <MyUseForm/> */}

      {/* <StudentData/> */}

      {/* <NavBar /> */}

      {/* <CrudMain/> */}
      {/* <Sidebar/> */}

      {/* <BrowserRouter>
        <Routing/>     
      </BrowserRouter>  */}

      {/* <BrowserRouter>
        <Nav/>
        <RoutingDemo/>
      </BrowserRouter> */}

      {/* <Todo /> */}
      {/* <BrowserRouter>
        <Panel />
      </BrowserRouter> */}

      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </ThemeProvider>

      {/* <ToggleColorMode/> */}

      {/* <TodoApp/> */}

      {/* <YupValidation/> */}

      {/* useReducer example (date: 18/11/2022) */}
      {/* <CounterUsingReducer/> */}

      {/* <ThemeProvider theme={theme}>
        <ThemeDemo/>
      </ThemeProvider> */}

      {/* <Provider store={store}>
        <CounterRedux />
      </Provider> */}
    </div>
    // <Provider value={{ name: 'Sajal Sahu' }}>
    //   <BrowserRouter>
    //     <AllRoutes />
    //   </BrowserRouter>
    // </Provider>
  );
}

export default App;
