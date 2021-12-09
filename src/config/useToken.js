export default function useToken() {
    const getToken = () => {
        const token = localStorage.getItem("token");
        return token?token:null;
    }
    

    const saveToken = (userToken) => {
        localStorage.setItem("token", userToken)
    }

    return {
        saveToken,
        getToken
    }
}
