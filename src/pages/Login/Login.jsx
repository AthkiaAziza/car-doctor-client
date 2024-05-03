import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        signIn(email, password)
            .then(result => {
                console.log(result.user);
                const user = { email };

                // get access token
                axios.post('http://localhost:5000/jwt', user, { withCredentials: true })
                    .then(res => {
                        console.log(res.data)
                        if (res.data.success) {
                            navigate(location?.state ? location?.state : '/')
                        }
                    })
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-36">
                        <img src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl p-4">
                        <form onSubmit={handleLogin} className="card-body">
                            <h1 className="text-4xl font-bold text-center">Sign In</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name="email" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Your password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign In" className="btn bg-orange-500 border-none text-white" />
                            </div>
                        </form>
                        <p className='ml-16'>New to Car Doctors? <Link className='text-orange-700 font-bold ml-1' to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;