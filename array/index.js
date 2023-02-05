let x=["hi","bye","see","you"]
console.log(x.length)
console.log(x[(x.length-1)])
x.push(1)
console.log(x)
x.pop()
console.log(x)
let x1=["my","too"];

let x3=[...x,...x1]

console.log(x3)

x[2]="search"
x[3]="json"

console.log(x)