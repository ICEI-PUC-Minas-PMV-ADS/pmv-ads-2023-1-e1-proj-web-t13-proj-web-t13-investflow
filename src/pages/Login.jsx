import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

export default function Login({ setShouldSearchWork, setIsUserLoggedIn }) {
    setShouldSearchWork(false);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const userInformation = JSON.parse(localStorage.getItem("userInformation"));

        if (!userInformation) {
            navigate("/register");
        }

        if (userInformation.email !== email || userInformation.password !== password) {
            navigate("/register");
        }

        setIsUserLoggedIn(true);

        navigate("/");
    }

    return (
        <div>
            
            <div style={{ display: "flex", height: "calc(100vh - 64px)", alignItems: "center", justifyContent: "center" }}>
                <div style={{ maxWidth: "450px", width: "100%", padding: "20px 20px 40px", border: "solid 1px", borderRadius: "6px" }}>
                    <h1 style={{ textAlign: "center" }}>Entrar</h1>
                    <form action="" style={{ display: "flex", flexDirection: "column",  }} onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            style={{ padding: "10px 16px", borderRadius: "2px", border: "solid 1px", marginBottom: "8px" }} 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <input 
                            type="password" 
                            name="password" id="password" 
                            placeholder="Senha" 
                            style={{ padding: "10px 16px", borderRadius: "2px", border: "solid 1px", marginBottom: "8px" }}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />

                        <button type="submit" style={{ padding: "10px 16px", borderRadius: "2px", border: "solid 1px", marginBottom: "8px", cursor: "pointer" }}>Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}