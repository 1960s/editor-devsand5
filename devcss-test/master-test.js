/*
	fix tags <> for displaying syntax
add color to longhand and shorthand values
	two selectors ids were interfering with each other renamed in categories file
	css speech added to categories file for "azimuth"
*/


function test() {

console.time()




    //setting up tab categories
    let rawcode = []
    let cssCode = document.getElementById("cssCode")

    rawcode.push(`
<div class="tab">
`)

    for (let [tabs, module] of Object.entries(categories)) {

      tabs == "Meta"
        ?         rawcode.push(`
<button id="defaultOpen" class="tablinks" onclick="openTab(event, '${tabs}')">${tabs}</button>
`)
      :         rawcode.push(`
<button  class="tablinks" onclick="openTab(event, '${tabs}')">${tabs}</button>
`)
    }

    rawcode.push(`
  </div>
`)








    //setting up tabcontent and groups
    for (let [tabs, module] of Object.entries(categories)) {

      rawcode.push(`<div id="${tabs}" class="tabcontent">`)


        module.forEach(el => rawcode.push(`
<div class="boxes">
<div class="centerMe">${el}</div>
<div id="${el}" class="columnrows"></div>
</div>
`)
) 
      rawcode.push(`</div>`)

      cssCode.innerHTML = rawcode.join("");

    }









//PROPERTY BUTTONS


//fixing < and >, they interfere with .innerHTML
properties = JSON.parse(
JSON.stringify(properties)
.replace(/</g, "&#x3C;")
.replace(/>/g, "&#x3E;")
)




    //setting up property buttons
    for (let [key, attr] of Object.entries(properties)) {
      rawcode = []

if(properties[key].syntax == key){
rawcode.push(`<button draggable="true" class=" button drag" value='${key}'>${key}</button>`)
}

else {


  if (Array.isArray(properties[key].computed)){

      //setting up dropdown menus for elements with syntax
        rawcode.push(`
<div class="dropdown">
<button style="background-color: red" draggable="true" class=" button drag" value='${key}'>${key}</button>
<div class="dropdown-content">
<button draggable="true" class=" button drag" value='${properties[key].syntax}'>${properties[key].syntax}</button>
`)

}


else{
      //setting up dropdown menus for elements with syntax
        rawcode.push(`
<div class="dropdown">
<button draggable="true" class=" button drag" value='${key}'>${key}</button>
<div class="dropdown-content">
<button draggable="true" class=" button drag" value='${properties[key].syntax}'>${properties[key].syntax}</button>
`)
}



          
                                        
        rawcode.push(`</div>`)
        rawcode.push(`</div>`)
}      


properties[key].groups.forEach(el => {
      //adding element layer to document

      let tabElement = document.getElementById(`${el}`)
	if (!tabElement){return}//Selectors group in elements object null
      let child = document.createElement("article")
      child.innerHTML = rawcode.join("")//.replace(/\$/g, "");
      tabElement.appendChild(child)


}
)
    }










/*


    //setting up attributes buttons and their values
    for (let [key, attr] of Object.entries(syntax)) {
      rawcode = []


      syntax[key].values.forEach(el => {
        //single quotes were used on the value='' 
        //because double quotes caused letters to be lowercase and prepend a white space

        //checks for booleans, example: disabled instead of href=""
        key == el
          ?          rawcode.push(`
<button draggable="true" class="column button drag" value='${key}'>${key}</button>
<br>`)
        :          rawcode.push(`
<button draggable="true" class="column button drag" value='${key}${el}'>${key}${el}</button>
<br>`)
      }) 


      //adding attribute layer to document
      let tabElement = document.getElementsByClassName(`${key}`)
      tabElement = Array.from(tabElement)

      tabElement.forEach(el =>{
        let child = document.createElement("div")
        child.innerHTML = rawcode.join("").replace(/!/g, "");
        el.appendChild(child)

      }) 
    }





			
				//property object
			    for (let [tag, data] of Object.entries(property)) {
					 if (data.groups.includes(module[i])) {
		
						 beggar = ""

                        for (let i = 0; i < shorthand.length; i++) {
                            if (tag == shorthand[i]) {
                                beggar += "shorthand"
                            }
                        }

                        for (let i = 0; i < longhand.length; i++) {
                            if (tag == longhand[i]) {
                                beggar += "longhand"
                            }

                        }

                        if (beggar == "shorthand") {
                            rawcode.push(dropdown(tag, "orange"))
                        } else if (beggar == "longhand") {
                            rawcode.push(dropdown(tag, "pink"))
                        } else if (beggar == "shorthandlonghand") {
                            rawcode.push(dropdown(tag, "green"))
                        } else {
                            rawcode.push(dropdown(tag,))
                        }




*/








/*
if (properties[key].syntax.includes("|")){

let  syntaxSplit = properties[key].syntax.split("|")

       syntaxSplit.forEach(el => {
rawcode.push(`
<button draggable="true" class=" button drag" value='${el}'>${el}</button>
`)    
}
)






}

else if(properties[key].syntax == key){

}

else{
        rawcode.push(`
<button draggable="true" class=" button drag" value='${properties[key].syntax}'>${properties[key].syntax}</button>
`)
}*/
      





















console.timeEnd()
}

test()

  //opens HTML tab
  document.getElementById("defaultOpen").click();















