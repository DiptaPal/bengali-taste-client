import React, { useState, useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FiUserCheck } from 'react-icons/fi';
import logo from '../../../assets/image/main-logo.png'
import { AuthContext } from '../../../Context/AuthProvider';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [show, setShow] = useState(false)

    const navigate = useNavigate()

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logout successful !", { autoClose: 1000 })
                navigate('/')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (
        <div className=''>
            <div className="py-5">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <NavLink
                            to="/"
                            aria-label="Company"
                            className="inline-flex items-center mr-8"
                        >
                            <img src={logo} className="h-auto w-20" alt="" />
                            <span className="ml-2 text-2xl font-bold tracking-wide mr-6 text-activeColor">
                                Bengali Taste
                            </span>
                        </NavLink>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <NavLink
                                    to="/home"
                                    aria-label="Our product"
                                    className={({ isActive }) =>
                                        isActive ? "font-medium tracking-wide text-activeColor hover:text-normalColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-normalColor hover:text-activeColor transition-colors duration-300 text-xl"
                                    }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    aria-label="Our product"
                                    className={({ isActive }) =>
                                        isActive ? "font-medium tracking-wide text-activeColor hover:text-normalColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-normalColor hover:text-activeColor transition-colors duration-300 text-xl"
                                    }
                                >
                                    Service
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    aria-label="Product pricing"
                                    className={({ isActive }) =>
                                        isActive ? "font-medium tracking-wide text-activeColor hover:text-normalColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-normalColor hover:text-activeColor transition-colors duration-300 text-xl"
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>

                        </ul>
                    </div>

                    <ul className="flex items-center hidden space-x-8 lg:flex">
                    {
                        user && user?.uid ?
                            
                                <div className="inline-flex items-stretch rounded-xl border bg-white">
                                    <button onClick={() => setShow(!show)}>
                                        {
                                            user?.photoURL ?
                                                <div className="rounded-md">
                                                    <img className='w-14 h-14 mx-auto bg-navActive rounded-xl text-center' src={user?.photoURL} alt="" />
                                                </div> :
                                                <div className="rounded-l-md px-4 py-2">
                                                    <FiUserCheck className='w-14 h-14 mx-auto bg-white rounded-xl text-center'>
                                                    </FiUserCheck>
                                                </div>
                                        }
                                    </button>


                                    <div className="relative">
                                        <button
                                            type="button"
                                            className="inline-flex h-full items-center justify-center rounded-r-md"
                                        >
                                            <span className="sr-only">Menu</span>
                                        </button>

                                        <div
                                            className={`absolute right-0 z-10 w-56 origin-top-right rounded-md border border-gray-300 bg-[#f5f4f0] shadow-lg ${show ? 'block' : 'hidden'}`}
                                            role="menu"
                                        >
                                            <div onClick={() => setShow(!show)} className="p-2 flex flex-col gap-2">
                                                <div>
                                                    <NavLink
                                                        to="/myReview"
                                                        aria-label="Product pricing"
                                                        className="w-full inline-flex items-center justify-center px-6 py-2 font-medium tracking-wide bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor focus:shadow-outline focus:outline-none text-xl"
                                                        role="menuitem"
                                                    >
                                                        My Review
                                                    </NavLink>
                                                </div>

                                                <div onClick={() => setShow(!show)}>
                                                    <NavLink
                                                        to="/addService"
                                                        aria-label="Product pricing"
                                                        className="w-full inline-flex items-center justify-center px-6 py-2 font-medium tracking-wide bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor focus:shadow-outline focus:outline-none text-xl"
                                                        role="menuitem"
                                                    >
                                                        Add Service
                                                    </NavLink>
                                                </div>
                                                <div onClick={() => setShow(!show)}>
                                                    <button onClick={handleLogout}
                                                        role="menuitem"
                                                        className="w-full inline-flex items-center justify-center px-6 py-2 font-medium tracking-wide bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor focus:shadow-outline focus:outline-none text-xl">Logout</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            :
                                <NavLink
                                    to="/login"
                                    className={({ isActive }) =>
                                        isActive ? "inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide bg-normalColor text-activeColor transition duration-200 rounded-md shadow-md hover:bg-activeColor hover:text-normalColor focus:shadow-outline focus:outline-none text-xl" : "inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor focus:shadow-outline focus:outline-none text-xl"
                                    }
                                    aria-label="Sign up"
                                >
                                    Login
                                </NavLink>
                    }
                    </ul>
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg className="w-5 text-navActive" viewBox="0 0 20 20">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 w-full z-50">
                                <div className="p-5 bg-[#f5f4f0] border rounded shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <NavLink
                                                to="/"
                                                aria-label="Company"
                                                className="inline-flex items-center"
                                            >

                                                <img src={logo} className="h-auto w-16" alt="" />
                                                <span className="ml-2 text-3xl font-extrabold tracking-wide text-activeColor">
                                                    Bengali Taste
                                                </span>
                                            </NavLink>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                className="p-2 -mt-2 -mr-2 transition text-navActive bg-[#f5f4f0] duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg className="w-5 text-navActive" viewBox="0 0 20 20">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav className='z-50'>
                                        <ul className="space-y-4">
                                            <li>
                                                <NavLink
                                                    to="/home"
                                                    aria-label="Our product"
                                                    className={({ isActive }) =>
                                                        isActive ? "font-medium tracking-wide text-navActive hover:text-navColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-navColor hover:text-navActive transition-colors duration-300 text-xl"
                                                    }>
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/services"
                                                    aria-label="courses"
                                                    className={({ isActive }) =>
                                                        isActive ? "font-medium tracking-wide text-navActive hover:text-navColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-navColor hover:text-navActive transition-colors duration-300 text-xl"
                                                    }
                                                >
                                                    Service
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="/blog"
                                                    aria-label="courses"
                                                    className={({ isActive }) =>
                                                        isActive ? "font-medium tracking-wide text-navActive hover:text-navColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-navColor hover:text-navActive transition-colors duration-300 text-xl"
                                                    }
                                                >
                                                    Blog
                                                </NavLink>
                                            </li>
                                            <>
                                                {
                                                    user && user?.uid ?
                                                        <>
                                                            <li>
                                                                {
                                                                    user?.photoURL ?
                                                                        <Link to='/profile'>
                                                                            <img className='w-14 p-1 h-14 bg-navActive rounded-xl text-center' src={user?.photoURL} alt="" />
                                                                        </Link>
                                                                        :
                                                                        <Link to='/profile' className='text-navActive'>
                                                                            <FiUserCheck className='w-14 p-1 h-14 bg-white rounded-xl text-center'>
                                                                            </FiUserCheck>
                                                                        </Link>
                                                                }
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    to="/blog"
                                                                    aria-label="Product pricing"
                                                                    className={({ isActive }) =>
                                                                        isActive ? "font-medium tracking-wide text-activeColor hover:text-normalColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-normalColor hover:text-activeColor transition-colors duration-300 text-xl"
                                                                    }
                                                                >
                                                                    My Review
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <NavLink
                                                                    to="/blog"
                                                                    aria-label="Product pricing"
                                                                    className={({ isActive }) =>
                                                                        isActive ? "font-medium tracking-wide text-activeColor hover:text-normalColor transition-colors duration-300 text-xl" : "font-medium tracking-wide text-normalColor hover:text-activeColor transition-colors duration-300 text-xl"
                                                                    }
                                                                >
                                                                    Add Service
                                                                </NavLink>
                                                            </li>
                                                            <li>
                                                                <button onClick={handleLogout}
                                                                    role="menuitem"
                                                                    className="w-full inline-flex items-center justify-center px-6 py-2 font-medium tracking-wide bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor focus:shadow-outline focus:outline-none text-xl">
                                                                    Logout
                                                                </button>
                                                            </li>
                                                        </>
                                                        :
                                                        <>
                                                            <li>
                                                                <NavLink
                                                                    to="/login"
                                                                    className={({ isActive }) =>
                                                                        isActive ? "inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide bg-normalColor text-activeColor transition duration-200 rounded-md shadow-md hover:bg-activeColor hover:text-normalColor focus:shadow-outline focus:outline-none text-xl" : "inline-flex items-center justify-center px-6 py-3 font-medium tracking-wide bg-activeColor text-white transition duration-200 rounded-md shadow-md hover:bg-gray-300 hover:text-activeColor focus:shadow-outline focus:outline-none text-xl"
                                                                    }
                                                                    aria-label="Sign up"
                                                                >
                                                                    Login
                                                                </NavLink>
                                                            </li>
                                                        </>

                                                }
                                            </>
                                        </ul>

                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Header;