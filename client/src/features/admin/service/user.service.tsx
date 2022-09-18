import axios from "axios";
import { Iuser } from "../type/user";

class UserService {
    
    updateUserService = (id: string, user: Iuser) => {
        console.log("process.env.SERVER_URL", process.env.SERVER_URL)
        return (
            axios.put(`http://localhost:8080/users/${id}`, user)
                .then(data => {
                    console.log('update user axios', data, data.data);
                    return data;
                }).catch(err => {
                    throw Error('update user axios failed', err)
                }))
    }

    deleteUserService = (id: string) => {
        return (
            axios.delete(`http://localhost:8080/users/${id}`)
                .then(data => {
                    console.log('delete user axios', data, data.data);
                    return data;
                }).catch(err => {
                    throw Error('delete user axios failed', err)
                })
        )
    }
}



export default new UserService()

