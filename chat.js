function addStd(){
  student_name= document.getElementById("student_name").value;
  localStorage.setItem("student_name",student_name);
  window.location="chat_room.html";
  

}