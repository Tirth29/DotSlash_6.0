import React, { useContext, useState } from 'react'
import useInput from './hooks/useInput'
import AuthContext from './context/auth-context'
import Loader from './UI/Loader'
import Button from './UI/Button'
import { useNavigate } from 'react-router-dom'
// import authErrorHandler from '../../utilities/authErrorHandler'
// import { ReactComponent as GoogleIcon } from './assets/svg/google.svg';

const inputStyle = "p-3 pl-6 w-full rounded-full outline-none bg-opacity-25 bg-white text-gray-100 placeholder-gray-400";

const Authentication = (props) => {
    const [isSignUp, setIsSignUp] = useState(props.isSignUp ? props.isSignUp : true);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const email = useInput({});
    const password = useInput({});
    const fname = useInput({});
    const lname = useInput({});
    const username = useInput({});
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const toggleForm = () => {
        setErrorMessage("");
        setIsSignUp(prevState => !prevState);
    }

    const validate = () => {
        if (isSignUp) {
            if (!fname.value.trim()) return "First name cannot be empty";
            if (!lname.value.trim()) return "Last name cannot be empty";
            // if (!username.value.trim()) return "Username cannot be empty";
        }
        if (!email.value.trim()) return "Email cannot be empty";
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) return "Email is invalid";
        if (!password.value) return "Password cannot be empty";
        console.log(password.value.length)
        if (password.value.length < 8) return "Password is too short";
        return "VALID";
    }

    const submitHandler = async (event) => {
        event.preventDefault();
        let msg = validate();
        console.log(msg, errorMessage)
        if (errorMessage && errorMessage === msg) {
            return
        }
        else if (msg !== "VALID") {
            setErrorMessage(msg);
            return;
        }
        setIsLoading(true)
        try {
            let data = { email: email.value, password: password.value };
            if (isSignUp) {
                await authCtx.signup('EMAIL', data);
            } else {
                await authCtx.login('EMAIL', data);
            }
        } catch (e) {
            console.log(e)
            msg = authErrorHandler(e.error.message);
            console.log(msg)
            setErrorMessage(msg);
        }

        setIsLoading(false);
        console.log('hey')
        navigate('/home');
        console.log('hey')

    }

    return (
        <div className="flex flex-col items-center w-full h-screen text-gray-200 bg-gradient-to-br from-emerald-900 to-cyan-900">
            <form className="flex flex-col h-fit space-y-4 w-[500px] mt-28 bg-transparent" onSubmit={submitHandler}>
                <h1 className="text-center text-3xl font-semibold my-4 text-white">{isSignUp ? "Don't have an account?" : "Already have an Account?"}</h1>
                {isSignUp &&
                    <>
                        <div className='flex space-x-4'>
                            <input className={inputStyle} onChange={fname.onChange} value={fname.value} autoComplete={"kjdsn"} type="text" placeholder="First Name" name='fname' />
                            <input className={inputStyle} onChange={lname.onChange} value={lname.value} type="text" placeholder="Last Name" name='lname' />
                        </div>
                        {/* <input className={inputStyle} onChange={username.onChange} value={username.value} type="text" placeholder="Username" name='username' /> */}
                    </>
                }
                <input className={inputStyle} onChange={email.onChange} value={email.value} type="text" placeholder="Email" name='email' />
                <input className={inputStyle} onChange={password.onChange} value={password.value} type="password" placeholder="Password" name='password' />

                {<span className="h-5 pl-6 text-sm text-red-600" >{errorMessage}</span>}
                <Button className={"w-36 mx-auto font-semibold text-white bg-green-500 hover:bg-green-600 active:bg-green-500"} bgColor="green-500" type={"submit"} content={isLoading ? <Loader className="mx-auto w-5 animate-spin" /> : isSignUp ? "SIGN UP" : "SIGN IN"} />
                {/* {isSignUp && <a href='./login' className="text-sm cursor-pointer">Forgot Password?</a>} */}
                <span className='text-center'>{isSignUp ? "Don't have an account?" : "Already have an account?"} <span className='cursor-pointer font-bold text-green-400 hover:underline' onClick={toggleForm}>{isSignUp ? "Sign In" : "Sign Up"}</span></span>
            </form>
            <div className='flex items-center my-3 space-x-8'>
                <button onClick={() => authCtx.login('GOOGLE')}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="48" height="48"
                    viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg></button>
            </div>
        </div >
    )
}

export default Authentication