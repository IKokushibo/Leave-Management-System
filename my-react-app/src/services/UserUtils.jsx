import { useState } from "react";
import axios from "../services/AxiosConfiguration";
import MessageBox from "../Components/MessageBox/MessageBox";
import Loading from "../Components/LoadingAnimation/Loading";
import { useNavigate } from "react-router-dom";

export const isAdminValid = (role) => {
    const authorizedRoles = ["SUPER_ADMIN", "HR"];
    for (let i = 0; i < authorizedRoles.length; i++) {
        if (authorizedRoles[i] === role) {
            return true;
        }
    }
    return false;
}

export const isAdminValidForAccessing = (role) => {
    const authorizedRoles = ["SUPER_ADMIN", "HR", "ADMIN", "DEPARTMENT_HEAD", "GENERAL_MANAGER", "SUPERVISOR"];
    for (let i = 0; i < authorizedRoles.length; i++) {
        if (authorizedRoles[i] === role) {
            return true;
        }
    }
    return false;
}

export const logout = async () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState();


    try {
        setIsLoading(true);
        const url = "/users/log-out";
        await axios.post(url);
    } catch (error) {
        setError(error);
        setIsError(true);
    }
    setIsLoading(false);

    if (isLoading) {
        return (
            <>
                <Loading />
            </>
        )
    }

    if (isError) {
        return (
            <>
                <MessageBox message="Network Error" action={() => setIsError(value => !value)} />
            </>
        )
    }
}

export const backToLoginAdmin = () => {
    const navigate = useNavigate();
    navigate("/login-admin");
}
