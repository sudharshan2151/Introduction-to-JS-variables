for (let i=0;i<9;i++){
  let x="";
  for (let j=0;j<9;j++){
    if (j==0 || j==8 || i==8){//command
      x=x+"*"
    }
  }console.log(x)
}
