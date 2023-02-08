function mapChar(N) {
    
let x="abcdefghijklmnopqrstuvwxyz";
let ob={}
for (let i=0;i<N;i++){
    for (let j=1;j<(i+2);j++){
        ob[x[i]]=j
        }
}
  for (let a in ob){
      console.log(a+"-"+ob[a])       
        }
    }
console.log(Object.keys(ob).length)


