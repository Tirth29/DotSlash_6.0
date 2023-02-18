import { useContext, useState } from "react";
import FormInput from "./Input";
import './form.css'
import AuthContext from "../context/auth-context";
const Form = ({ closeForm, validateSubject, addSubject }) => {
  const [values, setValues] = useState({
    subjectName: "",
    description: "",
    totalMarks: "",
  });

  const inputs = [
    {
      className: "subject",
      id: 1,
      name: "subjectName",
      type: "text",
      placeholder: "Subject Name",
      // errorMessage:
      //   "Subject Name should be 2-16 characters",
      label: "Subject Name : ",
      required: true,
    },
    {
      className: "desc",
      id: 2,
      name: "description",
      type: "text",
      placeholder: "Description",
      label: "Description : ",
    },
    {
      className: "marks",
      id: 3,
      name: "totalMarks",
      type: "int",
      placeholder: "Total Marks",
      label: "Total Marks : ",
    },
    // {
    //   className: "attendance",
    //   id:4,
    //   name: "Total Attendance",
    //   type: "int",
    //   placeholder: "Total Attendance",

    // }
  ];

  const authContext = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app bg-[#e0d7d7] ">
      <form onSubmit={handleSubmit} >
        <h1 className="font-bold text-xl">Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <div className="mx-auto flex justify-center space-x-3">
          <button className="bg-red-600 text-white w-32 h-8 flex justify-center" onClick={closeForm}>Cancel</button>
          <button className="bg-black text-white w-32 h-8 flex justify-center" onClick={async () => {
            const result = await addSubject(values, authContext.user.uid);
            if(result) closeForm();
          }}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;

