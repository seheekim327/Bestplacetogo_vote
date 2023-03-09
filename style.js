function addHeart(){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.innerText = '💗';
    
    heart.style.left = Math.random() * 100 + "vw";
    
    heart.style.animationDuration =Math.random()*2+3+"s";
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
       heart.remove();
    },5000);
 }
 
 setInterval(addHeart, 200);
//  page 4

 var numClicks = 0;

if (numClicks==0){
  document.getElementById("clickCount").innerHTML='0';
}
  
function count(){
  numClicks++;          
  document.getElementById("clickCount").innerHTML = numClicks;  
  }

function reset(){
  numClicks=0;
  document.getElementById("clickCount").innerHTML = numClicks; 
}
// Page 4
let data = ["Bora Bara", "Maldives", "Fiji", "Bali" , "Hawii"];
 
let list = document.getElementById("myList");
 
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})

$(document).ready(function() {
   $("#container div a").click(function() {
       $(this).parent().animate({
          width: '+=100px'
       }, 500);

       $(this).prev().html(parseInt($(this).prev().html()) + 1);
       return false;
   });
});