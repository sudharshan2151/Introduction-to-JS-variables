let x=[1,2,3,4,5,6];
let even=0;
let odd=0;

for (let i=0;i<x.length;i++){
  if (x[i]%2==0){
    odd=odd+x[i]
    even=even+1
  }
}console.log(odd/even);
