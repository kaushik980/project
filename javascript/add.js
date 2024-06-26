const x = document.querySelector("#firstnumber")
const y = document.querySelector("#secondnumber")
const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
function sum (){
    sum = parseInt( x.value) + parseInt( y.value)
    result.innerHTML = "Sum of these number is :" +sum;
}