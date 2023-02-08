let name="hello";
let ob={};
for (let i=0;i<name.length;i++){
  if (ob[name[i]]==undefined){
ob[name[i]]=1

    //console.log(ob)
}else {
    ob[name[i]]++
} }
console.log(ob)