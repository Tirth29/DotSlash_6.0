import Form from './Form'
import react, { useEffect, useContext, useState } from 'react'
import AuthContext from '../context/auth-context';
import { addDoc, collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import SubjectsContext from '../context/subjects-context';

const db = getFirestore();

function validateSubject({ subjectName, description, totalMarks }) {
    return subjectName && description && totalMarks;
}

async function addSubject(subject, userid) {
    if (validateSubject) {
        const subjectsRef = collection(db, 'subjects');

        let obj = { ...subject, userid }
        const docRef = await addDoc(subjectsRef, obj);
        console.log('doc added with id: ', docRef);

        return docRef;
    }
}
async function fetchSubjects(userid, setSubjects) {
    // console.log(localStorage.getItem('subjects'))
    if (!(localStorage.getItem("subjects") === "undefined" || localStorage.getItem("subjects") === "null")) {
        const q = query(collection(db, "subjects"), where("userid", "==", userid));
        const querySS = await getDocs(q);
        // console.log('hey')
        if (!querySS.empty) {
            let data = querySS.docs.map(data => data.data())
            localStorage.setItem("subjects", JSON.stringify())
            setSubjects(data);
        }
    } else {
        setSubjects(...JSON.parse(localStorage.getItem("subjects")));
    }
}



function Subject() {
    const showFormHandler = () => {
        setShowForm(true);
    }

    const authContext = useContext(AuthContext);
    const [showForm, setShowForm] = useState(false);
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetchSubjects(authContext.user.uid, setSubjects);
    }, [subjects]);

    const addSubject = (subject) => {
        let newState = [...subjects, subject];
        setSubjects(newState);
        // setSubjects((prevState) => [...prevState, subject]);
        localStorage.setItem('subjects', newState);
    }
    // const subjectsContext = useContext(SubjectsContext);
    // const { setSubjects, fetchSubjects } = subjectsContext;
    console.log(subjects);

    return (
        <div className='w-4/5'>
            {
                showForm &&
                <div className="absolute h-full w-full ">
                    <Form className="relative" closeForm={() => { setShowForm(false) }} addSubject={addSubject} validateSubject={validateSubject} />
                </div>
            }
            <div className="subject">
                <div className="flex justify-between">
                    <div className="pl-20 p-5 text-xl font-bold">My Subjects</div>
                    <div className="bg-blue-600 text-white mr-10 m-5 p-2 rounded-lg " onClick={showFormHandler} >+ Add subject</div>
                </div>
                <div className="content flex">
                    {
                        subjects.map(subject => {
                            // console.log(subjects);
                            return <div className="p-2 card m-8 bg-[#e1d9d9] w-52">
                                <img href="" className="w-48 h-48" />
                                <p className="text-lg font-semibold">{subject.subjectName}</p>
                                <p>{subject.description}</p>
                                <p>Total Marks-{subject.totalMarks}</p>
                            </div>
                        })
                    }

                    {/* <div className="p-2 card m-8 bg-[#e1d9d9] w-52">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default Subject;
