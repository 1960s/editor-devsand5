/*
COMMENT ALL CODE
when scrolling attribute buttons don't stay in place
clean-up style sheet
title and style were not appearing, check for other missing tags
fix full_image tag, used single quotes possibly fixed 
replace $for tags,  .replace(/\$/g, ""), could also set value with dom
why is it putting uppercase to lowercase in value="" of template literal, cause was nested double quotes
class and queryslector all problem appending child
test performance difference
data-* x2 on global button issue
fix opens spaces between buttons
how to display open tabcontent on page load
seperate dropdown from buttons with no attributes
replace $ and ! tags
fix booleans values
use dom vs innerhtml and add content to nodes
how to organize data sheets for easiest generation

can add data* values for immutability and 



3 ways to generate code
nested loops: outside to inside method, can be hard to read, can us one data structure, hard to change/modify structure
referencing dom elements: appending code to element, can break up code and easy to read,
  structures are easy to modify, though redundancy needed to reference other data structures.
create string code: inside to outside method, generate inner code first and then append to the next level



make as functions
can also use browser objects to get keys
use typeof to find whether method or property
*/

function test() {
  console.time()




  //setting up tabcontent and groups
  for (let [tabs, module] of Object.entries(grouping)) {

    rawcode = []
    rawcode.push(`<div id="${tabs}" class="tabcontent">`)

    for (let [key, value] of Object.entries(grouping[tabs])) {

      rawcode.push(`
<div class="boxes">
<div class="centerMe">${key}</div>
`)

      value.forEach(el => rawcode.push(`
<div class="columnrows">
<span id="${el}">${el}</span>
<br>
  </div>
`)
      )
      rawcode.push(`</div>`)
    }

    rawcode.push(`</div>`)

    let child = document.createElement("div")
    child.innerHTML = rawcode.join("")
    htmlCode.appendChild(child)

  }








  //setting up element buttons
  for (let [key, attr] of Object.entries(elements)) {
    rawcode = []
    //for elements with no attribtues
    if (elements[key].attributes.length == 0) {
      rawcode.push(`
<button draggable="true" class=" button drag" value='${elements[key].value}'>${key}</button>
`)

    }

    //setting up dropdown menus for elements with attributes
    else {
      rawcode.push(`
<div class="dropdown">
<button draggable="true" class=" button drag" value='${elements[key].value}'>${key}</button>
<div class="dropdown-content">
`)

      elements[key].attributes.forEach(el =>
        rawcode.push(`<div class="columnrows ${el}"></div>`)
      )
      rawcode.push(`</div>`)
      rawcode.push(`</div>`)
    }


// find id of element and attach the dropdown menu with attributes
    //adding element layer to document
    let tabElement = document.getElementById(`${elements[key].subgroup}`)
    let child = document.createElement("div")
    child.innerHTML = rawcode.join("").replace(/\$/g, "");
    tabElement.appendChild(child)

  }








  //setting up attributes buttons and their values
  for (let [key, attr] of Object.entries(attributes)) {
    rawcode = []


    attributes[key].values.forEach(el => {
      //single quotes were used on the value='' 
      //because double quotes caused letters to be lowercase and prepend a white space

      //boolean attributes are the same as their values
      //example: disabled instead of href=""
      key == el
        ? rawcode.push(`
<button draggable="true" class="column button drag" value='${key}'>${key}</button>`)
        : rawcode.push(`
<button draggable="true" class="column button drag" value='${key}${el}'>${key}${el}</button>`)
    })


    //adding attribute layer to document
    // since there can be an attribute for multiple elements
    // an array is made and then that rawcode is appended for each element with those attributes
    let tabElement = document.getElementsByClassName(`${key}`)
    tabElement = Array.from(tabElement)
    rawcode = rawcode.join("").replace(/!/g, "");
    tabElement.forEach(el => {
      let child = document.createElement("div")//a way not to use div, unnecessary pollution with divs
      child.innerHTML = rawcode
      el.appendChild(child)

    })
  }
  /*
*/












  // console.log(document.getElementById("HTML"))









  console.timeEnd()
}
test()

//opens HTML tab
document.getElementById("defaultOpen").click();






