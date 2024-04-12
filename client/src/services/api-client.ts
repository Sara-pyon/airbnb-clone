import axios, { AxiosRequestConfig } from "axios";
import { User } from "../entities/User";

export interface FetchResponse<T>{
    count: number;
    next ?: string;
    results: T[];
}

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
});

class APIClient<T>{
    endpoint: string;
    constructor(endpoint: string){
        this.endpoint = endpoint;
    };

    // getAll = (config: AxiosRequestConfig) => {
    //     return axiosInstance.get<FetchResponse<T>>(this.endpoint, config)
    //                         .then(res => res.data);
    // }
    // get = () => {
    //     return axiosInstance.get<T>(this.endpoint)
    //                         .then(res => res.data);
    // }
    post = (data?: T) => {
        return axiosInstance.post<T>(this.endpoint, data)
                            .then(res => res.data);
    }
}

export default APIClient;