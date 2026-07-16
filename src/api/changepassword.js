import API, { authHeader } from "./axios"

export const changePassword=(data)=>{
    return    API.put('./changepassword',data,authHeader())
}