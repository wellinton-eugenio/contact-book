import { useForm } from "react-hook-form";
import { StyledInput } from "../UpdateUser/style";
import { ContactData, createContactSchema } from "./validator";
import {zodResolver} from "@hookform/resolvers/zod";
import { Dispatch } from "react";
import { Contact } from "../../../pages/dashboard";
import { api } from "../../../services/api";
import { StyledConfirmBtn } from "../../Modal/style";
import { toast } from "react-toastify";

interface CreateProps{
    toogleModal: ()=>void;
    setContacts: Dispatch<React.SetStateAction<Contact[]>>;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const CreateContactForm = ({toogleModal, setContacts, setOpen}:CreateProps) =>{
    const {register, handleSubmit} = useForm({
        resolver: zodResolver(createContactSchema),
        defaultValues:{
            email: null
        }
    });

    const createNewContact = async (data:ContactData)=>{        console.log(data)
        const response = await api.post("/contacts", data);
        toast.success("Contato cadastrado", {autoClose: 2000,});
        setContacts(previusContacts=>[...previusContacts, response.data]);
        setOpen(false);
    };

    return(
        <div>
            <h3>Adicionar contato</h3>
            <form onSubmit={handleSubmit(createNewContact)}>

                <label htmlFor="name">Nome</label>
                <StyledInput type="name" id="name" {...register("name")}/>
                <label htmlFor="email">Email</label>
                <StyledInput type="email" id="email" {...register("email")}/>
                <label htmlFor="cellphone">telefone</label>
                <StyledInput type="cellphone" id="cellphone" {...register("cellphone")}/>

                <StyledConfirmBtn type="submit" onClick={toogleModal}>Adicionar</StyledConfirmBtn>
            </form>
        </div>    
    );
};