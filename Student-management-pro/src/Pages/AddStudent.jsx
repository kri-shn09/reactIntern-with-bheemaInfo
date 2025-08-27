import { useContext, useRef } from "react";
import { StudentsContext } from "../Context";
import { useNavigate } from "react-router-dom";

export default function AddStudent() {
  const { addStudents } = useContext(StudentsContext);
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const courseRef = useRef();
  const ageRef = useRef();
  const joinedRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      course: courseRef.current.value,
      age: Number(ageRef.current.value),
      joinedDate: joinedRef.current.value,
    };
    addStudents(newStudent);
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-2xl text-center mb-10"
      >Add Student</h2>
      <form className="w-full flex justify-evenly items-center "
       onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Name" required />
        <input ref={emailRef} placeholder="Email" required />
        <input ref={courseRef} placeholder="Course" required />
        <input ref={ageRef} type="number" placeholder="Age" required />
        <input ref={joinedRef} type="date" required />
        <button className="bg-blue-400 text-white px-4 py-1  rounded cursor-pointer"
         type="submit">Add</button>
      </form>
    </div>
  );
}