import { Dispatch, useState } from "react";
import { useForm } from "react-hook-form";
import { Contact } from "../../../pages/dashboard";
import { api } from "../../../services/api";

interface DeleteContactProps {
    contact: Contact;
    setOpen:  Dispatch<React.SetStateAction<boolean>>
    setContacts: Dispatch<React.SetStateAction<Contact[]>>
}

export const DeleteContactForm = ({ contact, setOpen, setContacts }: DeleteContactProps) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const { handleSubmit } = useForm();

    const handleDeleteContact = async () => {
        try {
            setIsDeleting(true);
            const response = await api.delete(`/contacts/${contact.id}`);
            console.log(response.data);
            setIsDeleting(false);
            setContacts((previusContacts)=>previusContacts.filter(previusContact => contact.id !== previusContact.id))
            setOpen(false)
        } catch (error) {
            setIsDeleting(false);
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleDeleteContact)}>
            <p>Tem certeza que deseja deletar o contacto {contact.name}?</p>
            <button type="submit" disabled={isDeleting}>
            {isDeleting ? "Deletando..." : "Deletar"}
            </button>
        </form>
    );
};