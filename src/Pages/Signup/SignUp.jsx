
import { Link } from "react-router-dom";

const SignUp = () => {
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
                    <h1 className="text-center mb-3 text-5xl font-bold">Signup now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm password</span>
                        </label>
                        <input type="password" placeholder="confirm password" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Your Photo" className="input input-bordered" />
                    </div>
                   
                   
                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="SignUp" />
                        <p className="mt-1">Already have an account? <Link to='/login' className="text-blue-400">Login Now</Link> </p>
                    </div>
                </form>
               
            </div>
        </div>
    </div>
    );
};

export default SignUp;