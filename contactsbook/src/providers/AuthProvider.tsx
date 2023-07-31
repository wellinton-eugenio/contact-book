import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData} from "../pages/register/validator";
import { toast } from 'react-toastify';

interface AuthProviderProps {
    children: ReactNode
}

interface LoginResponse {
    token: string
}

interface AuthContextValues {
    signIn: (data: LoginData) => void
    loading: boolean
    registerUser: (data:RegisterData)=> void
    logoutFunction: ()=> void
}

export const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("@contactbook:token");

        if (!token) {
            setLoading(false);
            return;
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setLoading(false);

    }, []);

    const signIn = async (data: LoginData) => {
        try {
            const response = await api.post<LoginResponse>("/login", data);
            const { token } = response.data;
            toast.success("login Realizado! Direcionando...",{autoClose: 3000});
            api.defaults.headers.common.Authorization = `Bearer ${token}`;
            localStorage.setItem("@contactbook:token", token);
            setLoading(false);
            setTimeout(()=>{navigate("/dashboard")}, 4000);
        }
        catch (error) {
            toast.error("Algo errado! Verifique suas credenciais.", {autoClose: 3000,});
            console.log(error);
        }
    };

    const registerUser = async(data:RegisterData)=>{
        try{
            const response = await api.post("/users", data)
            console.log(response.status);
            toast.success("Tudo certo!! Direcionado para login!", {
                autoClose: 3000,
            });
            setTimeout(()=>{navigate("/")}, 4000);
        }catch (error){
            toast.error("Algo errado! Verifique seus dados");
            console.log(error);
        }
    };

    const logoutFunction = () =>{
        localStorage.clear();
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ signIn, loading, registerUser, logoutFunction }}>
            {children};
        </AuthContext.Provider>
    )
}