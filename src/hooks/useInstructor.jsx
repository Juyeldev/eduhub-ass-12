import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useInstructor = () => {
    const {user, loading} = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isInstructor, isLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log(res.data)
            return res.data.instructor;
            
        },
        enabled: !loading && !!user?.email,
    })
    return [isInstructor, isLoading]
}
export default useInstructor;