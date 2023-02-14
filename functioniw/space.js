//Write a function to replace spaces in a given string with - .

function spaceString(str){
  let x="";
  for (let i=0;i<str.length;i++){
    if (str[i]==" "){
      x=x+"-"
    }else{
      x=x+str[i]
    }
  }console.log(x)
}
  spaceString("come back again");