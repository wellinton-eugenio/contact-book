import { useForm } from "react-hook-form"
import { Contact } from "../../../pages/dashboard"
import { StyledInput } from "../UpdateUser/style"
import { UpdateContactData, updateContactSchema } from "../CreateContact/validator"
import { api } from "../../../services/api"
import {zodResolver} from "@hookform/resolvers/zod";
import { Dispatch} from "react"

interface UpdateProps{
    contact: Contact
    setOpen:Dispatch<React.SetStateAction<boolean>>
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
}

export const UpdateContactForm = ({contact, setOpen, setContacts}: UpdateProps) =>{
    const {register, handleSubmit} = useForm({
        resolver: zodResolver(updateContactSchema),
        defaultValues:{
            name: contact.name,
            email: contact.email,
            cellphone: contact.cellphone
        }
    })


    const updateContact = async (data:UpdateContactData) =>{
        const response = await api.patch(`/contacts/${contact.id}`, data)

        console.log(response.status)
        setContacts((previusContacts)=>previusContacts.map(previusContact=> contact.id === previusContact.id ? response.data : previusContact))
        setOpen(false)
    }




    return(
       <form onSubmit={handleSubmit(updateContact)}>
        <label htmlFor="name">Nome</label>
            <StyledInput type="name" id="name" {...register("name")}/>
            <label htmlFor="email">Email</label>
            <StyledInput type="email" id="email" {...register("email")}/>
            <label htmlFor="cellphone">telefone</label>
            <StyledInput type="cellphone" id="cellphone" {...register("cellphone")}/>

            <button type="submit">Atualizar</button>
       </form>
    )
}