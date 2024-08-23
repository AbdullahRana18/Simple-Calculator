function input(value) {
    var display = document.getElementById("cal");
    display.value += value;
}
function calculate(){
    var display = document.getElementById("cal");
    try{
        display.value = eval(display.value);
    } catch(e){
       display.value = 'error' ;
    }
    
     
}
function del() {
var display = document.getElementById("cal");
display.value = "";
}