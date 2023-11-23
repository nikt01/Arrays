let users = [
    { name: "Andrew", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 65 }
];
let names = users.map(user => user.name);

console.log(names); ["Andrew", "Alice", "Bob"]