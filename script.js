const students = [
  {
    ID: 1,
    name: 'Alice',
    age: 21,
    grade: 'A',
    degree: 'Btech',
    email: 'alice@example.com'
  },
  {
    ID: 2,
    name: 'Bob',
    age: 22,
    grade: 'B',
    degree: 'MBA',
    email: 'bob@example.com'
  },
  {
    ID: 3,
    name: 'Charlie',
    age: 20,
    grade: 'C',
    degree:'Arts',
    email: 'charlie@example.com'
  }
]; 
function renderStudents(studentss=students){
  const tbody = document.getElementById("all-students");
  tbody.innerHTML = "";
  studentss.forEach((student)=>{
    const newRow = document.createElement("tr");
      const attributes=["ID","name","email","age","grade","degree"];
      attributes.forEach((attribute)=>{
        const newCell = document.createElement("td");
        newCell.innerHTML=student[attribute];
       if(attribute=="degree")newCell.className="customClass";
        newRow.appendChild(newCell);
      });
      const lastCell = document.createElement("td");
      const editBtn = document.createElement("button");
      editBtn.className="customButton";
      editBtn.style.backgroundImage = "url('./assets/edit1.svg')";
      editBtn.onclick = () =>editDetails(student.ID);
      const deleteBtn = document.createElement("button");
      deleteBtn.className="customButton";
      deleteBtn.style.backgroundImage = "url('./assets/delete.svg')";
      deleteBtn.onclick = () =>deleteDetails(student.ID);
      lastCell.appendChild(editBtn);
      lastCell.appendChild(deleteBtn);
      newRow.appendChild(lastCell);
      tbody.appendChild(newRow);

  });
 
}
renderStudents();
function searchStudents(){
  
  const searchValue = document.getElementById("search-bar").value.toLowerCase();
  const arr = students.filter((student)=>{
    return (
      student.name.toLowerCase().includes(searchValue) ||
      student.email.toLowerCase().includes(searchValue) ||
      student.degree.toLowerCase().includes(searchValue)
    );
  });
  renderStudents(arr);

}
function deleteDetails(studentId){
  const confirmation = prompt("If you are sure write 'y' or else write 'n'.");
  if(confirmation.toLocaleLowerCase()=="y"){
  let index = students.findIndex((s)=> s.ID == studentId);
  students.splice(index,1);
  renderStudents();
  alert("Deleted Successfully");
  }

}
function editDetails(studentId){
  const student = students.find((s)=> s.ID == studentId);
  document.getElementById("inp-1").value = student.name;
  document.getElementById("inp-4").value = student.age;
  document.getElementById("inp-3").value = student.grade;
  document.getElementById("inp-5").value = student.degree;
  document.getElementById("inp-2").value = student.email;
  document.getElementById("inp-6").value = student.ID;
  document.getElementById("form-submit").textContent = "Edit Student";


}


 function handleStudents(event){
  event.preventDefault();
 const name = document.getElementById("inp-1").value;
 const email = document.getElementById("inp-2").value;
 const age = document.getElementById("inp-4").value;
 const grade = document.getElementById("inp-3").value;
 const degree = document.getElementById("inp-5").value;
const ID = document.getElementById("inp-6").value;

 if(document.getElementById("form-submit").innerText=="Edit Student"){
  
    const student = students.find((s)=>s.ID == ID);
    student.name = name;
    student.age = age;
    student.grade = grade ;
    student.degree=degree;
    student.email = email;
    

 }
 else{
  
    const newStudent={
      ID:students[students.length-1].ID + 1,
      name,
      age,
      grade,
      degree,
      email
    };
   
    students.push(newStudent);
    
 }
 document.getElementById("student-form").reset();
 document.getElementById("form-submit").innerText="Add Student";

 renderStudents();

 



}
 
  
  
 


   