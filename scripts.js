let outputrScreen = document.getElementById("outputScreen");

function display(num) {
    outputrScreen.value += num;
}
function Calculate() {
    try{
        outputrScreen.value = eval(outputrScreen.value);
    }
    catch(err){
        alert("Invalid");
    }
}
function Clear(){
    outputrScreen.value = "";
}
function Del(){
    outputrScreen.value = outputrScreen.value.slice(0, -1);
}