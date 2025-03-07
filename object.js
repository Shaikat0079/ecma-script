const person = {
    pName : "Hena",
    age : 10,
    country: "BD",
}
// delete person.pName;
Object.freeze(person)
// Object.seal(person)
person.age+=10;
person.status="not found"
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

for (const key in person) {
    if (Object.prototype.hasOwnProperty.call(person, key)) {
        const element = person[key];
        console.log(element)
        
    }
}

for (let key in person)
{
    console.log(key)
}

for (let key in person){
    console.log(`key : ${key} value : ${person[key]}`)
}

console.log(Object.entries(person))

for (let [key,value]of Object.entries(person)){
    console.log(`key : ${key} value :  ${value}`)
}