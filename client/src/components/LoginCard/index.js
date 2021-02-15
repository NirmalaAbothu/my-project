import React, { useRef, useState } from "react";
import { Form, Card, Col, Button, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";

import { Link, useHistory } from "react-router-dom";

const styles = {
     card: {
          backgroundColor: "#8dc6bf",
     },
     button: {
          backgroundColor: "#99658A",
          borderColor: "#99658A",
     },
};

function LoginCard() {
     const emailRef = useRef();
     const passwordRef = useRef();

     const { loginCard } = useAuth();
     const [error, setError] = useState("");
     const [loading, setLoading] = useState("false");
     const history = useHistory();

     async function handleSubmit(e) {
          e.preventDefault();

          try {
               setError("");
               setLoading(true);
               await loginCard(
                    emailRef.current.value,
                    passwordRef.current.value
               );
               history.push("/");
          } catch {
               setError("Failed to sign in");
          }
          setLoading(false);
     }

     return (
          <Col className="mt-4">
               <Card style={styles.card}>
                    <Card.Body>
                         <Form onSubmit={handleSubmit}>
                              <center>
                                   <Form.Label className="font-weight-bold">
                                        Login
                                   </Form.Label>
                              </center>
                              {error && <Alert variant="danger">{error}</Alert>}
                              <Form.Group controlId="formGroupEmail">
                                   <Form.Label>Email</Form.Label>
                                   <Form.Control
                                        type="text"
                                        placeholder="Enter your email"
                                        ref={emailRef}
                                        required
                                   />
                              </Form.Group>
                              <Form.Group controlId="formGroupPassword">
                                   <Form.Label>Password</Form.Label>
                                   <Form.Control
                                        type="password"
                                        placeholder="Enter your password"
                                        ref={passwordRef}
                                        required
                                   />
                              </Form.Group>
                         </Form>
                         <center>
                              <Button
                                   style={styles.button}
                                   className="font-weight-bold"
                                   variant="primary"
                                   type="submit"
                              >
                                   Login
                              </Button>
                         </center>
                         <div className="w-100 text-center mt-3">
                              <Link to="/forgot-password">
                                   Forgot Password?
                              </Link>
                         </div>
                    </Card.Body>
               </Card>
          </Col>
     );
}

export default LoginCard;
