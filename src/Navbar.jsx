import React,{useContext} from "react";
 
const Navbar =()=>{
    return (
        <React.Fragment>
            <div className="fixed  w-full h-32 py-15 bg-gray-900 md-0 overflow-hidden relative">
                <ul>
                    <li className="h-1/5 flex-1 m-12 bg-white-100">
                        <div className="inline-block">
                            <input type="search" className=" outline-none rounded w-80 bg-gray-800 p-2 hover:border-underlined  text-white" placeholder="Search" />
                            <button type="submit" className="outline-none bg-white">
                            
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