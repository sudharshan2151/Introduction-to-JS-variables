function char(c){
  let low="abcdefghijklmnopqrstuvwxyz";
  let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i=0;i<low.length;i++){
    if(c==low[i]){
      c=cap[i]
    }else if(c==cap[i]){
      c=low[i]
    }
  }return c
}

function swap(c){
  let sum="";
  for (let i=0;i<c.length;i++){
    sum+=char(c[i])
  }console.log(sum)
}

swap("Test")

