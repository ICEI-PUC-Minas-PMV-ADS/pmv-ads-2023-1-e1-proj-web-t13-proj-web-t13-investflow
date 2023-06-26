import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

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
            <div style={{ display: "flex", height: "calc(100vh - 64px)", alignItems: "flex-start", justifyContent: "center" }}>
                <div style={{ maxWidth: "400px", width: "100%", padding: "40px", marginTop: '60px' }}>
                    <Typography 
                        variant="h1" 
                        fontSize={'32px'} 
                        lineHeight={'1.5'} 
                        textAlign={'center'} 
                        fontWeight={'700'}
                         marginBottom={'24px'}
                    >
                        Entrar
                    </Typography>
                    <form action="" style={{ display: "flex", flexDirection: "column",  }} onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            style={{ padding: "16px", borderRadius: "3px", fontSize: '16px', border: "solid 1px #c2c8d0", marginBottom: "8px" }} 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <input 
                            type="password" 
                            name="password" id="password" 
                            placeholder="Senha" 
                            style={{ padding: "16px", borderRadius: "3px", fontSize: '16px', border: "solid 1px #c2c8d0", marginBottom: "16px" }}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />

                        <button 
                            type="submit" 
                            style={{ padding: "16px", borderRadius: "3px", fontSize: '16px', border: "none", cursor: "pointer", background: '#0fa37f', color: '#FFF' }}
                        >
                            Entrar
                        </button>
                    </form>
                    <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '18px' }}>
                        Não tem uma conta? 
                        <Link style={{ color: '#0fa37f', marginLeft: '4px' }} to="/register">Crie uma aqui</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}