



    function validateCredentials() {
        var uname = document.getElementById('username').value;
        var psd = document.getElementById('pswd').value;
    
        if (uname == "admin" && psd == 12345) {
            alert("Login Successfull");
            window.location.assign("../Todo-App/mainpage.html");
            return false;
        }
        else if (uname != "admin") {
            document.getElementById("err1").innerHTML = "Invalid Username";
            return false;
        }
        else if (psd != 12345) {
            document.getElementById("err2").innerHTML = "Invalid Password";
            return false;
        }
        else {
            alert("Invalid Credentials");
            return false;
        }
    }
    
    



