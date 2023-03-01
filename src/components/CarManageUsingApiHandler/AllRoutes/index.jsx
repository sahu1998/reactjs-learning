import { createTheme, ThemeProvider } from "@mui/material";
import React, { createContext, useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddCategory from "../Pages/Category/Add";
import ViewCategory from "../Pages/Category/View";
import ShowCarDetails from "../Pages/Category/View/ShowCarDetails";
import HomePage from "../Pages/Home";
import SignIn from "../Pages/Login";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const AllRoutes = () => {
  const [mode, setMode] = useState("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="/category/add" element={<AddCategory />} />
          <Route path="/category/view" element={<ViewCategory />} />
          <Route path="/category/view/:car_id" element={<ShowCarDetails />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AllRoutes;
