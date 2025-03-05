const add = (a,b)=>a+b;

console.log(add(10,20))

const sum2 = function(num1,num2){
    return num1 - num2;
}

console.log(sum2(50,60))

const multiply = (a,b)=>a*b;
const square = a=>a*a;
const print = () =>console.log("This is console.log")

console.log(multiply(10,20));
console.log(square(10));
print()
document.getElementById('title').addEventListener("click",()=>console.log(document.getElementById("title").innerText))