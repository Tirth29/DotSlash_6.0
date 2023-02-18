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
                    <NavLink to={"/todo"} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex">To do List</a> </li>
                    </NavLink>
                    <NavLink to={"/attendance"} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex">Attandance Manager</a> </li>
                    </NavLink>
                    <NavLink to={""} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex ">Target Marks</a> </li>
                    </NavLink>
                    <NavLink to={"/progress"} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex ">Progress</a> </li>
                    </NavLink>
                    <NavLink to={"/study"} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex ">Study Material</a> </li>
                    </NavLink>
                    <NavLink to={""} className={({ isActive }) => isActive ? activeStyle : inActiveStyle}>
                        <li className=' py-2 mx-6 my-2 rounded hover:bg-4 hover:bg-blue-600  hover:text-white'> <a href="/" className="px-4 my-0.5 flex ">Schedule</a> </li>
                    </NavLink>

                    {/*<SideBarLink to={'/home'} icon={<HomeIcon className='w-5' />} label="Overview" />
                    <SideBarLink to={'/stats'} icon={<StatsIcon className='w-5' />} label="Stats" />
                    <SideBarLink to={'/projects'} icon={<FolderIcon className='w-5' />} label="Projects" />
                    <SideBarLink to={'/chat'} icon={<MsgBubbleIcon className='w-5' />} label="Chat" />
                    <SideBarLink to={'/calendar'} icon={<CalendarIcon className='w-5' />} label="Calendar" />

                    <NavLink to={""} className={({isActive}) => isActive?activeStyle :inActiveStyle}>
                    <li className="my-48"></li>
                    </NavLink>

                    <SideBarLink to={'/settings'} icon={<SettingsIcon className='w-5' />} label="Settings" />
                    <SideBarLink to={'/logout'} icon={<LogoutIcon className='w-5' />} onClick={authCtx.logout} label="Logout" />*/}
                </ul>
            </div>
            <div className="w-1/5 h-screen"></div>
        </React.Fragment>
    )
}

export default SideBar