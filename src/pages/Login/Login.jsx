import React from 'react';
import log from '../../assets/User-Registration.png'
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';
import { Helmet } from 'react-helmet';



const Login = () => {
    const [error, setError] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/'

    const onSubmit = data => {
       
        login(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                
                reset();
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'User Login successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                setError('');
                reset();
                navigate(from, { replace: true })
            })
            .catch(error => setError(error.message))
    }

    return (
        <div>
            <Helmet>
                <title>EduHub | Login</title>
            </Helmet>
            <h2 className='text-4xl font-bold text-center mt-6'>Register Now</h2>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-[90%]' src={log} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>

                            <p>{error.message}</p>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                            <p className='text-center'><small>Don`t have an account? Please <Link to='/register' className='text-blue-600 underline' >Register</Link></small></p>
                        </form>
                        <hr />
                        <SocialLogin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;