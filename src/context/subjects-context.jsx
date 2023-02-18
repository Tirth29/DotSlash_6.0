import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./auth-context";

const SubjectsContext = React.createContext([
    {
        subjectName: "",
        description: "",
        totalMarks: "",
    },
]);


export const SubjectsContextProvider = (props) => {
    const [subjects, setSubjects] = useState([]);
    const authContext = useContext(AuthContext);

    // if (subjects === [])
    //     fetchSubjects(authContext.user.uid, setSubjects);


    const addSubject = (subject) => {
        setSubjects((prevState) => [...prevState, subject]);
        localStorage.setItem('subjects', [...subjects, subject]);
    };

    return <SubjectsContext.Provider value={{ subjects, addSubject, setSubjects }}>{props.children}</SubjectsContext.Provider>;
};

export default SubjectsContext;
