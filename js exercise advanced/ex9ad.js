function shuffle(array)
{


  array.sort(() => Math.random() - 1.0);

  
}

let arr = [1, 2, 3];

shuffle(arr);
alert(arr);