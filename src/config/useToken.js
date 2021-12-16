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

    return {
        saveToken,
        getToken,
        userData
    }
}
