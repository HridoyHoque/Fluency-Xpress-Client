import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import toast, { Toaster } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { saveUser } from "../../api/auth";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const { signIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                saveUser(result.user)
                navigate(from, { replace: true });
                toast.success('account loggedIn successfully!')

            })
            .catch(() => {
                toast.error('Not valid Email and password!')
            })
    }
    console.log(errors);

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <div className="w-auto">
                            <img src="https://i.ibb.co/RyShP3F/reg1.png" alt="" />
                        </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-center mb-3 text-5xl font-bold">Login now!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500 mt-1">email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                < >
                                    <input
                                        {...register("password", { required: true })}
                                        type={passwordVisible ? 'text' : 'password'}
                                        placeholder="password"
                                        className="input input-bordered mt-2 pr-10"
                                    />
                                    {errors.password && <span className="text-red-500 mt-1">Password is required</span>}
                                    <button
                                        type="button"
                                        className="password-toggle-btn"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {passwordVisible ? (
                                            <AiOutlineEye size={22} className="password-toggle-icon" />
                                        ) : (
                                            <AiOutlineEyeInvisible size={22} className="password-toggle-icon" />
                                        )}
                                    </button>
                                </>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                                <p className="mt-1">New to Fluency Express? <Link to='/signup' className="text-blue-400">SignUp Now</Link> </p>
                            </div>
                        </form>

                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
            <Toaster />
        </>
    );
};

export default Login;