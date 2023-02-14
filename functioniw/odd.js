//Write a function isOdd which returns a boolean value based on the number is odd or not
//Use this function to print the odd numbers from 0 to a given limit(included)

function odd(n){
  if (n%2!=0){
    return true
  }else{
    return false
  }
}

function oddNumber(n){
  for (let i=0;i<=n;i++){
  let x=odd(i);
  (x)?console.log("Odd",i):console.log("Not odd")
}}
  oddNumber(5)
oddNumber(15)