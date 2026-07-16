import API, { authHeader } from "./axios"

export const getAdmin=(config)=>{
    API.get('/admin',config)
}