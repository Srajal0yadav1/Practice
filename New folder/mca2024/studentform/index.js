let Sname=document.getElementById('name');  
let Sage=document.getElementById('age');
let Ssection=document.getElementById('section');
let Sroll=document.getElementById('rollno');
let Scontact=document.getElementById('contact');
let Bgenrate=document.getElementById('generate');

Bgenrate.addEventListener('click',form);
function form()
{
    let Dout= document.getElementById('output');
    let Tname="<p>"+"Name: "+Sname.value +"</p>";
    let Tage="<p>"+"Age: "+Sage.value +"</p>";
    let Tsection="<p>"+"Section: "+Ssection.value +"</p>";
    let Troll="<p>"+"Roll No.: "+Sroll.value +"</p>";
    let Tcontact="<p>"+"Contact no.: "+Scontact.value +"</p>";
    let Tout=Tname+Tage+Tsection+Troll+Tcontact;
    Dout.innerHTML=Tout;
}
