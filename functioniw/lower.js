//Write a function to convert a character to lower case
//Use this function to convert a given word to lower case
//Use that function to convert an array of strings to array of lower case strings


function char(c){
  let cons="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let low="abcdefghijklmnopqrstuvwxyz";
  for (let i=0;i<cons.length;i++){
    if (cons[i]==c){
      c=low[i]
      return c
    }
  }
}

function word(c){
  let sum="";
  for (let i=0;i<c.length;i++){
    sum+=char(c[i])
  }return sum
}

function string(c){
  let ar=[];
  for (let i=0;i<c.length;i++){
    ar.push(word(c[i]))
  }console.log(ar)
}
string(["MA", "SA", "I", "SCH", "OOL"])