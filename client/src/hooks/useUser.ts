import useUsers from "./useUsers"

const useUser = (id?: string) => {
    const {data: users} = useUsers();
    return users?.results.find(u => u._id === id);
}

export default useUser;