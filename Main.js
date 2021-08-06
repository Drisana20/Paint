

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");

    
function my_mousemove(e)
{
    current_position_of_touch_x = e.clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.clientY - canvas.offsetTop;
    
    if(MouseEvent == "mouseDown"){
    console.log("Current position of x and y coordinates = ");
    console.log("x =" + current_position_of_mouse_x + "y =" + 
    current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, raidus ,0 ,
     2 * Math.P1);
     ctx.stroke();
    }
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radidus -document.getElementById("radidus").value;
    mouseEvent = "mouseDown";
}