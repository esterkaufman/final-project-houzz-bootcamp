
import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { LoginUser, User } from "../../../app/users/models";

function Register() {
    const [registerUser, setRegisterUser] = useState<LoginUser>({ email: "", password: "" });
    const [currentUser, setCurrentUser] = useState<User>()
    let navigate = useNavigate()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setRegisterUser(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
        event.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/register', { ...registerUser })
            console.log("----CurrentUser------", res.data.user);
            setCurrentUser({ ...res.data.user })
        } catch (error: any) {
            if (error.response.data.message == 'email already exist')
            navigate('login', { replace: true, state: { user: { email: registerUser.email, passsword: registerUser.password } } })
        }
    }
    return (
        <div>
            <h2>Register</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="text"
                        name="email"
                        placeholder="input email"
                        value={"" + registerUser.email || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        name="password"
                        placeholder="input password"

                        value={"" + registerUser.password || ""}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit" variant="primary" > register</Button>
            </Form>
            {
                currentUser && <div>
                    {currentUser.name} {currentUser.token}  {currentUser.role}
                </div>
            }

        </div>
    )
}
export default Register