
function clearFormData(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("website").value = "";
    document.getElementById("image-link").value = "";
    var checkboxes = document.getElementsByName('skills');
    for (var checkbox of checkboxes) {
      if (checkbox.checked){
        checkbox.checked = false;
      }
    }
    var radios = document.getElementsByName('gender');
    for (var radio of radios) {
      if (radio.checked){
        radio.checked = false;
      }
    }
}


function handleSubmit(){
    event.preventDefault();
    let studentData = {
        name : document.getElementById("name").value,
        email :  document.getElementById("email").value,
        website : document.getElementById("website").value,
        image_link : document.getElementById("image-link").value,
        skills : "",
        gender : ""
    }        
        
    var checkboxes = document.getElementsByName('skills');
    for (var checkbox of checkboxes) {
      if (checkbox.checked){
          if(studentData.skills === ""){
              studentData.skills += checkbox.value
          }
          else{
            studentData.skills = studentData.skills + ", " + checkbox.value;
          }        
      }
    }

    var radios = document.getElementsByName('gender');
    for (var radio of radios) {
      if (radio.checked){
        studentData.gender = radio.value
      }
    }
    console.log(studentData); 

    var row = document.createElement("tr");    
    row.innerHTML = 
    `<td>
        <div><strong>${studentData.name}</strong></div>
        <div>${studentData.gender}</div>
        <div>${studentData.email}</div>
        <div><a href="${studentData.website}" target="_blank">${studentData.website}</a></div>
        <div>${studentData.skills}</div>
    </td>
    <td style="text-align:center">
        <img src="${studentData.image_link}" alt="Student Photo">
    </td>`
    var table = document.getElementById("student-table");
    console.log(table);
    table.appendChild(row)
    clearFormData();
}