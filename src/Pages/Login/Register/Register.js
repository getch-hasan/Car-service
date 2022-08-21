import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom'
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const [agree, setAgree] = useState(false)
    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const [errors, setErrors] = useState('')
    if (user) {
        navigate('/home')
        console.log(user)
    }
    const handlesubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        /*  const agree=e.target.terms.checked
        if(agree){
         createUserWithEmailAndPassword(email, password)
        } */

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile')
        console.log(name)

        if (!agree) {
            setErrors('Please agree with us')
        }




    }
    return (

        <div className='mt-5'>

            <Form onSubmit={handlesubmit} className='w-50 mx-auto mt-5'>
                <h1>Please register</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={agree ? 'text-primary' : ''} htmlFor="terms"> Accept our terms and condition</label> */}
                <label className={`ps-2 ${agree ? 'text-primary' : ''}`} htmlFor="terms"> Accept our terms and condition</label>
                <p className='text-danger'>{errors}</p>
                <div className='mt-2 mb-2'><Button
                    disabled={!agree}
                    variant="primary" type="submit">
                    Submit
                </Button></div>
                <p>Already have an account<Link to="/login" className='text-decoration-none text-danger pe-auto'> Please login</Link></p>
                <SocialLogin></SocialLogin>
            </Form>

        </div>


    );
};

export default Register;