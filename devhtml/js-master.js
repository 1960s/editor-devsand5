/*
*/

function test() {
  console.time()




  //setting up tab categories
  let rawcode = []
  let htmlCode = document.getElementById("htmlCode")

  rawcode.push(`
<div class="tab">
`)

  for (let [tabs, module] of Object.entries(grouping)) {

    tabs == "Built-ins"
      ? rawcode.push(`
<button id="defaultOpen" class="tablinks" onclick="openTab(event, '${tabs}')">${tabs.toUpperCase()}</button>
`)
      : rawcode.push(`
<button  class="tablinks" onclick="openTab(event, '${tabs}')">${tabs.toUpperCase()}</button>
`)
  }

  rawcode.push(`
  </div>
`)

  //htmlCode.innerHTML = rawcode.join("");





  //setting up tabcontent and groups
  for (let [tabs, modules] of Object.entries(grouping)) {
    rawcode.push(`<div id="${tabs}" class="tabcontent">`)

    for (let module of modules) {

      rawcode.push(`
<div class="boxes">
<div class="centerMe">${module}</div>
`)

      for (let [element, contents] of Object.entries(elements)) {

        if (element == module) {

          rawcode.push(`
                    <div class="columnrows">
                    
                    `)



          contents.forEach(x => {
            rawcode.push(`
                        <div>
        <button draggable="true" class=" button drag" value=''>${x}</button>
        </div>
        `)
            for (let [attribute, method] of Object.entries(attributes)) {
              if (x == attribute) {

                rawcode.push(`
            <div class="dropdown">
<button class=" button drag">Array</button>
<div class="dropdown-content">
  <div class="columnrows dir">
    <div>
            `)
            method.forEach(y => {
              rawcode.push(`<button class="column button drag">${y}</button>`)
            })
            



            rawcode.push(`
            </div>
            </div>
          </div>
          </div>     
            `)


              }

            }



          });

          rawcode.push(`
                      </div>
                    `)



        }
      }





      rawcode.push(`</div>`)
    }

    rawcode.push(`</div>`)

    htmlCode.innerHTML = rawcode.join("");

  }






  /*
  
      //setting up element buttons
      for (let [key, attr] of Object.entries(elements)) {
        rawcode = []
        //for elements with no attribtues
        if(elements[key].attributes.length == 0){
          rawcode.push(`
  <button draggable="true" class=" button drag" value='${elements[key].value}'>${key}</button>
  `)
  
        }
  
        //setting up dropdown menus for elements with attributes
        else{
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
      
  */












  // console.log(document.getElementById("HTML"))









  console.timeEnd()
}
test()

//opens HTML tab
document.getElementById("defaultOpen").click();






