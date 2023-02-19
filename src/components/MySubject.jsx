import Form from './Form'
import react, { useEffect, useContext, useState } from 'react'
import AuthContext from '../context/auth-context';
import { addDoc, collection, getFirestore, query, where, getDocs } from 'firebase/firestore';
import SubjectsContext from '../context/subjects-context';

const db = getFirestore();

function validateSubject({ subjectName, description, totalMarks }) {
    return subjectName && description && totalMarks;
}

async function fetchSubjects(userid, setSubjects) {
    // console.log(typeof null)
    if ((localStorage.getItem("subjects") === null || localStorage.getItem("subjects") === "undefined")) {
        const q = query(collection(db, "subjects"), where("userid", "==", userid));
        const querySS = await getDocs(q);
        // console.log('hey')
        if (!querySS.empty) {
            let data = querySS.docs.map(data => data.data())
            localStorage.setItem("subjects", JSON.stringify(data))
            setSubjects(data);
        }
    } else {
        console.log(typeof JSON.parse(localStorage.getItem("subjects")).map(d => d));
        setSubjects(JSON.parse(localStorage.getItem("subjects")).map(d => d));
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
    }, []);

    // const addSubject = (subject) => {
    //     let newState = [...subjects, subject];
    //     setSubjects(newState);
    //     // setSubjects((prevState) => [...prevState, subject]);
    // }
    async function addSubject(subject, userid) {
        if (validateSubject) {
            const subjectsRef = collection(db, 'subjects');

            let obj = { ...subject, userid }
            const docRef = await addDoc(subjectsRef, obj);
            console.log('doc added with id: ', docRef.id);
            if (docRef.id) {
                let newState = [...subjects, subject];
                setSubjects(newState);
                localStorage.setItem('subjects', JSON.stringify(newState));
                return docRef;
            }
        }
    }
    // const subjectsContext = useContext(SubjectsContext);
    // const { setSubjects, fetchSubjects } = subjectsContext;
    // console.log(subjects);

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
                    <div className="bg-blue-500 text-white mr-10 m-5 p-2 rounded-lg hover:bg-blue-700 hover: cursor-pointer" onClick={showFormHandler} >+ Add subject</div>
                </div>
                <div className="content flex flex-wrap">
                    {
                        subjects.map(subject => {
                            // console.log(subjects);
                            return <div key={subject.subjectName} className="p-2 card m-8 bg-[#e1d9d9] w-52">
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
