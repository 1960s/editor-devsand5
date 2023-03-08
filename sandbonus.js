let stamp = document.getElementById("listMake")
 let pudge = document.getElementById("pudge")
 let choiceMe = document.getElementById("choiceMe");


function brush(){
    let more = []
 let grudge = pudge.value.split('\n')
 for (let i = 0; i < grudge.length; i++){
if(choiceMe.value === "a"){
    more.push(`<${choiceMe.value} href="#${grudge[i].toLowerCase()}">${grudge[i]}</${choiceMe.value}>`)
}
else{
    more.push(`<${choiceMe.value}>${grudge[i]}</${choiceMe.value}>`)
}

 }

   
  stamp.value = more.join("\n")
}
