import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveUser } from '../../api/auth';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/";
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                // save users to  database
                saveUser(result.user)
                toast.success('account logged In successfully!')
                navigate(from, { replace: true });
            })
    }
    return (
        <div className='-mt-8'>
            <div className="divider">OR</div>
            <div className='w-full text-center mt-1 '>
                <button onClick={handleGoogleSignIn} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-l-4 mb-2"><FcGoogle /></button>
            </div>
            <Toaster />
        </div>
    );
};

export default SocialLogin;