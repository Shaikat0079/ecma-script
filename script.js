// const countryName = "Bangladesh";

console.log(countryName)

let age = 10;

age++;
console.log(age)

const sHero = ['iron-man',"Bat-Man",'spider-man',"He-Man"];
sHero.push("Alpha")
console.log(sHero)

for (let index = 0; index < sHero.length; index++) {
    const element = sHero[index];
    console.log(element);
}

function sum(num1,num2){
    return num1+num2;
}

console.log(sum(10,20))

console.log(sum.length)

function againSum(num1=0,num2=0){
    return num1+num2;
}

console.log(againSum(30,20));

console.log(sum(10));
console.log(againSum(20))