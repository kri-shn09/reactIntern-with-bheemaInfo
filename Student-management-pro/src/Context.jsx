import { createContext, useEffect, useState, } from "react";
import axios from "axios";

export  const StudentsContext = createContext()

 export const StudentProvider = ({children})=>{
       const [students, setStudentData] = useState([])

       const URL_API = "https://68a813e7bb882f2aa6dd59e3.mockapi.io/api/students";

       useEffect( ()=>{
           fetchStudents();
       }, [] )

       const fetchStudents = async ()=>{
              const res = await axios.get(URL_API);
              setStudentData(res.data);
       }

              const addStudents =async (student)=>{
                const res = await axios.post(URL_API , student);
                setStudentData([...student , res.data]); 
              }

              const editStudent = async (id,updatedStudent)=>{
                  const res = await axios.put(`${URL_API}/${id}` , updatedStudent)
                  setStudentData(students.map(s=> s.id === id ? res.data : s));
              }

              const deleteStudent = async (id)=>{
                     const res = await axios.delete(`${URL_API}/${id}`);
                     setStudentData(students.filter(s=> s.id !== id))
              }

              return (
                      <StudentsContext.Provider  value={{students,addStudents,editStudent,deleteStudent}}>
                           {children}
                      </StudentsContext.Provider>
              )
       
       }



