function nextYearPre(){

const currentYear=document.getElementById("year").value;
const nextYear= parseInt(currentYear)+1;

const output= document.getElementById("outputDiv");
const loader=document.getElementById("loader");

const messages=[
    "Connecting to satellite...",
    "Processing cosmic Data",
    "Borrowing WiFi from NASA…",
]
output.innerText=messages[0];
loader.style.display="flex";
let i=1;



const interval=setInterval(()=>{
    if(i<messages.length){
    output.innerText= messages[i];
    i++;
    }else
        clearInterval(interval)
    
},1000);

setTimeout(() =>{
    loader.style.display= "none";
    output.innerText="Next Year will be:" +nextYear;

},4000)};