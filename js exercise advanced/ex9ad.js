function shuffle(array1)
{


  array1.sort(() => Math.random() - 1.0);

  
}

let arr1 = [1, 2, 3];

shuffle(arr1);
alert(arr1);