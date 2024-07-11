const endDate="10 Augest 2024 00:00 AM"
document.getElementById("endDate").innerText=endDate;
const inputs=document.querySelectorAll("input")

function clock(){
    const end= new Date(endDate);//jo bhee enddate hai usko mili seconds me convert kar diya
    const now =new Date()// abhi kya timeho raha hai
    const diff=(end-now)/1000;
    if(diff<0)return;
    // convert into days
    inputs[0].value=Math.floor(diff/3600/24)
    // converted into hours
    inputs[1].value=Math.floor(diff/3600)%24
    // convert into min
    inputs[2].value=Math.floor(diff/60)%60
    // convert into seconds
    inputs[3].value=Math.floor(diff%60)

}
clock()
setInterval(()=>{
    clock()},1000)