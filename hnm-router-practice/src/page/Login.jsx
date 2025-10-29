import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

const Login = ({setAuthenticate}) => {
    const navigate = useNavigate();
    const loginUser = (event) => {
        event.preventDefault();
	console.log("login user function issue")
    setAuthenticate(true);
    navigate("/")} //로그인 됐을 때 메인 페이지로 돌아가기
  return (
    <Container>
        <Form onSubmit = {(event)=>loginUser(event)}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="danger" type="submit">
                Submit
            </Button>
        </Form>
    </Container>
  )
}
export default Login;