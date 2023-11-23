let users1 = [
    { name: "Andrew", surname: "Tate", id: 1 },
    { name: "Alice", surname: "James", id: 2 },
    { name: "Bob", surname: "Top", id: 3 }
];
let users1WithFullName = users1.map(user => ({
    id: user.id,
    fullName: `${user.name} ${user.surname}`
}));
console.log(users1WithFullName);