canvas = document.getElementById("myCanvas");
color = "red";
ctx = canvas.getContext("2d");

ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
ctx.rect(150,143,430, 200);
ctx.stroke();
color="blue";
circle(250, 210);
color="black";
circle(350,210);
color="red";
circle(450,210);
color="yellow";
circle(300,250);
color="green";
circle(400,250);




function circle(mouse_x, mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(mouse_x, mouse_y, 40, 0, 360);
    ctx.stroke();
}

