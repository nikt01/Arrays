function groupById(arr) {
    return arr.reduce((acc, user) => {
      acc[user.id] = user;
      return acc;
    }, {});
  }
  
  
  let users4 = [
    { id: 'Andrew', name: "Andrew Tate", age: 27 },
    { id: 'Annie', name: "Annie afladro", age: 24 },
    { id: 'Peter', name: "Peter Parker", age: 31 },
  ];
  
  let users4ById = groupById(users4);
  
  console.log(users4ById);