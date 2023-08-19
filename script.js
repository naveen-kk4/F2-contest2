const students = []; 
let id = 1;
  const form1 = document.getElementsByTagName("form")[0];
  const table = document.querySelector("table > tbody");
  function deletef(){
   console.log("I don't exist")
  } 
 
  
  
  form1.addEventListener("submit",(event)=>{
    event.preventDefault();
     let name = document.getElementById("inp-1").value;
       let email = document.getElementById("inp-2").value;
       let age = document.getElementById("inp-3").value;
       let gpa = document.getElementById("inp-4").value;
       let degree = document.getElementById("inp-5").value;
      
        let tableRow = document.createElement("tr");
       
      
       let cell1 = document.createElement("td");
       cell1.innerText=name;
       let cell2 = document.createElement("td");
       cell2.innerText=email;
       let cell3 = document.createElement("td");
       cell3.innerText=age;
       let cell4 = document.createElement("td");
       cell4.innerText=gpa;
       let cell5 = document.createElement("td");
      
      
       cell5.innerHTML=degree+"       "+ "<img src = './assets/edit1.svg' alt='an image' />"+'<img  onclick="deletef()"  src = "./assets/delete.svg" alt="an image" />';
       
       let cell6 = document.createElement("td");
       cell6.innerText=id ;
       tableRow.append(cell6,cell1,cell2,cell3,cell4,cell5);
       table.appendChild(tableRow);
       id++;
   
       
  })


   