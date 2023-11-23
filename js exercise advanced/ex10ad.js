function getAverageAge(users3) {
    if (users3.length === 0) {
      return 0; 
    }
    const sumOfAges = users3.reduce((sum, user) => sum + user.age, 0);

    const averageAge = sumOfAges / users3.length;
  
    return averageAge;
  }
  
  
  const users3 = [
    { name: 'Jonathan James Carlos', age: 7 },
    { name: 'James Bond', age: 48 },
    { name: 'Robin', age: 19 }
  ];
  
  const averageAge = getAverageAge(users3);
  console.log(`Average Age: ${averageAge}`);