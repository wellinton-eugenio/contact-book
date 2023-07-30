import { Dispatch, useState } from "react";
import { useForm } from "react-hook-form";
import { User } from "../../../pages/dashboard";
import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/useAuth";

interface DeleteUserProps {
    user: User;
    setOpen:  Dispatch<React.SetStateAction<boolean>>
    toogleModal: ()=>void
}

export const DeleteUseForm = ({ user, setOpen, toogleModal }: DeleteUserProps) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const { handleSubmit } = useForm();

    const {logoutFunction} = useAuth()

    const handleDeleteUser = async () => {
        try {
            setIsDeleting(true);
            const response = await api.delete(`/users/${user.id}`);
            console.log(response.data);
            setIsDeleting(false);
            setOpen(false)
            toogleModal()
            logoutFunction()
        } catch (error) {
            setIsDeleting(false);
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit(handleDeleteUser)}>
            <p>Tem certeza que deseja deletar o usuário {user.name}?</p>
            <button type="submit" disabled={isDeleting}>
            {isDeleting ? "Deletando..." : "Deletar"}
            </button>
        </form>
    );
};