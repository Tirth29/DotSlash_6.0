import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
// import SideBarLink from './SideBarLink';
// import AuthContext from '../context/auth-context';
// import { HomeIcon, ChatBubbleLeftIcon as MsgBubbleIcon, ChartBarIcon as StatsIcon, FolderOpenIcon as FolderIcon, CalendarIcon, Cog6ToothIcon as SettingsIcon, ArrowRightOnRectangleIcon as LogoutIcon } from '@heroicons/react/24/outline'

const SideBar = () => {
    // const authCtx = useContext(AuthContext);
    const activeStyle = `bg-blue-500`;
    const inActiveStyle = ``;
    return (
        <React.Fragment>
            <div className="fixed w-1/5 h-screen py-5 bg-gray-300 ">
                <h1 className="my-10 px-10 text-lg font-semibold ">Student Manager</h1>
                <ul className="my-12 space-y-2 text-opacity-50 " >
                    <NavLink to="/todo" className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex">To do List</a> </li>
                    </NavLink>
                    <NavLink to={"/attendance"} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex">Attandance Manager</a> </li>
                    </NavLink>
                    {/* <NavLink to={"/progress"} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex ">Progress</a> </li>
                    </NavLink> */}
                    <NavLink to={"/study-material"} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex ">Study Material</a> </li>
                    </NavLink>
                    <NavLink to={"/schedule"} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex ">Schedule</a> </li>
                    </NavLink>
                    <NavLink to={"/subjects"} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex ">Subjects</a> </li>
                    </NavLink>
                </ul>
            </div>
            <div className="h-screen w-1/5"></div>
        </React.Fragment>
    )
}

export default SideBar