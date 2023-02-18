import React, { useContext } from "react";
import AuthContext from "./context/auth-context";

const Navbar = () => {
    const authContext = useContext(AuthContext);
    return (
        <React.Fragment>
            <div className="fixed w-4/5 right-0 h-20 flex items-center py-15 bg-gray-900 md-0 overflow-hidden">
                <ul className="flex justify-between w-full pr-32 items-center">
                    <li className="flex justify-between mx-10 bg-white-100">
                        <div className="p-3">
                            {/* <label className="block font-medium text-gray-600" for="">Email</label> */}
                            <div className="relative flex flex-row-reverse items-center">
                                <input
                                    className="w-96 p-2 pl-4 rounded-lg bg-gray-700 outline-none"
                                    type="text"
                                    placeholder="Search"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-6 mx-3 fill-gray-400 absolute"
                                >
                                    <path
                                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                                    />
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </li>
                    <li href="/" className="block m-2 float-right text-white ">{authContext.user.displayName}</li>
                </ul>

            </div>
            <div className="h-20"></div>
        </React.Fragment>
    )
}
export default Navbar