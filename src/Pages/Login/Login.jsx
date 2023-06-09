import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import { Link } from "react-router-dom";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="w-auto">
                        <img src="https://i.ibb.co/RyShP3F/reg1.png" alt="" />
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
                        <h1 className="text-center mb-3 text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            < >
                                <input
                                    type={passwordVisible ? 'text' : 'password'}
                                    placeholder="password"
                                    className="input input-bordered mt-2 pr-10"
                                />
                                <button
                                    type="button"
                                    className="password-toggle-btn"
                                    onClick={togglePasswordVisibility}
                                >
                                    {passwordVisible ? (
                                        <AiOutlineEye size={22} className="password-toggle-icon" />
                                    ) : (
                                        <AiOutlineEyeInvisible size={22}  className="password-toggle-icon" />
                                    )}
                                </button> 
                            </>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                            <p className="mt-1">New to Fluency Express? <Link to='/signup' className="text-blue-400">SignUp Now</Link> </p>
                        </div>
                    </form>
                   
                </div>
            </div>
        </div>
    );
};

export default Login;