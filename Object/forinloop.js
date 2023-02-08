let details={
  name:"Golu",
  age:20,
  phone:9877383832,
  address:"Kerela",
  father:"Juno",
  fatherAge:44,
}
let count=0;
for (let a in details){
  let x=""
  //console.log(a)
  //console.log(details[a])
  count++
  x=x+a+"-"+details[a]
  console.log(x)
}console.log(count)
console.log(details["address"][0])