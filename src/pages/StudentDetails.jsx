import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
function StudentDetails(){
    const {id} = useParams();
    const [student,setStudent] = useState([])
    useEffect(()=>{fetchStudent()},[])
    const fetchStudent = async()=>{
        try{
            const response = await axios.get("http://127.0.0.1:8000/api/students/${id}/");
            setStudent(response.data)
        }catch{
            alert("Failed to fetch the Student details")
        }
    }
    return(
        <div>
        <img src={student.profile_pic} alt="Profile" style={{width:"200px",height:"auto"}} />
        <h4> {student.name}</h4>
        <p>Phone: {student.phone}</p>
        <p>Address: {student.address}</p>
        <p>DOB: {student.dob}</p>
        <p>Course: {student.course}</p>
        </div>
    )}