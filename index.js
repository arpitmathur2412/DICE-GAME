var rand1=Math.floor(Math.random()*6)+1;
var rand2=Math.floor(Math.random()*6)+1;

var image1="images/dice"+rand1+".png";
var image2="images/dice"+rand2+".png";

document.querySelector(".img1").setAttribute("src",image1);
document.querySelector(".img2").setAttribute("src",image2);

if(rand1>rand2){
    document.querySelector("h1").innerHTML="player 1 Wins";
}
else if(rand1<rand2){
    document.querySelector("h1").innerHTML="player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML="It's a Tie";
}