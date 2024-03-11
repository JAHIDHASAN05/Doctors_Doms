import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const SocialLogin = () => {

    const {googleLogIn}= useContext(AuthContext)
    const handleGoogleLogin=()=>{
        googleLogIn()
    }
    return (
        <div className='text-center'>
            <div className='divider'>or</div>
            <div>
                <button onClick={handleGoogleLogin} className='btn btn-outline btn-circle'>G</button>
            </div>
        </div>
    );
};

export default SocialLogin;