const countryName = "Bangladesh";

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