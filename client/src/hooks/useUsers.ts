import { useQuery } from "@tanstack/react-query";
import { User } from "../entities/User";
import APIClient from "../services/api-client";

const apiClient = new APIClient<User>('/api/users');

const useUsers = () => useQuery({
    queryKey: ['users'],
    queryFn: apiClient.getAll,
    staleTime: 60*10000, 

})

export default useUsers;