
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { LoginUser, User } from "../../../app/users/models";

// import Cookies from "universal-cookie";
// const cookies = new Cookies()

function Login() {
    const [loginUser, setloginUser] = useState<LoginUser>({ email: "", password: "" });
    const [currentUser, setCurrentUser] = useState<User>()


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setloginUser(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/login', loginUser)
            console.log("----CurrentUser------", res.data.user);
            setCurrentUser(res.data.user)
        } catch (error) {
            console.log(error);
        }
    }

    const getAllUsers = async () => {
        try {
            const users = await axios.get('http://localhost:8080/users' , { headers: { Authorization: `Bearer ${currentUser!.token}`} })
            console.log(users, "=====users=====");
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="input email"
                        value={"" + loginUser.email || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        name="password"
                        placeholder="input password"

                        value={"" + loginUser.password || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary" >login</Button>
            </Form>
            {
                currentUser && <div>
                    {currentUser.name} {currentUser.token}  {currentUser.role}
                </div>
            }
            <Button onClick={getAllUsers} > getAllUsers </Button>

        </div>
    )
}
export default Login