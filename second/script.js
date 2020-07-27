var bgColor = document.getElementById('change-bg')
var colorArray = ["#5A9C6E", "#A8BF5A", "#FAC46E", "#FAD5BB", "#F2FEFF"]
function changeColor(){
    document.body.style.graybg = colorArray[i]; 
    i++;
    if( i > colorArray.length - 1){
        i = 0;
    }
}
var i = 0
