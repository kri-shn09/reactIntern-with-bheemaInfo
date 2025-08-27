import { useContext } from "react";
import { StudentsContext } from "../Context";
import { NavLink } from "react-router-dom";

export default function StudentList() {
  const { students, deleteStudent } = useContext(StudentsContext);

  return (
    <div>
      <h2 className="text-center text-2xl mb-10">Student List</h2>

       <ul >
        {students.map(s => (
          
          <li key={s.id} className="w-full flex justify-evenly items-center">
            
            <div>   
          {s.id}  
          </div>

          <div>
          {s.name}
          </div>
          
          <div>
         ({s.course})  </div> - <div>
          {s.email} </div>
         
            <NavLink to={`/EditStudent/${s.id}`} style={{ margin: "0 10px" }}>EditStudent</NavLink>
            <button onClick={() => deleteStudent(s.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}