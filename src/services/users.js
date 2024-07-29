
import axios from "axios"
export const fetchUsers=async()=>{
    try {
        const response=await axios.get('https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020')
        return response.data.results
    } catch (error) {
        if (axios.isAxiosError(error)) {
        console.log('axios error hai:',error);
        const status=error.response?error.response.status:'Network error';
        const message = error.response && error.response.data ? error.response.data.message : error.message;
        throw new Error(`Failed to fetch users: ${status} - ${message}`);  
        }
        else {
            throw new Error(`Failed to fetch users: ${error.message}`);
          }
    }
}