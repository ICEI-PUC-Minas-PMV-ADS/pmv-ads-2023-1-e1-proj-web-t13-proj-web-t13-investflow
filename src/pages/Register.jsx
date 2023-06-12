import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";

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
            
            <div style={{ display: "flex", height: "calc(100vh - 64px)", alignItems: "center", justifyContent: "center" }}>
                <div style={{ maxWidth: "450px", width: "100%", padding: "20px 20px 40px", border: "solid 1px", borderRadius: "6px" }}>
                    <h1 style={{ textAlign: "center" }}>Cadastrar</h1>
                    <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Nome" 
                            style={{ padding: "10px 16px", borderRadius: "2px", border: "solid 1px", marginBottom: "8px" }}
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />

                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email" 
                            style={{ padding: "10px 16px", borderRadius: "2px", border: "solid 1px", marginBottom: "8px" }} 
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />

                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Senha" 
                            style={{ padding: "10px 16px", borderRadius: "2px", border: "solid 1px", marginBottom: "8px" }}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />

                        <div style={{ margin: '1rem 0' }}>
                            <input type="checkbox" name="termsAndConditions" id="termsAndConditions" />
                            <label htmlFor="termsAndConditions">Li e estou de acordo com os <Link to={'/terms-and-conditions'}>termos de uso e política de privacidade</Link></label>

                        </div>


                        <button type="submit" style={{ padding: "10px 16px", borderRadius: "2px", border: "solid 1px", marginBottom: "8px", cursor: "pointer" }}>Cadastrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}