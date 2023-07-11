let count = 0;

document.getElementById("Decrementbtn").onclick = function(){
    count=count-1;
    document.getElementById("countlabel").innerHTML=count;

}
document.getElementById("resetbtn").onclick = function(){
    count=0;
    document.getElementById("countlabel").innerHTML=count;

}
document.getElementById("Incrementbtn").onclick = function(){
    count=count+1;
    document.getElementById("countlabel").innerHTML=count;

}