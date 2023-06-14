import React from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSingIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
               

                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://assignment-12-server-xi-fawn.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true })
                    })
            })
    }


    return (
        <div className='text-center '>
            <h2 className='text-center font-bold text-3xl my-2'>Login With </h2>
            <div>
                <button onClick={handleGoogleSingIn} className='btn btn-primary mb-6'><FaGoogle></FaGoogle> Google</button>
            </div>

        </div>
    );
};

export default SocialLogin;