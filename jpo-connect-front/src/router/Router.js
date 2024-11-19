import {Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Register from "../pages/Register";
import Login from '../pages/Login';

const Router = () => {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>
    )
}

export default Router;