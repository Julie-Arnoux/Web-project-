var slide = new Array("Images/house1.png", "Images/livingroom.png", "Images/bathroom.png");
var number = 0;

function ChangeSlide(sens) {
    number = number + sens;
    if (number < 0)
        number = slide.length - 1;
    if (number > slide.length - 1)
        number = 0;
    document.getElementById("slide").src = slide[number];
}
setInterval("ChangeSlide(1)", 6000); //change slide automatically every 6 seconds