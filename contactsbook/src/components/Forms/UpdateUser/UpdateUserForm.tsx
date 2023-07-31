import { useForm } from "react-hook-form";
import { StyledInput } from "./style";
import { UpdateUserData, updateSchema } from "../../../pages/register/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "../../../pages/dashboard";
import { api } from "../../../services/api";
import { Dispatch } from "react";
import { StyledConfirmBtn } from "../../Modal/style";
import { toast } from "react-toastify";

export interface iUserUpdateValues{
    name: string;
    email: string;
    cellphone: string;
    password: string;
}

interface upgradeProps{
    user: User
    setUser: Dispatch<React.SetStateAction<User>>
    setOpen: Dispatch<React.SetStateAction<boolean>>
}

export const UpdateUseForm = ({user, setUser, setOpen}:upgradeProps) =>{
    const {register, handleSubmit} = useForm({
        resolver: zodResolver(updateSchema),
        defaultValues:{
            name: user.name,
            email: user.email,
            cellphone: user.cellphone,
            password: ""
        },
    });

    const newUpdateUser = async (data:UpdateUserData)=>{
        const response = await api.patch(`/users/${user.id}`, data);
        setUser(response.data);
        toast.success("Usuário atualizado!", {autoClose:3000})
        setOpen(false);
    };


    return(
        <form onSubmit={handleSubmit(newUpdateUser)}>

            <label htmlFor="name">Nome</label>
            <StyledInput type="name" id="name" {...register("name")}/>
            <label htmlFor="email">Email</label>
            <StyledInput type="email" id="email" {...register("email")}/>
            <label htmlFor="cellphone">telefone</label>
            <StyledInput type="cellphone" id="cellphone" {...register("cellphone")}/>
            <label htmlFor="password">Senha</label>
            <StyledInput type="password" id="password" placeholder="digite sua senha ou nova senha"{...register("password")}/>

            <StyledConfirmBtn type="submit">Atualizar</StyledConfirmBtn>
            
        </form>
        
    )
}