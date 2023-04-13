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
    document.getElementById('stud-head').style.color='white'
    document.getElementById('staff-head').style.color='rgb(127, 125, 125)'
}
function showstaff(){
    document.getElementById('st').style.display="none"
    document.getElementById('so').style.display="flex"
    document.getElementById('staff-head').style.color='white'
    document.getElementById('stud-head').style.color='rgb(127, 125, 125)'

}



let jsondata;    
    fetch('https://hp-api.onrender.com/api/characters/students')
    .then(
        function(u){ 
            return u.json();
        }
      )
    .then(
        function(json){
          jsondata = json;
          console.log(jsondata); 
          displayitems(jsondata);
        }
      )

      function displayitems(jsondata){
            var mainname=document.getElementById('mainname');
            var mainname=mainname.innerHTML;

            console.log(mainname);

            const stdata = jsondata.find(stdata => stdata.name == mainname);
            console.log(stdata);

            const stspecies = stdata.species;
            const stgender = stdata.gender;
            const stdob = stdata.dateOfBirth;


            const speciestag = document.getElementById("Species");
            const gendertag = document.getElementById("Gender");
            const dobtag = document.getElementById("dob");

            speciestag.innerHTML = stspecies;
            gendertag.innerHTML= stgender;
            dobtag.innerHTML = stdob;

        
      }

      