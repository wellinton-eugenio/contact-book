import {SubmitHandler, useForm} from "react-hook-form";
import { RegisterData, registerSchema } from "./validator";
import {zodResolver} from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import contacts_book from "../../assets/img/contacts_book.png"
import { StyledMain, StyledHomeCont, StyledLogoDiv, StyledRegisterDiv, StyledForm } from "./style"

export interface iRegisterValues{
    name:string;
    email:string;
    cellphone:string;
    password: string;
}

export const Register = () => {  
    const {register, handleSubmit} =  useForm<RegisterData>({
        resolver: zodResolver(registerSchema)
    })

    const {registerUser} = useAuth()

    const submit:SubmitHandler<iRegisterValues> = (data) =>{
        registerUser(data)
    }

    return (
        
        <StyledMain>
            <StyledHomeCont>
                <StyledRegisterDiv>
                    <h1>Registro</h1>

                    <StyledForm onSubmit={handleSubmit(submit)}>
                        <label htmlFor="name">Nome</label>
                        <input type="name" id="name" {...register("name")}/>
                    
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email"{...register("email")}/>
                    
                        <label htmlFor="cellphone">Telefone</label>
                        <input type="cellphone" id="cellphone"{...register("cellphone")}/>
                    
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password"{...register("password")}/>

                        <button type="submit" >Registrar</button>
                    </StyledForm>
                    <a href="/">Vá para login</a>
                </StyledRegisterDiv>
                <StyledLogoDiv>
                    <img src={contacts_book} alt=""/>
                </StyledLogoDiv>
            </StyledHomeCont>
        </StyledMain>
    )
}