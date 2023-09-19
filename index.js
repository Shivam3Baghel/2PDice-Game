var r=Math.floor(1+6*Math.random());
document.querySelector(".img1").setAttribute("src","./images/dice"+r+".png");
var r2=Math.floor(1+6*Math.random());
document.querySelector(".img2").setAttribute("src","./images/dice"+r2+".png");
if(r>r2){
document.querySelector("h1").innerHTML="Player 1 wins";
}else if(r<r2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}else{
    document.querySelector("h1").innerHTML="Draw"; 
}