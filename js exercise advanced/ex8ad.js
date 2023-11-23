function sortByAge(users2) {
    users2.sort((a, b) => a.age - b.age);
}
let users2 = [
{ name: "Daniel", age: 90 },
{ name: "Damian", age: 45 },
{ name: "Domin", age: 65 }
];
sortByAge(users2);
console.log(users2);