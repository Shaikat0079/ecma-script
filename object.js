const person = {
    pName : "Hena",
    age : 10,
    country: "BD",
}
Object.freeze(person)
// Object.seal(person)
person.age+=10;
person.status="not found"
console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))