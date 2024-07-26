
import { useState,useEffect } from "react"
import { fetchUsers } from "../services/users";
export const useFetch=async()=>{
const [users,setUsers]=useState([]);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(null)

useEffect(() => {
    const getUsers=async()=>{
        try {
            const data=await fetchUsers();
        setUsers(data.results)
        } catch (error) {
            setError(error)
            
        }finally{
            setLoading(false)

        }
        

    }
    getUsers();
}, []);


return {users,error,loading}

}