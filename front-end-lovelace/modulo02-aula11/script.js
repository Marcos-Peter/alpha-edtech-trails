const canvas=document.getElementById('stage');
const ctx=canvas.getContext('2d');
x=y=120, vx=6, vy=9, r=70;
var colors = ["#FF6138", "#FFBE53", "#2980B9", "#282741", "#18D88C", "#5F619E", "#FF0046", "#DB06F9", "#A48985", "#B62C18", "#51B618", "#20460A", "#12956D", "#9CAFDB"];
function createCircle()
{ 
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if(x > canvas.width- r || x<r)
    { 
        vx=-vx;
        ctx.fillStyle=colors[Math.floor(Math.random() * 15)];
        ctx.fill();
    }
    if(y > canvas.height -r || y<r)
    { 
        vy=-vy;
        ctx.fillStyle=colors[Math.floor(Math.random() * 15)];
        ctx.fill();
    }
    x+=vx;
    y+=vy;
    
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
    window.requestAnimationFrame(createCircle);
}
createCircle();