import axios from "axios";
import {getAuthToken} from "../utils/auth"; //import functia de autentificarepentru a obtine token JWT

const axiosInstance=axios.create({
    baseURL: 'http://localhost:3000/api',//setare URL-ul de baza
});

axiosInstance.interceptors.request.use(
    config=>{
        const token=getAuthToken();
        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    });

    export default axiosInstance;