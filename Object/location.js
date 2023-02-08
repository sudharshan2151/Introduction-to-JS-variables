let details={
  name:"Golu",
  age:20,
  phone:9877383832,
  address:"Kerela",
  father:"Juno",
  fatherAge:44,
}

details.location={
  city:"Telegana",
  pinCode:48880,
  landmark:"near bus stand",
  district:"nellor",
}
console.log(details)
console.log(details.location.pinCode)
console.log(details["location"]["landmark"])
delete details.location.pinCode
console.log(details)