import axios from 'axios';
export const  axiosInstance=axios.create({
    baseURL:"https://dgm-ims.herokuapp.com/api/",
    withCredentials: true,
    credentials: 'include'
});
