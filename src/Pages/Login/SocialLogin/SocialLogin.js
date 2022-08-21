import React from 'react';
import googleLogo from '../../../images/social/google.png'
import fblogo from '../../../images/social/facebook.png'
import githublogo from '../../../images/social/768px-Ei-sc-github.svg.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate=useNavigate()
    const [signInWithGoogle,user,error] = useSignInWithGoogle(auth);
    const [signInWithGithub,user1] = useSignInWithGithub(auth);
    if(user || user1){
        navigate('/home')
    }
   
    return (
    
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 ms-5'></div>
                <div className='ms-2 me-2 mt-2'> <p >or</p></div>
                <div style={{ height: '1px' }} className='bg-primary w-50 me-5'></div>

            </div>
           
            <div className='ms-5 mt-3'><button onClick={()=>signInWithGoogle()} style={{height:'50px'}} className='btn bg-info w-75 d-block mx-auto'>
                <img style={{ width: '30px' }} src={googleLogo} alt="" />
                <span className='px-3'>Google sign in</span>
            </button></div>

            <div className='ms-5 mt-3'><button style={{height:'50px'}} className='btn bg-info w-75 d-block mx-auto'>
                <img style={{ width: '30px' }} src={fblogo} alt="" />
                <span className='px-3'>Facebook sign in</span>
            </button></div>
            <div className='ms-5 mt-3 mb-3'><button onClick={()=>signInWithGithub()} style={{height:'50px'}} className='btn d-block mx-auto bg-info w-75 '>
                <img style={{ width: '40px' }} src={githublogo} alt="" />
                <span className='px-3'>github sign in</span>
            </button></div>
        </div>

    );
};

export default SocialLogin;