export default function useToken() {
    
    const getToken = () => {
        const token = localStorage.getItem("token");
        return token?token:null;
    }
    
    const saveToken = (userToken) => {
        localStorage.setItem("token", userToken)
    }

    const userData = () => {
        const data = localStorage.getItem("user");
        return JSON.parse(data);
    }
    
    const isUser = () => {
        const data = localStorage.getItem("user");
        if (data !== null) return true;
        else return false;    
    }

    return {
        saveToken,
        getToken,
        userData,
        isUser
    }
}
