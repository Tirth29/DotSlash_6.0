import { useState } from "react";
import FormInput from "./Input";
import './form.css'
const Form = () => {
  const [values, setValues] = useState({
    Subject_Name : "",
    Description: "",
    Total_Marks : "",
  });

  const inputs = [
    {
      className: "subject",
      id: 1,
      name: "subject_name",
      type: "text",
      placeholder: "Subject Name",
      errorMessage:
        "Subject Name should be 2-16 characters",
      label: "Subject Name : ",
      required: true,
    },
    {
      className : "desc",
      id: 2,
      name: "Description",
      type: "text",
      placeholder: "Description",
      label: "Description : ",
    },
    {
      className : "marks",
      id: 3,
      name: "Total_Marks",
      type: "int",
      placeholder: "Total Marks",
      label: "Total Marks : ",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app  bg-[#e0d7d7] ">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-xl">Register</h1>
        {inputs.map((input) => (
          <FormInput 
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button className="bg-black text-white w-32 h-8 flex justify-center mx-auto">Submit</button>
      </form>
    </div>
  );
};

export default Form;

