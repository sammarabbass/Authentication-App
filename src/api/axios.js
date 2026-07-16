import axios from 'axios';


const API = axios.create({
    baseURL:"https://app-backend-lemon.vercel.app/api/auth"
})
export const authHeader = () =>{
    const token = localStorage.getItem("token");
    return {
        headers:{
            Authorization: token ? `Bearer ${token}` : ""
            // Authorization: `Bearer${token}` ? token : ""
        }
    }
}


export default API;