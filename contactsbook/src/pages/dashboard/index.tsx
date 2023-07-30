import React, { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/useAuth";
import { Modal } from "../../components/Modal";
import { CreateContactForm } from "../../components/Forms/CreateContact/CreateContactForm";
import { UpdateUseForm } from "../../components/Forms/UpdateUser/UpdateUserForm";
import { DeleteUseForm } from "../../components/Forms/DeleteUser/DeleteUserForm";


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
    const [user, setUser]=useState<User>()
    const [isOpen, setOpen] = useState(false)
    const [contacts, setContacts]=useState<Contact[]>([])
    const [form, setForm] = useState<React.ReactNode | null>(null)
    const {logoutFunction} = useAuth()

    useEffect(()=>{
        (async ()=> {
            const response = await api.get<Contact[]>("/contacts")
            setContacts(response.data)
            const userResponse = await api.get<User>("/users")
            setUser(userResponse.data)
        })()
    }, [])

    const toogleModal = () => setOpen(!isOpen)

    const handleModal = (form: React.ReactNode) => {
        setForm(form)
        setOpen(!isOpen)

    }

    return (
        <>
            <div>
                <header>
                    <div>
                    <h1>Olá, {user ? user.name : "usuario"}</h1>
                    <button onClick={()=>handleModal(<UpdateUseForm user={user!} setUser={setUser} setOpen={setOpen}/>)}>editar</button>
                    <button onClick={()=>handleModal(<DeleteUseForm user={user!} setOpen={setOpen} toogleModal={toogleModal}/>)}>deletar</button>
                    <button onClick={logoutFunction}>logout</button> 
                    </div>
                    
                </header>
                {isOpen && <Modal children={form} toggleModal={toogleModal} />}
                <main>
                    <div>
                    <h3>Seus contatos</h3>
                    <button onClick={()=>handleModal(<CreateContactForm toogleModal={toogleModal} setContacts={setContacts} setOpen={setOpen}/>)}>adicionar contato</button>   
                    </div>
                    {contacts.length===0?(<span><h2>Ainda não cadastrou contatos!</h2></span>):(<ul>
                        {contacts.map((contact) => <Card key={contact.id} contact={contact} setContacts={setContacts} handleModal={handleModal} setOpen={setOpen}/>)}
                    </ul>)}
                </main>
            </div>
        </>
    )
}