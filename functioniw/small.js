//Write a function to check if the char is a small case or not.

function caseLetter(char){
  let smallChar="abcdefghijklmnopqrstuvwxyz";
  let count=0;
  for (let i=0 ; i<char.length;i++){
    for (let j=0;j<smallChar.length;j++){
      if (char[i]==smallChar[j]){
        count++
    }
  }}(count==char.length)?console.log("all small case"):console.log("Not small case")
  }

caseLetter("Y")