import StudentCard from "../components/StudentCard"
import { useEffect, useState } from 'react';
import axios from 'axios';
function Allstudent(){
	const students = [
	{
		id : 1,
		name : "Apsa",
		place : "Alappuzha",
		course : "Python"
	},
	{
		id : 2,
		name : "Biona",
		place : "Kottayam",
		course : "Python"
	},
	{
		id : 3,
		name : "Ardra",
		place : "Kollam",
		course : "Python"
	}
]

const [student,setStudent] = useState([])
  useEffect(()=>{fetchStudent()},[])
    const fetchStudent = async()=>{
        try{
            const response = await axios.get("http://127.0.0.1:8000/api/students/");
            setStudent(response.data)

        }catch{
            alert("Failed to fetch the Student details")
        }
    }

	return(
		<>
		<h1>All Students</h1>
    <input type="text" placeholder="Search by name" onChange={(e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredStudents = student.filter((std) =>
        std.std_name.toLowerCase().includes(searchTerm)
      );
      if (searchTerm === "") {
        fetchStudent(); // Fetch all students if search term is empty
      }
      setStudent(filteredStudents);
    }} />
		{
			student.map((std)=>(
				<StudentCard key = {std.id} name = {std.std_name}  phone ={std.phone} dob = {std.dob} address = {std.address}   course = {std.course} profile={std.profile_pic}/>

			))
		}
		
		</>
	)
}
export default Allstudent