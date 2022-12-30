import { useEffect, useCallback } from 'react';
import { useAuth } from "../contexts/AuthContext";

export function useSaveUserBeforeUnload() {
    const { user } = useAuth();
    const handleBeforeUnload = useCallback(
        (event: BeforeUnloadEvent) => {
            event.preventDefault()
            if (user != null) {
                localStorage.setItem('id', user.id);
                localStorage.setItem('Email', user.email);
                localStorage.setItem('Name', user.name);
                localStorage.setItem('CompanyAdmin', user.companyAdmin.toString());
                localStorage.setItem('Company', user.company.name);
                localStorage.setItem('CompanyId', user.company.id);
                localStorage.setItem('AccessToken', user.accessToken);
            }
        },
        [user]
    );

    useEffect(() => {
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [handleBeforeUnload]);
}
