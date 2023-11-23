function filterRangeInPlace(arr, a, b) {
    let index = 0;
    
    while (index < arr.length) {
    if (arr[index] < a || arr[index] > b) {
    arr.splice(index, 1);
    } else {
    index++;
    }
    }
    }
    let arrayToModify = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    filterRangeInPlace(arrayToModify, 3, 7);
    console.log(arrayToModify);