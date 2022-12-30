import { useEffect } from 'react';
import { useAuth } from "../contexts/AuthContext";

export function useGetUserFromLocalStorage() {
    const { setUser, user } = useAuth();

    useEffect(() => {
        const companyName = localStorage.getItem('Company');
        const companyId = localStorage.getItem('CompanyId');
        const name = localStorage.getItem('Name');
        const accessToken = localStorage.getItem('AccessToken');
        const email = localStorage.getItem('Email');
        const id = localStorage.getItem('id');
        const companyAdmin = localStorage.getItem('CompanyAdmin');

        if (id && email && name && companyAdmin && companyName && companyId && accessToken) {
            setUser({
                id,
                email,
                name,
                companyAdmin: companyAdmin === 'true',
                company: {
                    id: companyId,
                    name: companyName
                },
                accessToken
            })

            localStorage.clear();
        }
    }, [user]);
}
