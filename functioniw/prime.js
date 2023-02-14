//Create a function to check if a number is Prime or Not


function prime(a){
  let count=0;
  for (let i=1;i<=a;i++){
    if(a%i==0){
      count++
    }
    }if (count==2){
    return true
    }else{
    return false
    }
  }
let x=prime(6);
  
(x)?console.log("Prime"):console.log("Not Prime")

 //Use the above function to print the Primes from 2 to a given limit
for (let i=2;i<=100;i++){
  if (prime(i)){
    console.log("prime",i)
  }
}



//Use the same function to print Non-Primes from 2 to a given limit
for (let j=2;j<=100;j++){
  if(!prime(j)){
    console.log("Non prime",j)
  }
}
