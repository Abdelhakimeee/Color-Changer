function getRandomColor(){
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i=0 ; i<6 ; i++) {
        color += letters[Math.floor(Math.random()* 16)];
    }
    return color;
}
function changeC(){
    var back_color = document.getElementById('color-box');
    back_color.style.backgroundColor = getRandomColor();
}
    