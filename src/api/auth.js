import API from "./axios";


export const signupUser = (data) => API.post('/signup', data)
export const loginUser = (data) => API.post('/login', data)
export const getProfile=(config)=>API.get('/profiles',config)
// export const getAdmin=(config)=>API.get('/admin',config)

