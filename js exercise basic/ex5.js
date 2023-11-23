function getMaxSubSum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
            
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    
            
    maxSum = Math.max(maxSum, currentSum);
        }
    
    return maxSum;
    }
    
    
    console.log(getMaxSubSum([-1, 2, 3, -9]));      
    console.log(getMaxSubSum([2, -1, 2, 3, -9]));    
    console.log(getMaxSubSum([-1, 2, 3, -9, 11]));   
    console.log(getMaxSubSum([-2, -1, 1, 2]));        
    console.log(getMaxSubSum([100, -9, 2, -3, 5]));  
    console.log(getMaxSubSum([1, 2, 3]));      