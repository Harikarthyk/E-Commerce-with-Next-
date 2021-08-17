import Link from 'next/link'
import React, { useState } from 'react'
import { Form, FormControl, Button, InputGroup, Tab, Tabs, Row, Col, Toast, Modal, Spinner, Alert } from 'react-bootstrap'
import Layout from '../components/Layout'
import {  requestHandler } from './api/index';

export default function login() {
    const [key, setKey] = useState('login');
    const [toast, setToast] = useState({
        show: false,
        message: "",
        error : false
    });
    const [isLoading, setIsLoading] = useState(false);
    const loginPressed = async (event) => {
        event.preventDefault();
        const password = event.target.password.value;
        const email = event.target.email.value;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email || email.length <= 6 || false === email.match(validRegex)) {
            setToast({
                ...toast,
                message: "Invalid Email Entered",
                show: true
            })
            return;
        }
        if (!password || password.length < 6) {
            setToast({
                ...toast,
                message: "Password must be min 6 character",
                show: true
            })
            return;
        }
        const input = {
            password: password,
            email: email,
        }
        const headers = {
            Accept: 'application/json',
			'Content-Type': 'application/json',
        };
        setIsLoading(true);
        let response = await requestHandler('POST', 'login', input , headers);
        const { data } = response;
        if (undefined === data?.message || data?.message === null) {
            setToast({
                ...toast,
                show: true,
                message: data?.error || 'Something went wrong',
                error : true
            });
        }
        else {
            setToast({
                ...toast,
                show: true,
                message: data?.message,
                error : false
            });
            const{token,user} = data;
            localStorage.setItem('user',user);
            localStorage.setItem('token',token);
            window.location.href="/"
        }
        setIsLoading(false);
    }
    const registerPressed = async () => {
        event.preventDefault();
        const password = event.target.password.value;
        const email = event.target.email.value;
        const name = event.target.name.value;
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email || email.length <= 6 || false === email.match(validRegex)) {
            setToast({
                ...toast,
                message: "Invalid Email Entered",
                show: true,
                error  : true
            })
            return;
        }
        if (!password || password.length < 6) {
            setToast({
                ...toast,
                message: "Password must be min 6 character",
                show: true,
                error  : true
            })
            return;
        }
        if (!name || name.length < 3) {
            setToast({
                ...toast,
                message: "Name must be min 3 character",
                show: true,
                error  : true
            })
            return;
        }
        const body = {
            password: password,
            email: email,
            name : name
        };
        const headers = {
            Accept: 'application/json',
			'Content-Type': 'application/json',
        };
        setIsLoading(true);
        
        let response = await requestHandler('POST', 'register', body, headers);
        const { data } = response;
        if (undefined === data?.message || data?.message === null) {
            setToast({
                ...toast,
                show: true,
                message: data?.error || 'Something went wrong',
                error : true
            });
        }
        else {
            setToast({
                ...toast,
                show: true,
                message: data?.message+" Login to continue",
                error : false
            });
            setKey('login')
        }
        setIsLoading(false);
    }
    return (
        <div>
            <Layout>
                {/* <Modal show={toast.show} onHide={() => {
                    setToast({ ...toast, message: "", show: false });
                }}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login Error</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{toast.message}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => {
                            setToast({ ...toast, message: "", show: false });

                        }}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> */}
                {/* <Toast show={toast.show} onClose={()=>{
                    setToast({
                        ...toast,
                        show : false,
                        message :""
                    })
                }}>
                    <Toast.Header>
                        <strong className="me-auto" color="red">Error</strong>
                    </Toast.Header>
                    <Toast.Body>{toast.message}</Toast.Body>
                </Toast> */}
                <Row style={{
                    justifyContent: "center",
                    marginTop: 15,
                    minHeight: 300,
                    display: "flex",
                    alignItems: "center"
                }}>
                    <Col xxl={6} xl={6}>
                        {toast.show && 
                            <Alert variant={toast.error ? "danger" : "success"}>
                                {toast.message}
                            </Alert>
                        }
                        <Tabs
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                            className="mb-3"
                        >
                            <Tab eventKey="login" title="Login">
                                <Form onSubmit={loginPressed}>
                                    <InputGroup className="mb-3">
                                        {/* <InputGroup.Text id="inputGroup-sizing-sm">Enter Email</InputGroup.Text> */}
                                        <FormControl autoComplete="email" name="email" placeholder="exmaple@gmail.com" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        {/* <InputGroup.Text id="inputGroup-sizing-sm">Enter your Password</InputGroup.Text> */}
                                        <Form.Control autoComplete="current-password" name="password" type="password" placeholder="Password" />
                                    </InputGroup>

                                    <Button disabled={isLoading}  style={{
                                        backgroundColor : "#e88301",
                                        borderColor : "#e88301"
                                    }} variant="primary" type="submit">
                                        {isLoading && 
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                                style={{
                                                    marginRight: 10
                                                }}
                                            />
                                        }
                                        Let's go
                                    </Button>

                                </Form>
                            </Tab>
                            <Tab eventKey="register" title="Register">
                                <Form onSubmit={registerPressed}>
                                    <InputGroup className="mb-3">
                                        {/* <InputGroup.Text id="inputGroup-sizing-sm">Enter Full Name</InputGroup.Text> */}
                                        <FormControl name="name" autoComplete="username" placeholder="John" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        {/* <InputGroup.Text id="inputGroup-sizing-sm">Enter Email</InputGroup.Text> */}
                                        <FormControl name="email" autoComplete="email" placeholder="john@example.com" aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        {/* <InputGroup.Text id="inputGroup-sizing-sm">Enter your Password</InputGroup.Text> */}
                                        <Form.Control name="password" type="password" autoComplete="current-password" placeholder="Password" />
                                    </InputGroup>

                                    <Button disabled={isLoading}  style={{
                                        backgroundColor : "#e88301",
                                        borderColor : "#e88301"
                                    }} variant="primary" type="submit">
                                         Create your Account
                                    </Button>
                                </Form>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Layout>
        </div>
    )
}
