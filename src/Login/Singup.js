import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/AuthProvider';
import useTitle from '../hooks/useTitle';

const Singup = () => {
    const {setLoader, singInWithGoogle, signInWithGithub, signInWithTwitter, createUser, updateUserProfile } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [accept, setAccept] = useState(false);
    useTitle('Register')

    let from = location.state?.from?.pathname || "/";
    const [error, setError] = useState();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo_url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name,photo_url,email, password);
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('Please provide at least two uppercase');
            return;
        }
        if(password.length < 6){
            setError('Password should be at least 6 characters.')
            return;
        }
        if(!/(?=.*[!@#$%^&*])/.test(password)){
            setError('Please add at least one special character')
            return;
        }
        setError(" ");
        createUser(email, password)
            .then(result => {
                handleUpdateUser(name, photo_url);
                toast.success('Registration Successful!', { autoClose: 1000 })
                console.log(result.user);
                form.reset();
                navigate('/home');
            })
            .catch(error => {
                setError(error.message)
                toast.error(error.message, { autoClose: 1000 })
            })

    }

    const handleUpdateUser = (name, photo_url) => {
        updateUserProfile({ displayName: name, photoURL: photo_url })
            .then(() => {
                setLoader(false)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleGoogleSingIn = () => {
        singInWithGoogle()
            .then(result => {
                toast.success("Login success!", { autoClose: 1000 })
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.success(error.massage, { autoClose: 1000 })
            })
    }

    const handleTwitterSingIn = () => {
        signInWithTwitter()
            .then(result => {
                toast.success("Login success!", { autoClose: 1000 })
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.success(error.massage, { autoClose: 1000 })
            })
    }

    const handleGithubSingIn = () => {
        signInWithGithub()
            .then(result => {
                toast.success("Login success!", { autoClose: 700 })
                navigate(from, { replace: true });
            })
            .catch(error => {
                toast.success(error.massage, { autoClose: 1000 })
            })
    }

    const handleAccepted = event => {
        setAccept(event.target.checked)
    }

    return (
        <div  className='flex justify-center items-center my-28'>
            <div className="w-full max-w-lg p-8 space-y-3 rounded-xl shadow-lg text-black border-activeColor border bg-gray-200">
                <h1 className="text-4xl font-bold text-center text-navActive">Registration</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-2">
                        <label htmlFor="username" className="block text-2xl text-gray-600">Full Name</label>
                        <input type="text" name="name" id="username" placeholder="Full Name" className="w-full px-4 py-3 text-xl border focus:border-navActive outline-none rounded-md border-gray-300 bg-gray-50 text-gray-800" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="url" className="block text-2xl text-gray-600">Photo URL</label>
                        <input type="text" name="url" id="url" placeholder="URL" className="w-full px-4 py-3 text-xl border focus:border-navActive outline-none rounded-md border-gray-300 bg-gray-50 text-gray-800" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-2xl text-gray-600">Email</label>
                        <input type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 text-xl border focus:border-navActive outline-none rounded-md border-gray-300 bg-gray-50 text-gray-800" required />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-2xl text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 border focus:border-navActive outline-none rounded-md border-gray-300 text-xl bg-gray-50 text-gray-800" required />
                        <p className='text-red-600 font-medium text-base'>{error}</p>
                    </div>
                    <div className='space-y-2'>
                        <div className='flex items-start mb-4'>
                            <input id="checkbox" onClick={handleAccepted} className="cursor-pointer h-5 w-5" type="checkbox"/>
                                <label htmlFor="checkbox" className="cursor-pointer text-sm ml-3 font-medium text-gray-900">I agree to the <Link to="/terms&conditions" className="text-blue-600 hover:underline">terms and conditions</Link></label>
                        </div>
                    </div>
                    <div>
                        <button type='submit' disabled={!accept} className="block w-full p-3 text-2xl font-semibold rounded-md text-center text-normalColor shadow bg-activeColor hover:text-black hover:bg-gray-300 transition-all duration-300 border-2 border-transparent hover:border-2 disabled:bg-gray-300 disabled:text-gray-500">Register</button>
                    </div>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-600"></div>
                    <p className="px-3 text-base text-black">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-600"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handleGoogleSingIn} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <FcGoogle className='text-2xl'></FcGoogle>
                    </button>
                    <button onClick={handleTwitterSingIn} aria-label="Log in with Twitter" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-sky-500">
                            <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z"></path>
                        </svg>
                    </button>
                    <button onClick={handleGithubSingIn} aria-label="Log in with GitHub" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                        </svg>
                    </button>
                </div>
                <p className="text-xl text-center sm:px-6 text-black">Already have an account? <Link to="/login" className="underline text-navActive">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Singup;