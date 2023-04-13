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


/*************************************** */

function showstud(){
    document.getElementById('st').style.display="flex";
    document.getElementById('so').style.display="none";
    document.getElementById('stud-head').style.color='white';
    document.getElementById('staff-head').style.color='rgb(127, 125, 125)';
}
function showstaff(){
    document.getElementById('st').style.display="none";
    document.getElementById('so').style.display="flex";
    document.getElementById('staff-head').style.color='white';
    document.getElementById('stud-head').style.color='rgb(127, 125, 125)';

}

/************************************student*********** */

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
            var i=11;
            const x=jsondata[i].image;
            console.log(x);

            const stdata = jsondata.find(stdata => stdata.name == mainname);
            console.log(stdata);

            const stspecies = stdata.species;
            const stgender = stdata.gender;
            const sthouse = stdata.house;
            const stdob = stdata.dateOfBirth;
            const stancestry = stdata.ancestry;
            const steyecolor = stdata.eyeColour;            
            const sthaircolor = stdata.hairColour;
            const stwand = stdata.wand.wood;
            const stswan = stdata.patronus;


            const speciestag = document.getElementById("Species");
            const gendertag = document.getElementById("Gender");
            const housetag=document.getElementById('house');
            const dobtag = document.getElementById("dob");
            const ancestrytag=document.getElementById('ancestry');
            const eyecolortag=document.getElementById('eyecolor');
            const haircolortag=document.getElementById('haircolor');
            const wandtag=document.getElementById('wand');
            const swantag=document.getElementById('palronus');

            speciestag.innerHTML = stspecies;
            gendertag.innerHTML= stgender;
            housetag.innerHTML=sthouse;
            dobtag.innerHTML = stdob;
            ancestrytag.innerHTML=stancestry;
            eyecolortag.innerHTML=steyecolor;
            haircolortag.innerHTML=sthaircolor;
            wandtag.innerHTML=stwand;
            swantag.innerHTML=stswan;

        
      }


function displayitems(jsondata){

    

            var mainname=document.getElementById('mainname');
            var mainname=mainname.innerHTML;

            console.log(mainname);
            var i=11;
            const x=jsondata[i].image;
            console.log(x);

            const stdata = jsondata.find(stdata => stdata.name == mainname);
            console.log(stdata);

            for(let i=0; i<stdata.length; i++){     //to fill null value ---- not working
                if(stdata[i]==""){
                    stdata[i]='null';


                }
            }

            const stspecies = stdata.species;
            const stgender = stdata.gender;
            const sthouse = stdata.house;
            const stdob = stdata.dateOfBirth;
            const stancestry = stdata.ancestry;
            const steyecolor = stdata.eyeColour;            
            const sthaircolor = stdata.hairColour;
            const stwand = stdata.wand.wood;
            const stswan = stdata.patronus;


            const speciestag = document.getElementById("Species");
            const gendertag = document.getElementById("Gender");
            const housetag=document.getElementById('house');
            const dobtag = document.getElementById("dob");
            const ancestrytag=document.getElementById('ancestry');
            const eyecolortag=document.getElementById('eyecolor');
            const haircolortag=document.getElementById('haircolor');
            const wandtag=document.getElementById('wand');
            const swantag=document.getElementById('palronus');

            speciestag.innerHTML = stspecies;
            gendertag.innerHTML= stgender;
            housetag.innerHTML=sthouse;
            dobtag.innerHTML = stdob;
            ancestrytag.innerHTML=stancestry;
            eyecolortag.innerHTML=steyecolor;
            haircolortag.innerHTML=sthaircolor;
            wandtag.innerHTML=stwand;
            swantag.innerHTML=stswan;

        
      }

      /*******************************staff*********** */

      let jsondata2;    
    fetch('https://hp-api.onrender.com/api/characters/staff')
    .then(
        function(u){ 
            return u.json();
        }
      )
    .then(
        function(json){
          jsondata2 = json;
          console.log(jsondata2); 
          displayitems2(jsondata2);
        }
      )

      function displayitems2(jsondata2){
            var mainname=document.getElementById('mainname');
            var mainname=mainname.innerHTML;

            console.log(mainname);
            

            const stdata = jsondata2.find(stdata => stdata.name == mainname);
            console.log(stdata);

            const stspecies = stdata.species;
            const stgender = stdata.gender;
            const sthouse = stdata.house;
            const stdob = stdata.dateOfBirth;
            const stancestry = stdata.ancestry;
            const steyecolor = stdata.eyeColour;            
            const sthaircolor = stdata.hairColour;
            const stwand = stdata.wand.wood;
            const stswan = stdata.patronus;


            const speciestag = document.getElementById("Species");
            const gendertag = document.getElementById("Gender");
            const housetag=document.getElementById('house');
            const dobtag = document.getElementById("dob");
            const ancestrytag=document.getElementById('ancestry');
            const eyecolortag=document.getElementById('eyecolor');
            const haircolortag=document.getElementById('haircolor');
            const wandtag=document.getElementById('wand');
            const swantag=document.getElementById('palronus');

            speciestag.innerHTML = stspecies;
            gendertag.innerHTML= stgender;
            housetag.innerHTML=sthouse;
            dobtag.innerHTML = stdob;
            ancestrytag.innerHTML=stancestry;
            eyecolortag.innerHTML=steyecolor;
            haircolortag.innerHTML=sthaircolor;
            wandtag.innerHTML=stwand;
            swantag.innerHTML=stswan;

        
      }



            

      /*

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

    
  }   */

      