let u=["gikki", "chillu","challi","balli","biki", "balli", "chillu","chakku"]
let y=[];
let ob={}

for (let i=0;i<u.length;i++){
  ob[u[i]]=0;
}
for (let a in ob ){
  y.push(a)
}console.log(y)