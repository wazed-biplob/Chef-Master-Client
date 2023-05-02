import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Shared/Navbar";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";

const Login = () => {
  const { signInUser, signInWithGoogle, signInWithGitHub } =
    useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => console.log(result.user))
      .catch((error) => setError(error.message));
  };
  const handleSignInWithGitHub = () => {
    signInWithGitHub()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => setError(error.message));
  };
  return (
    <>
      <Header />
      <Container className="mx-auto w-25">
        <h4>Please Sign in</h4>
        <Form onSubmit={handleSignIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Sign in
          </Button>

          <span className="my-2 d-block">
            Do not have an account?
            <Link
              style={{ marginLeft: "4px", textDecoration: "none" }}
              to={"/registration"}
            >
              Register
            </Link>
          </span>
        </Form>

        <Button
          onClick={handleSignInWithGoogle}
          className="w-100 mb-2"
          variant="secondary"
          type="submit"
        >
          Sign in With Google
        </Button>
        <Button
          onClick={handleSignInWithGitHub}
          className="w-100 mb-2"
          variant="secondary"
          type="submit"
        >
          Sign in with Github
        </Button>
        <p className="text-danger">{error}</p>
      </Container>
    </>
  );
};

export default Login;
