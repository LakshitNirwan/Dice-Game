let randNo1=Math.floor(Math.random()*6)+1;
let img1Src="images/dice"+randNo1+".png";

let img1=document.querySelectorAll("img")[0].setAttribute("src",img1Src);

let randNo2=Math.floor(Math.random()*6)+1;
let img2Src="images/dice"+randNo2+".png";

let img2=document.querySelectorAll("img")[1].setAttribute("src",img2Src);

if(randNo1>randNo2) document.querySelector("h1").innerHTML= "Player 1 wins";
else if(randNo1<randNo2) document.querySelector("h1").innerHTML= "Player 2 wins";
else document.querySelector("h1").innerHTML= "Tie";