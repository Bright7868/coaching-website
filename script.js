document.getElementById("myBtn").addEventListener
("click",function(){
        alert ("Join Me");
    });
 document.getElementById("submit").addEventListener
("click",function(){
        alert ("Apply Now");
    });  
  function loginUser() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Demo ID Password
    if(username === "student" && password === "1234") {
        window.location.href = "dashboard.html";
        return false;
    } else {
        document.getElementById("error-msg").innerText = "Invalid Username or Password!";
        return false;
    }
}
    