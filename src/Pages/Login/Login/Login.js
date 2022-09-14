import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom'
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';
const Login = () => {



    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate()
    let errorElement;
    if (error) {
        errorElement = <p>{error.message}</p>
    }
    if (user) {
        navigate('/home')
    }
    const handlesubmit = (e) => {
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password);
        e.preventDefault()


    }

    const resetpassword = async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
        toast('Sent email');
        }
        else{
            toast('please enter your email')
        }
    }

    const register = () => {
        navigate('/register')
    }
    return (
        <div className='mt-5 pt-3'>
            <Helmet>
                <title>Login</title>
            </Helmet>

            <Form onSubmit={handlesubmit} className='w-50 mx-auto mt-5'>
                <h1>Please Login</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                {errorElement}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <p>New to here? <Link to="/register" onClick={register} className='text-decoration-none text-danger pe-auto'> Please register</Link></p>
                <p> <button  onClick={resetpassword} className='text-decoration-none border-none btn text-info pe-auto'> Forgat password?</button></p>
                {sending.message}
                <ToastContainer />
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Login;