import Form from './Form'
import react, { Component, useState } from 'react'


function Subject() {
    const showFormHandler = () => {
        setShowForm(true);
    }
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            {showForm &&
                <div className="absolute">
                    <Form className="relative" />
                </div>
            }
            <div className="subject w-4/5 ">
                <div className="flex justify-between">
                    <div className="pl-20 p-5 text-xl font-bold">My Subjects</div>
                    <div className="bg-blue-600 text-white mr-10 m-5 p-2 rounded-lg " onClick={showFormHandler} >+ Add subject</div>
                </div>
                <div className="content flex">
                    <div className="p-2 card m-8 bg-[#e1d9d9] w-52">
                        <img href="" className="w-48 h-48" />
                        <p className="text-lg font-semibold">Subject-name</p>
                        <p>Description</p>
                        <p>Total Marks-100</p>
                    </div>
                    <div className="p-2 card m-8 bg-[#e1d9d9] w-52">
                        <img href="" className="w-48 h-48" />
                        <p className="text-lg font-semibold">Subject-name</p>
                        <p>Description</p>
                        <p>Total Marks-100</p>
                    </div>
                    <div className="p-2 card m-8 bg-[#e1d9d9] w-52">
                        <img href="" className="w-48 h-48" />
                        <p className="text-lg font-semibold">Subject-name</p>
                        <p>Description</p>
                        <p>Total Marks-100</p>
                    </div>
                    <div className="p-2 card m-8 bg-[#e1d9d9] w-52">
                        <img href="" className="w-48 h-48" />
                        <p className="text-lg font-semibold">Subject-name</p>
                        <p>Description</p>
                        <p>Total Marks-100</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Subject;
