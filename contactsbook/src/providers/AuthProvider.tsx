import { ReactNode, createContext, useEffect, useState } from "react";
import { LoginData } from "../pages/login/validator";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { RegisterData} from "../pages/register/validator";
import { ContactData } from "../components/Forms/CreateContact/validator";


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
    createContact:(data: ContactData)=> void
}

export const AuthContext = createContext({} as AuthContextValues)

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@contactbook:token")

        if (!token) {
            setLoading(false)
            return
        }

        api.defaults.headers.common.Authorization = `Bearer ${token}`
        setLoading(false)

    }, [])

    const signIn = async (data: LoginData) => {

        try {

            const response = await api.post<LoginResponse>("/login", data)

            const { token } = response.data


            api.defaults.headers.common.Authorization = `Bearer ${token}`
            localStorage.setItem("@contactbook:token", token)
            setLoading(false)

            navigate("/dashboard")
        }
        catch (error) {
            console.log(error)
        }
    }

    const registerUser = async(data:RegisterData)=>{
        try{
            const response = await api.post("/users", data)

            console.log(response.status)

            setTimeout(()=>{navigate("/")}, 4000)
        }catch (error){
            console.log(error)
        }
    }

    const logoutFunction = () =>{
        localStorage.clear()
        navigate("/")
    }

    const createContact = async (data:ContactData)=>{
        try {
            const response = await api.post("/contacts", data)

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <AuthContext.Provider value={{ signIn, loading, registerUser, logoutFunction, createContact}}>
            {children}
        </AuthContext.Provider>
    )
}