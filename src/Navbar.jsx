import React,{useContext} from "react";
 
const Navbar =()=>{
    return (
        <React.Fragment>
            <div className="fixed  w-full h-32 py-15 bg-gray-900 md-0 overflow-hidden relative">
                <ul>
                    <li className="h-1/5 flex-1 m-12 bg-white-100">
                        <div className="inline-block">
                            <input type="search" className=" outline-none rounded w-80 bg-gray-800 p-2 hover:border-underlined  text-white" placeholder="Search" />
                            <button type="submit" className="outline-none bg-white  z p-0 text-sm font-medium bg-blue-500 hover">
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="32px" height="32px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"/></svg>
                             </button>
                        </div>
                            {/* <button type="submit" class="outline-none  flex top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                <span class="sr-only">Search</span>
                            </button> */}
                        <a href="/" className="m-2 float-right text-white ">Profile</a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
export default Navbar