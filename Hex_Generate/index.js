var change_btn = document.getElementById('change_color');
var body = document.getElementById('my_body');


change_btn.onclick = function() {
    
    change_background_color();
};

function change_background_color()
{
    let letters = "0123456789ABCDEF";
    let color = '#';
 

    for (let i = 0; i < 6; i++)
        color += letters[(Math.floor(Math.random() * 16))];
    body.style.backgroundColor = color;

    document.getElementById('current_color').innerHTML = (color);
}

 
