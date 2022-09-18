import { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userService from "../service/user.service";
import { Iuser } from "../type/user";


export default function DeleteProfile(){

    const nav = useNavigate();
    const [isDisabled, setDisabled] = useState(false);

    const userDetails: Iuser = {
        name: "my-name",
        email: "email@gmail.com",
        password: 123,
        role: "user",
    }

    const handlerDeleteProfile = () => {
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        }, 10000);
        userService.deleteUserService('1')
        .then((data) => {
            console.log("delete success", data)
             nav('/toast', {state: {message:"User profile deleted successfully", navigateAfter:"/register" }})
            })    
    } 

    return(
        <div className='container'>
            <h1 style={{margin:'30px'}}>Log out of your account</h1>
            <section>
                <h2>{userDetails.name}</h2>
                <img width={'100px'} src="https://secure.gravatar.com/avatar/9e8a669…?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Finitials%2FE-6.png" alt =' ' />
                <p>{userDetails.email}</p>
            </section>
            <form className="d-grid" style={{width:'17rem', margin:'auto', }}>
            <Button disabled={isDisabled} size="lg" type="submit" onClick={handlerDeleteProfile}>Log out</Button>
            </form>
        </div>
    )
}