import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "../../Shared/Navbar";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { getAuth, updateProfile } from "firebase/auth";
const auth = getAuth();
const Registration = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const handleRegisterUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const c_password = form.c_password.value;

    if (password !== c_password) {
      const errorMsg = `Password Doesn't Match!`;
      setError(errorMsg);
      return;
    } else if (password.length < 6) {
      const errorMsg = `Password Must be at least 8 Characters.`;
      setError(errorMsg);
      return;
    }

    registerUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photo,
        });
        form.reset();
      })
      .catch((error) => setError(error.message));
  };
  return (
    <div>
      <Header />
      <Container className="mx-auto w-25">
        <h4>Please Register</h4>
        <Form onSubmit={handleRegisterUser}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Your Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              name="photo"
              type="text"
              placeholder="Photo URL"
              required
            />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicConfPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="c_password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Log in
          </Button>

          <span className="mt-2 d-block">
            Already Registered?
            <Link
              style={{ marginLeft: "4px", textDecoration: "none" }}
              to={"/login"}
            >
              Sign In
            </Link>
          </span>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Registration;
