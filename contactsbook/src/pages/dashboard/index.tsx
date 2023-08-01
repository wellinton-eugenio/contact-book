import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../../components/Modal";
import { CreateContactForm } from "../../components/Forms/CreateContact/CreateContactForm";
import { UpdateUseForm } from "../../components/Forms/UpdateUser/UpdateUserForm";
import { DeleteUseForm } from "../../components/Forms/DeleteUser/DeleteUserForm";
import { StyledList, StyledButtonAdd, StyledHeader, StyledHeaderBottonsCont, StyledUserContainer, StyledMainCont } from "./styles";
import contacts_logo2 from "../../assets/img/contacts_logo2.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ModalError } from "../../components/ModalError";
import { useNavigate } from "react-router";
import { Footer } from "../../components/Footer";


export interface Contact{
    id: number,
    name:string,
    email:string,
    cellphone:string,
}

export interface User {
    id: number,
    name:string,
    email:string,
    cellphone:string,
    contacts: Array<Contact>

}

export const Dashboard = () => {
    const [user, setUser]=useState<User>();
    const [isOpen, setOpen] = useState(false);
    const [contacts, setContacts]=useState<Contact[]>([]);
    const [form, setForm] = useState<React.ReactNode | null>(null);
    const [isAuth, setAuth] = useState(false);
    const {logoutFunction} = useAuth();
    const navigate = useNavigate()


    const isUserAuthenticated = () => {
        const token = localStorage.getItem("@contactbook:token");
        return token !== null;
    };

    useEffect(()=>{
        (async ()=> {
            const authenticated = isUserAuthenticated()
            if(!authenticated){
                setAuth(true)
            }else {
                const response = await api.get<Contact[]>("/contacts");
                setContacts(response.data);
                const userResponse = await api.get<User>("/users");
                setUser(userResponse.data);
            }
            
        })();
    }, []);

    const toogleModal = () => setOpen(!isOpen);

    const toogleModalAuth = () => {
        setAuth(!isAuth);
        navigate("/")
    };

    const handleModal = (form: React.ReactNode) => {
        setForm(form);
        setOpen(!isOpen);
    };

    return (
        <>
            <div>
                <ToastContainer/>
                <StyledHeader>
                    <img src={contacts_logo2} alt="" />
                    <StyledUserContainer>
                        <h1>Olá, {user ? user.name : "usuario"}</h1>
                        <div>
                            <p>{user?.email}</p>
                            <p>{user?.cellphone ? user.cellphone : "cadastre um telefone"}</p>
                        </div>
                    </StyledUserContainer>
                    <StyledHeaderBottonsCont>
                        <button onClick={()=>handleModal(<UpdateUseForm user={user!} setUser={setUser} setOpen={setOpen}/>)}>Editar Usuário</button>
                        <button onClick={()=>handleModal(<DeleteUseForm user={user!} setOpen={setOpen} toogleModal={toogleModal}/>)}>Deletar Usuário</button>
                        <button onClick={logoutFunction}>Logout</button> 
                    </StyledHeaderBottonsCont>
                    
                </StyledHeader>
                {isAuth && <ModalError toggleModal={toogleModalAuth}/>}
                {isOpen && <Modal children={form} toggleModal={toogleModal} />}
                <StyledMainCont>
                    <div>
                        <h1>Seus contatos</h1>
                        <StyledButtonAdd onClick={()=>handleModal(<CreateContactForm toogleModal={toogleModal} setContacts={setContacts} setOpen={setOpen}/>)}>Adicionar contato</StyledButtonAdd>   
                    </div>
                    {contacts.length===0?(<span><h2>Ainda não cadastrou contatos!</h2></span>):(<StyledList>
                        {contacts.map((contact) => <Card key={contact.id} contact={contact} setContacts={setContacts} handleModal={handleModal} setOpen={setOpen}/>)}
                    </StyledList>)}
                </StyledMainCont>
                <Footer/>
            </div>
        </>
    );
};