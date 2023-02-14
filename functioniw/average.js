//Write code to calculate the average of an array
//If there are no items in the array it should return 0
//NOTE: Create a function to find the sum of elements in an array and use that function to find out the average

function str(ar){
  let sum=0;
  if (ar.length==0){
    return sum
  }
  for (let i=0;i<ar.length;i++){
    sum+=ar[i]
  }return (sum)
}

function arrNumber(ar){
  let average=str(ar)/ar.length;
  console.log(average);
}
let sum=[2,2,3,4,4];

arrNumber(sum)
arrNumber(ar=[3,3,4,5,5])