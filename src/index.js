window.addEventListener('mousemove',(e)=>{
   let draw = document.createElement('div');
   draw.style.position="absolute";
   draw.style.width="30px";
   draw.style.height="30px";
   draw.style.borderRadius="100%";
   draw.style.left=e.clientX+"px";
   draw.style.top=e.clientY+"px";
   draw.style.background=randomColors();
   document.body.appendChild(draw);

});

const randomColors= ()=>{
let colors="abcdef0123456789";
let colorPrefix="#";
for(let j=0;j<6;j++){
colorPrefix+=colors[Math.floor(Math.random()*14)];

}
return colorPrefix;
}



