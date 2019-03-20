var canvas = document.querySelector("#canvas")
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;
canvas.style.borderStyle = "solid "
canvas.style.borderColor = "black "

var p = canvas.getContext("2d");

var mouse = {
  x:undefined,
  y:undefined
}
var arc_r = 10

window.addEventListener("mousemove",function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  // console.log(mouse)
  Pen(mouse.x,mouse.y);
}
)
var color = {
  y:"Yellow",
  g:"Green",
  b:"Blue",
  r:"Red"
}

var mulcolor = color.r

document.querySelector(".yellow").addEventListener("click",function(){
  mulcolor = color.y;
})
document.querySelector(".blue").addEventListener("click",function(){
  mulcolor = color.b;
})
document.querySelector(".red").addEventListener("click",function(){
  mulcolor = color.r;
})
document.querySelector(".green").addEventListener("click",function(){
  mulcolor = color.g;
})


window.addEventListener("keypress",function(event){
  key = event.key;
  if (key == "y"){ mulcolor = color.y;
  }
  if (key == "g"){ mulcolor = color.g;
  }
  if (key == "b"){ mulcolor = color.b;
  }
  if (key == "r"){ mulcolor = color.r;}
  if(key == " "){
    p.clearRect(0,0,canvas.width,canvas.height)
  }
  })


window.addEventListener("touchmove",function(event){
  mouse.x = event.touches[0].clientX;
  mouse.y = event.touches[0].clientY;
  Pen(mouse.x,mouse.y)
})

window.addEventListener("keydown",function(event){
  arrow_key = event.key;
  if (arrow_key == "ArrowUp"){
    arc_r += 1;
  }
  if (arrow_key == "ArrowDown" && arc_r > 1){
    arc_r -= 1;
  }
})

window.addEventListener("resize",function(event){
  p.clearRect(0,0,canvas.width,canvas.height)
})


function Pen(x,y,arc = arc_r,c = mulcolor){
  p.beginPath();
  p.arc(x,y,arc,0,Math.PI *2);
  p.fillStyle = c;
  p.fill();

}
