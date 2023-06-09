import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../Providers/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                toast.success('account loggedIn successfully!')
                navigate('/')
                console.log(loggedUser)
            })
    }
    return (
        <div className='-mt-8'>
            <div className="divider">OR</div>
            <div className='w-full text-center mt-1 '>
                <button onClick={handleGoogleSignIn} className="btn btn-outline "><FcGoogle /></button>
            </div>
            <Toaster />
        </div>
    );
};

export default SocialLogin;