import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Logout({ setShouldSearchWork, setIsUserLoggedIn }) {
    setShouldSearchWork(false);

    const navigate = useNavigate();

    setIsUserLoggedIn(false);

    setTimeout(() => navigate("/"), 3000);

    return (
        <div>
            
            <div style={{ display: "flex", height: "calc(100vh - 64px)", alignItems: "center", justifyContent: "center" }}>
                <h1>Você foi deslogado</h1>
            </div>
        </div>
    );
}