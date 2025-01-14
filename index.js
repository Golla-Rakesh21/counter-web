const decreasebtn=document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const increaseBtn=document.getElementById("increaseBtn");
const countlabel=document.getElementById("countlabel");

let count=0;

increaseBtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    countlabel.textContent=count;
}