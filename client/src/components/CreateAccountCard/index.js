// import React from "react";
import { Form, Card, Col, Button, Row, Alert } from "react-bootstrap";
import React, { useRef, useState } from "react";
// import { Form, Button, Card, Alert } from "react-bootstrap";
// import { useAuth } from "../components/contexts/AuthContext";
import { useAuth } from "../contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

// To Do: Email validation to confirm that email is not already in use.
// To Do: Password verification to ensure it matches & meets certain criteria

const styles = {
     card: {
          backgroundColor: "#8dc6bf",
     },
     button: {
          backgroundColor: "#99658A",
          borderColor: "#99658A",
     },
};

function CreateAccountCard() {
     const emailRef = useRef();
     const passwordRef = useRef();
     const passwordConfirmRef = useRef();
     const { createAccountCard } = useAuth();
     const [error, setError] = useState("");
     const [loading, setLoading] = useState("false");
     const history = useHistory();

     async function handleSubmit(e) {
          e.preventDefault();
          if (passwordRef.current.value !== passwordConfirmRef.current.value) {
               return setError("password do not match");
          }

          try {
               setError("");
               setLoading(true);
               await createAccountCard(
                    emailRef.current.value,
                    passwordRef.current.value
               );
               history.push("/");
          } catch {
               setError("Failed to create an account");
          }
          setLoading(false);
     }

     return (
          <Col className="mt-4">
               <Card style={styles.card}>
                    <Card.Body>
                         {error && <Alert variant="danger">{error}</Alert>}
                         <Form onSubmit={handleSubmit}>
                              <center>
                                   <Form.Label className="font-weight-bold">
                                        Create Account
                                   </Form.Label>
                              </center>

                              <Form.Group
                                   as={Row}
                                   controlId="formGroupFirstName"
                              >
                                   <Form.Label column sm="2">
                                        First Name
                                   </Form.Label>
                                   <Col sm="10">
                                        <Form.Control
                                             type="text"
                                             placeholder="Jane"
                                        />
                                   </Col>
                              </Form.Group>

                              <Form.Group
                                   as={Row}
                                   controlId="formGroupLastName"
                              >
                                   <Form.Label column sm="2">
                                        Last Name
                                   </Form.Label>
                                   <Col sm="10">
                                        <Form.Control
                                             type="text"
                                             placeholder="Doe"
                                        />
                                   </Col>
                              </Form.Group>

                              <Form.Group as={Row} controlId="formGroupEmail">
                                   <Form.Label column sm="2">
                                        Email
                                   </Form.Label>
                                   <Col sm="10">
                                        <Form.Control
                                             type="text"
                                             placeholder="example@email.com"
                                             ref={emailRef}
                                             required
                                        />
                                   </Col>
                              </Form.Group>

                              <Form.Group
                                   as={Row}
                                   controlId="formGroupPassword"
                              >
                                   <Form.Label column sm="2">
                                        Password
                                   </Form.Label>
                                   <Col sm="10">
                                        <Form.Control
                                             type="password"
                                             placeholder="Password"
                                             ref={passwordRef}
                                             required
                                        />
                                   </Col>
                              </Form.Group>

                              <Form.Group
                                   as={Row}
                                   controlId="formGroupPasswordConfirm"
                              >
                                   <Form.Label column sm="2">
                                        Confirm Password
                                   </Form.Label>
                                   <Col sm="10">
                                        <Form.Control
                                             type="password"
                                             placeholder="Password"
                                             ref={passwordConfirmRef}
                                             required
                                        />
                                   </Col>
                              </Form.Group>
                         </Form>

                         <center>
                              <Button
                                   style={styles.button}
                                   className="font-weight-bold"
                                   variant="primary"
                                   type="submit"
                              >
                                   Create Account
                              </Button>
                         </center>
                    </Card.Body>
               </Card>
               <div className="w-100 text-center mt-2">
                    Already have an account?
                    <Link to="/login">Login In</Link>
               </div>
          </Col>
     );
}

export default CreateAccountCard;
