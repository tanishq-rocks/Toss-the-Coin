var startImage = document.getElementById("StartImage");
var v1 = document.getElementById("v1");
var v2 = document.getElementById("v2");
var v1Container = document.getElementById("v1Container");
var v2Container = document.getElementById("v2Container");
var toss = document.getElementById("Toss");
var FirstTime = document.getElementById("FirstTime");
var p = document.getElementById("TotalHeads");
var q = document.getElementById("TotalTails");
var r = document.getElementById("TotalFlips");

var x;

function a(){
    p.innerHTML++;
}
function b(){
    q.innerHTML++;
}
function c(){
    r.innerHTML++;
}
function m(){
    v2Container.style.zIndex = 10;
    v1Container.style.zIndex = 20;
}
function n(){
    v2Container.style.zIndex = 20;
    v1Container.style.zIndex = 10;
}
FirstTime.onclick = function(){
    startImage.style.zIndex = 0;
    var x = Math.floor(Math.random() * (2) ) + 0;
   
    if(x==0){
        v1.play();
        setTimeout(m,250);
    }
    if(x==1){
        v2.play();
        setTimeout(n,250);
    }
    
}
v1.onended = function(){
FirstTime.textContent = "TOSS AGAIN";
 a();
 c();
}
v2.onended = function(){
FirstTime.textContent = "TOSS AGAIN";
 b();
 c();
}
   
