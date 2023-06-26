import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

export default function Register({ setShouldSearchWork }) {
    setShouldSearchWork(false);
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const userInformation = {
            name,
            email,
            password,
        }

        localStorage.setItem("userInformation", JSON.stringify(userInformation));

        navigate("/login");
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
                        Crie sua conta
                    </Typography>
                    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Nome" 
                            style={{ padding: "16px", borderRadius: "3px", fontSize: '16px', border: "solid 1px #c2c8d0", marginBottom: "8px" }}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />

                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            style={{ padding: "16px", borderRadius: "3px", fontSize: '16px', border: "solid 1px #c2c8d0", marginBottom: "8px" }} 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Senha" 
                            style={{ padding: "16px", borderRadius: "3px", fontSize: '16px', border: "solid 1px #c2c8d0", marginBottom: "8px" }}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />

                        <div style={{ margin: '1rem 0' }}>
                            <input type="checkbox" name="termsAndConditions" id="termsAndConditions" />
                            <label htmlFor="termsAndConditions" style={{ marginLeft: '8px', fontSize: '14px', marginTop: '18px' }}>
                                Li e estou de acordo com os 
                                <Link style={{ color: '#0fa37f', marginLeft: '4px' }} to={'/terms-and-conditions'}>termos de uso e política de privacidade</Link>
                            </label>

                        </div>


                        <button type="submit" style={{ padding: "16px", borderRadius: "3px", fontSize: '16px', border: "none", cursor: "pointer", background: '#0fa37f', color: '#FFF' }}>Cadastrar</button>
                    </form>

                    <p style={{ textAlign: 'center', fontSize: '14px', marginTop: '18px' }}>
                        Já tem uma conta? 
                        <Link style={{ color: '#0fa37f', marginLeft: '4px' }} to="/register">Faça o login aqui</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}