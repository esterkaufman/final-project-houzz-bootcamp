import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import userService from "../service/user.service";
import { Iuser } from "../type/user";

export default function ManageProfile() {

    const nav = useNavigate();
    ///getById by token///
    const userDetails: Iuser = {
        name: "my-name",
        email: "email@gmail.com",
        password: 123,
        role: "user",
    }
    const [state, setState] = useState(userDetails);
    const [isDisable, setDisabled] = useState(false);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const value = Number(target.value);
        const name = target.name as any;
        setState({ ...state, [name]: value });
    }

    const handlerChangeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setDisabled(true)
        setTimeout(() => {
            setDisabled(false)
        }, 10000);
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity()) {
            userService.updateUserService('1', state)
                .then(() => nav('/toast', { state: { message: "user profile updated successfully", navigateAfter: "/" } }))
                .catch((err) => console.log(err))
        }
    }


    return (
        <div className="container" style={{ margin: 'auto' }}>
            <h1 style={{ fontSize: "20px", margin: '30px', }}>Manage Profile</h1>
            <div className='form-container' style={{ maxWidth: '30rem', margin: 'auto' }}>
                <Form onSubmit={handlerChangeSubmit} noValidate>
                    <div>
                        <Form.Group className="text-muted" style={{ marginBottom: '20px' }} controlId="formBasicText">
                            <Form.Label style={{ float: 'left' }}>Full name</Form.Label>
                            <Form.Control type="text" defaultValue={userDetails.name} name="name" required
                                onChange={(event) => handleChange(event as any)}
                                isInvalid={!state.name}
                            />
                            <Form.Control.Feedback type="invalid">invalid name.</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="text-muted" style={{ marginBottom: '20px' }} controlId="formBasicText">
                            <Form.Label style={{ float: 'left' }}>Password</Form.Label>
                            <Form.Control type="number" defaultValue={userDetails.password} name="password" required
                                onChange={(event) => handleChange(event as any)}
                            />
                            <Form.Control.Feedback type="invalid">invalid age.</Form.Control.Feedback>
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="text-muted" style={{ marginBottom: '20px' }} controlId="formBasicEmail">
                            <Form.Label style={{ float: 'left' }}>Email address</Form.Label>
                            <Form.Control type="email" defaultValue={userDetails.email} name="email" readOnly
                                onChange={(event) => handleChange(event as any)}
                            />
                        </Form.Group>
                    </div>
                    <div>
                        <Form.Group className="text-muted" style={{ marginBottom: '20px' }} controlId="formBasicText">
                            <Form.Label style={{ float: 'left' }}>Role</Form.Label>
                            <Form.Control type="text" defaultValue={userDetails.role} name="role" readOnly
                                onChange={(event) => handleChange(event as any)}
                            />
                        </Form.Group>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                        <Button disabled={isDisable} variant="primary" type="submit">Save profile changes
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

