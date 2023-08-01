import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import { ModalError } from "../components/ModalError";


interface AxiosInterceptorProps {
    children: ReactNode
}

export const AxiosInterceptor = ({ children }: AxiosInterceptorProps) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    useEffect(() => {
        const errorInterceptor = (error: Error) => {
            if (!axios.isAxiosError(error)) {
                return Promise.reject(error)
            }

            if (error.response?.status === 401) {
                setIsOpenModal(true)
            }

            return Promise.reject(error);
        }

        const interceptor = api.interceptors.response.use(null, errorInterceptor);

        return () => api.interceptors.response.eject(interceptor)
    }, []);

    return (
        <>
            {isOpenModal && <ModalError toggleModal={() => setIsOpenModal(!isOpenModal)} />}
            {children}
        </>
    );
};