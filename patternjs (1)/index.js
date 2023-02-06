let x=[-1,-3,0,2,1];
let c=0;
let f=[];
let min=+Infinity
for (let i=0;i<x.length;i++){
  c=c+x[i];
  f.push(c)
  }
console.log(f)
console.log(f.length)
for (let j=0;j<f.length;j++){
  if (f[j]<min){
    min=f[j]
    console.log(min)
  }
}
