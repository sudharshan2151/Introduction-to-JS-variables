let x="aabbcc";
let y=[]

for(let i=(x.length-1);i>-1;i--){
  y.push(x[i])
}y.sort()
console.log(y)
let u=[]
for (let j=0;j<x.length;j++){
  u.push(x[j])
}
u.sort()
console.log(u)
           let q=""
for(let k=0;k<x.length;k++){
    q=q+u[k]
  
}
let g='';
for(let w=0;w<x.length;w++){
    g=g+y[w]
}
(g==q)?console.log("HI"):console.log("Bye")