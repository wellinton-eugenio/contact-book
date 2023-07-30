import { useForm } from "react-hook-form"
import { StyledInput } from "../UpdateUser/style"
import { ContactData, createContactSchema } from "./validator"
import {zodResolver} from "@hookform/resolvers/zod";
import { Dispatch } from "react";
import { Contact } from "../../../pages/dashboard";
import { api } from "../../../services/api";

interface iCreateValues {
    name:string,
    email:string,
    cellphone: string
}

interface CreateProps{
    toogleModal: ()=>void,
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
    setOpen: Dispatch<React.SetStateAction<boolean>>
}

export const CreateContactForm = ({toogleModal, setContacts, setOpen}:CreateProps) =>{
    const {register, handleSubmit} = useForm({
        resolver: zodResolver(createContactSchema)
    })

    const createNewContact = async (data:ContactData)=>{
        const response = await api.post("/contacts", data)
        setContacts(previusContacts=>[...previusContacts, response.data])
        setOpen(false)

    }
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

            <button type="submit" onClick={toogleModal}>Adicionar</button>
        
        </form>
    </div>    
        
    )
}