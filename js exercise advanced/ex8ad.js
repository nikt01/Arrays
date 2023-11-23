function sortByAge(users2) {
    users2.sort((a, b) => a.age - b.age);
}
let users2 = [
{ name: "Gragas", age: 90 },
{ name: "Garen", age: 45 },
{ name: "Yuumi", age: 65 }
];
sortByAge(users2);
console.log(users2);