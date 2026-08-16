import StudentCard from "../components/StudentCard";

function AllStudents(){
 const students = [
  {
    id: 1,
    place: "Kochi",
    name: "Ebin",
    course: "React"
  },
  {
    id: 2,
    place: "Kochi",
    name: "Adwin",
    course: "JavaScript"
  },
  {
    id: 3,
    place: "Thrissur",
    name: "Ardra",
    course: "React"
  },
  {
    id: 4,
    place: "Kozhikode",
    name: "Apsa",
    course: "Node.js"
  },
  {
    id: 5,
    place: "Kollam",
    name: "Biona",
    course: "React"
  }
];
    return(
        <>
            <h1>All Students</h1>
            {
                students.map((std)=>(
                  <StudentCard key={std.id} name={std.name} place={std.place} course={std.course}/>
                ))
            }
        </>
    )
}

export default AllStudents