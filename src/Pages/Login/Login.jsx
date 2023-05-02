import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <>
      <Header />
      <Container className="mx-auto w-25">
        <h4>Please Sign in</h4>
        <Form onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="warning" type="submit">
            Sign in
          </Button>

          <span className="mt-2 d-block">
            Do not have an account?
            <Link to={"/registration"}> Register</Link>
          </span>
          <br />
          <Button className="w-100 mb-2" variant="secondary" type="submit">
            Sign in With Google
          </Button>
          <Button className="w-100 mb-2" variant="secondary" type="submit">
            Sign in with Github
          </Button>
          <Form.Text className="text-danger"></Form.Text>
          <Form.Text className="text-success"></Form.Text>
        </Form>
      </Container>
    </>
  );
};

export default Login;
