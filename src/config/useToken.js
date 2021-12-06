export default function useToken() {
    const getToken = () => {
        const token = sessionStorage.getItem("token");
        return token?token:null;
    }
    

    const saveToken = (userToken) => {
        sessionStorage.setItem("token", userToken)
    }

    return {
        saveToken,
        getToken
    }
}
