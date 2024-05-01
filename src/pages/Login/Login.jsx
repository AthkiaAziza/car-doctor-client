import login from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault()
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
                            <h1 className="text-4xl font-bold text-center">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                            </div>

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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;