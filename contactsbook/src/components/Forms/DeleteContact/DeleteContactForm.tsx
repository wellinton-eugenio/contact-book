import { Dispatch, useState } from "react";
import { useForm } from "react-hook-form";
import { Contact } from "../../../pages/dashboard";
import { api } from "../../../services/api";
import { StyledConfirmBtn } from "../../Modal/style";
import { toast } from "react-toastify";

interface DeleteContactProps {
    contact: Contact;
    setOpen:  Dispatch<React.SetStateAction<boolean>>;
    setContacts: Dispatch<React.SetStateAction<Contact[]>>;
}

export const DeleteContactForm = ({ contact, setOpen, setContacts }: DeleteContactProps) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const { handleSubmit } = useForm();

    const handleDeleteContact = async () => {
        try {
            setIsDeleting(true);
            const response = await api.delete(`/contacts/${contact.id}`);
            console.log(response.status);
            toast.success("Contato deletado", {autoClose:2000});
            setIsDeleting(false);
            setContacts((previusContacts)=>previusContacts.filter(previusContact => contact.id !== previusContact.id));
            setOpen(false);
        } catch (error) {
            setIsDeleting(false);
            toast.error("Algo errado!", {autoClose:1000});
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleDeleteContact)}>
            <p>Tem certeza que deseja deletar o contacto {contact.name}?</p>
            <StyledConfirmBtn type="submit" disabled={isDeleting}>
                {isDeleting ? "Deletando..." : "Deletar"}
            </StyledConfirmBtn>
        </form>
    );
};