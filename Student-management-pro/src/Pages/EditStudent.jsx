import { useContext, useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StudentsContext } from "../Context";

export default function EditStudent() {
  const { id } = useParams();
  const { students, editStudent } = useContext(StudentsContext);
  const navigate = useNavigate();

  const student = students.find(s => s.id === id);

  const nameRef = useRef();
  const emailRef = useRef();
  const courseRef = useRef();
  const ageRef = useRef();
  const joinedRef = useRef();

  useEffect(() => {
    if (student) {
      nameRef.current.value = student.name;
      emailRef.current.value = student.email;
      courseRef.current.value = student.course;
      ageRef.current.value = student.age;
      joinedRef.current.value = student.joinedDate;
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const editStudent = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      course: courseRef.current.value,
      age: Number(ageRef.current.value),
      joinedDate: joinedRef.current.value,
    };
    editStudent(id, editStudent);
    navigate("/");
  };

  return (
    <div>
      <h2 className="text-center text-2xl mb-10">Edit Student</h2>
      <form className="w-full flex justify-evenly items-center"
       onSubmit={handleSubmit}>
        <input ref={nameRef} placeholder="Name" required />
        <input ref={emailRef} placeholder="Email" required />
        <input ref={courseRef} placeholder="Course" required />
        <input ref={ageRef} type="number" placeholder="Age" required />
        <input ref={joinedRef} type="date" required />
        <button className="bg-blue-400 text-white px-4 py-1  rounded cursor-pointer"
        type="submit">Update</button>
      </form>
    </div>
  );
}