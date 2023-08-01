import React, { Dispatch } from "react";
import { Contact } from "../../pages/dashboard";
import { CardSection, StyledCard, CardOption } from "./style";
import { UpdateContactForm } from "../Forms/UpdateContact/UpdateContactFomr";
import { DeleteContactForm } from "../Forms/DeleteContact/DeleteContactForm";

interface CardProps {
    contact: Contact;
    setContacts: Dispatch<React.SetStateAction<Contact[]>>;
    handleModal: (form: React.ReactNode) => void;
    setOpen: Dispatch<React.SetStateAction<boolean>>;
}

export const Card = ({contact, handleModal, setOpen, setContacts}: CardProps) =>{
    return(
        <StyledCard key={contact.id}>
            <h3>{contact.name}</h3>
            <p><strong>E-mail:</strong> {contact.email ? contact.email : "Adicione um email"}</p>
            <p><strong>fone:</strong> {contact.cellphone ? contact.cellphone : "Adicione um telefone"}</p>
            <CardSection>
                <CardOption onClick={()=>handleModal(<UpdateContactForm contact={contact} setOpen={setOpen} setContacts={setContacts}/>)}>Editar</CardOption>
                <CardOption onClick={()=>handleModal(<DeleteContactForm contact={contact} setOpen={setOpen} setContacts={setContacts}/>)}>Deletar</CardOption>
            </CardSection>
        </StyledCard>
    );
};