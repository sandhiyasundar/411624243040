console.log("print statement")

const a=20;
const b=30;
console.log(a+b);
const str = "Sandhiya"
console.log(str);
const arr = [1, 2.4, "String", false];
console.log(arr);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
arr[1]=3.1;
console.log(arr)
arr.pop()
console.log(arr)
arr.push("Sandhiya")
console.log(arr)

function example(){
    console.log("i am writting something");
}
example()
const Sandhiya = document.getElementById("Sandhiya")
Sandhiya.innerHTML = "print statement"

const input = document.getElementById("input")
const output = document.getElementById("inputField")

input.addEventListener("input", ()=>{
    output.textContent = input.value
})

const first = document.createElement("hi")
first.textContent = "Some text"
document.body.appendChild(first)

first.remove()