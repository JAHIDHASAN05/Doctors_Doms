import { Link } from 'react-router-dom';
import img from './../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
  const {createUser}= useContext(AuthContext)
    const handleRegister=e=>{
        e.preventDefault()
        const form = e.target;
        const email= form.email.value;
        const password= form.password.value;
        const name= form.name.value;
        console.log(email, password , name)

        createUser(email, password)
         .then(result =>{
            const user= result.user;
            console.log(result)
         })
         .catch(error=>{
            console.log(error)
         })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2">
                    <img src={img} className='mr-7' alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className='text-5xl font-bold text-center'>Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                           
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" name="" value={'Register'} id="" />
                        </div>
                    </form>
                    <p className='text-center mb-5'>Already have an accoutn?  <Link to={'/login'} className='text-blue-500'>Login</Link></p>

                </div>
            </div>
        </div>
    );
};

export default Register;