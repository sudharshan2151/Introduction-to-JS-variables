let x=["gikki","chillu","challi","balli","gikki","chillu","biki"];
let y=[]
let object={
  
}
for (let i=0;i<x.length;i++){
  object[x[i]]=0
}
console.log(object)
for (let a in object){
  y.push(a)
}
console.log(y)