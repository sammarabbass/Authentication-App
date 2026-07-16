import API, { authHeader } from "./axios";

export const getProfile = () => API.get("/profiles", authHeader());