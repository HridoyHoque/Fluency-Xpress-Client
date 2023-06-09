
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = data => {
      if(data.password !== data.confirmPassword){
        toast.error('Password and confirm password did not match')
        return;
      }
        createUser(data.email, data.password)
        .then(result => {
          const loggedUser = result.user;
            console.log(loggedUser);
            navigate('/')
            toast.success('Successfully created an account!')
         });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <div className="w-auto">
                    <img src="https://i.ibb.co/RyShP3F/reg1.png" alt="" />
                </div>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <h1 className="text-center mb-3 text-5xl font-bold">Signup now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="Your name" className="input input-bordered" />
                        {errors.name && <span className="text-red-500 mt-1">name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-500 mt-1">email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true, 
                            pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/,
                            minLength: 6})} placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className="text-red-500 mt-1">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-500 mt-1">Password is must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-500 mt-1">Password must have 1 capital letter and 1 special character</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <input type="password" {...register("confirmPassword", { required: true,
                             pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/, minLength: 6 })} placeholder="confirm password" className="input input-bordered" />
                        {errors.confirmPassword?.type === 'required' && <p className="text-red-500 mt-1">Password is required</p>}
                        {errors.confirmPassword?.type === 'minLength' && <p className="text-red-500 mt-1">Password is must be 6 characters</p>}
                        {errors.confirmPassword?.type === 'pattern' && <p className="text-red-500 mt-1">Password must have 1 capital letter and 1 special character</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" {...register("photo", { required: true })} placeholder="Your Photo" className="input input-bordered" />
                        {errors.photo && <span className="text-red-500 mt-1">PhotoURL is required</span>}
                    </div>
                   
                   
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="SignUp" />
                        <p className="mt-1">Already have an account? <Link to='/login' className="text-blue-400">Login Now</Link> </p>
                    </div>
                </form>
                <SocialLogin></SocialLogin>
                <Toaster/>
            </div>
        </div>
    </div>
    );
};

export default SignUp;