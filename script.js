function validate(){

    var eid = document.getElementById("eid").value;
    var pass = document.getElementById("pass").value;
    var alert = document.getElementById("label")

    if(eid == "ilakya@gmail.com" && pass=="111"){

        document.getElementById('label').innerHTML="Login Success";
        alert.style.color="green";
        window.setTimeout(function(){
            window.location="main.html";
        }, 1000);
    }
    
    else{
        document.getElementById('label').innerHTML="Invalid Credentials";
        alert.style.color="red";
    }
}


function showstud(){
    document.getElementById('st').style.display="flex"
    document.getElementById('so').style.display="none"
}
function showstaff(){
    document.getElementById('st').style.display="none"
    document.getElementById('so').style.display="flex"
}
