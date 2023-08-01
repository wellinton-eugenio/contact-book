import { useForm } from "react-hook-form";
import { LoginData, schema } from "./validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "../../hooks/useAuth";
import contacts_book from "../../assets/img/contacts_book.png";
import { StyledMain, StyledHomeCont, StyledLogoDiv, StyledLoginDiv, StyledForm } from "./style";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
    const { register, handleSubmit } = useForm<LoginData>({
        resolver: zodResolver(schema)
    });
    const { signIn } = useAuth();

    return (
        <StyledMain>
            <ToastContainer/>
            <StyledHomeCont>
                <StyledLogoDiv>
                    <img src={contacts_book} alt=""/>
                </StyledLogoDiv>
                <StyledLoginDiv>
                    <h1>Login</h1>
                    <StyledForm onSubmit={handleSubmit(signIn)}>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" {...register("email")} />
                        <label htmlFor="password">Senha</label>
                        <input type="password" id="password" {...register("password")} />
                        <button type="submit" >Entrar</button>
                    </StyledForm>
                    <p>Ainda nao tem registro?</p>
                    <a href="/register">Registrar-se</a>
                </StyledLoginDiv>
            </StyledHomeCont>
        </StyledMain>
    );
};