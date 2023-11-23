function sumInput() {
    let numbers = [];
    
    while (true) {
    let userInput = prompt("Enter a number:");
    
            
    if (userInput === null || userInput.trim() === "" || !isFinite(userInput)) {
                break;
            }
    
            
    numbers.push(+userInput);
        }
        let sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum;
    }
    let result = sumInput();
    console.log(result);