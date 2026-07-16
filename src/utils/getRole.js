import { jwtDecode } from 'jwt-decode'; 

export const getRole=()=>{
    const token=localStorage.getItem("token")

    if(!token){
        return null;
    }
    try{
        const decoded= jwtDecode(token)
        return decoded.role;

    }catch(error){
console.error("invaild toekn", error);
return null;

    }
}