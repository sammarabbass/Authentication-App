import axios from 'axios';


const API = axios.create({
    baseURL:"http://localhost:5000/api/auth"
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