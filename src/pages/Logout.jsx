import { useNavigate } from "react-router-dom";

import { toast } from 'react-toastify';

export default function Logout({ setShouldSearchWork, setIsUserLoggedIn }) {
    setShouldSearchWork(false);

    const navigate = useNavigate();

    setIsUserLoggedIn(false);

    toast.success("Logout realizado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        toastId: 'success1'
    });

    setTimeout(() => {
        navigate("/")
    }, 3000)


    return (
        <div>
            <div style={{ display: "flex", height: "calc(100vh - 64px)", alignItems: "center", justifyContent: "center" }}>
                <h1>Você foi deslogado</h1>
            </div>
        </div>
    );
}