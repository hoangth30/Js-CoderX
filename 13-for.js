// function sum(array) {
//   var total = 0;
//   for (var i = 0; i < array.length; i++){
//     total += array[i];
//   }
//   console.log(total);
//   return total;
// }

// sum([1,2,3,4]);

function sumMultiplyArray(a, b) {
  var total=0;
  for (var i = 0; i < a.length; i++){
    for (var j = 0; j < b.length; j++){
      total += a[i]*b[j];
    }
  }
  console.log(total);
  return total;
}

function calculate(start, end) {
  var product=1;
  for (var i = start; i < end; i++){
    product *= i;
  }
  console.log(product);
  return product;
}

function has(array, value) {
  var count = array.length;
  for (var i = 0; i < count; i++){
    if (array[i] == value){
      console.log('yes');
      return true;
     
    } 
  }
  console.log('no');
  return false;
}

has([5, 1, 8, 2], 899);