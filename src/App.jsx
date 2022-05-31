import React from "react";
import {ThemeProvider} from "styled-components";
import theme from "./theme";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import ClickedTabProvider from "./ClickedTabProvider";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <ClickedTabProvider>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/search" element={<Search />}></Route>
                    </Routes>
                </BrowserRouter>
            </ClickedTabProvider>
        </ThemeProvider>
    );
};

export default App;
