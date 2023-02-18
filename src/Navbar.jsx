import React from "react";

const Navbar = () => {
    return (
        <React.Fragment>
            <div className="fixed w-4/5 right-0 h-20 flex items-center py-15 bg-gray-900 md-0 overflow-hidden">
                <ul>
                    <li className="flex justify-between mx-10 bg-white-100">
                        <div className="inline-block">
                            <input type="search" className=" outline-none rounded w-80 bg-gray-800 p-2 hover:border-underlined  text-white" placeholder="Search" />
                            <button type="submit" className="outline-none bg-white">
                            </button>
                        </div>
                        {/* <button type="submit" class="outline-none  flex top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button> */}
                        <a href="/" className="block m-2 float-right text-white ">Profile</a>
                    </li>
                </ul>
                <div class="p-3">
                    {/* <label class="block font-medium text-gray-600" for="">Email</label> */}
                    <div class="relative flex flex-row-reverse items-center">
                        <input
                            class="w-96 p-2 pl-4 rounded-lg bg-gray-700 outline-none"
                            type="text"
                            placeholder="Search"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            class="w-6 mx-3 fill-gray-400 absolute"
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
            </div>
            <div className="h-20"></div>
        </React.Fragment>
    )
}
export default Navbar