
import axios from "axios"
export const fetchUsers=async()=>{
    try {
        const response=await axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020')
        return response.data
        
    } catch (error) {
        console.log(error)
    }
}