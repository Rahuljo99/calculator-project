function addChar() {
    let Elid = document.getElementById(this.id);
    let inputElement = document.getElementById("di");
    let inputValue = inputElement.value;
    inputElement.value = inputValue+Elid.value;
    console.log("Added value "+ Elid.value+ " To Display");
}
function equate() {
    let inputElement = document.getElementById("di");
    let inputValue = inputElement.value;
    try{
        inputElement.value = eval(inputValue);
    }
    catch(error){
        console.log("Some Error Occured")
        inputElement.value = "Error"
    }
}
function clearall(){
    let inputElement = document.getElementById("di");
    inputElement.value = "";
}
function removeChar() {
    let inputElement = document.getElementById("di");
    let inputValue = inputElement.value;
    if(inputValue === ""){
        return;
    }
    inputElement.value = inputValue.substring(0, inputValue.length-1)
    console.log("Backspace");
}
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener("click", addChar);
});
const bt2 = document.querySelectorAll(".button2");

bt2.forEach(button => {
    button.addEventListener("click",removeChar);
})

const bt3 = document.querySelectorAll(".button3");

bt3.forEach(button => {
    button.addEventListener("click",equate);
})
const bt4 = document.querySelectorAll(".clear");
bt4.forEach(button => {
    button.addEventListener("click",clearall);
})

