var x=Math.floor(Math.random()*6)+1;
var dice1="dice"+x+".png";
var y=Math.floor(Math.random()*6)+1;
var dice2="dice"+y+".png";
var randomImage1src="images/"+dice1;
var randomImage2src="images/"+dice2;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1src);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2src);
if(x==y){
    var textdisp1=document.querySelector("h1");
    textdisp1.innerHTML="Draw";
}
else if(x>y){
    var textdisp2=document.querySelector("h1");
    textdisp2.innerHTML="Player 1 won";
}
else{
     var textdisp3=document.querySelector("h1");
    textdisp3.innerHTML="Player 2 won";
}