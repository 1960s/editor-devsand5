/*
let arr = []
for (let group in grouping) {
  for (let key of grouping[group]) {

    for (let element in elements) {

      if (key === element) {


        for (let key2 of elements[element]) {


          if (key == "Fundamental objects") {

            let props = Object.getOwnPropertyNames(window[key2])
            for (let prop of props) {
              arr.push(`${group}\t${key}\t${key2}\t${prop}`)
            }

          }

        }

      }

    }

  }

}


let arr = str.split("\n").map(x=> x.split("\t"))
let obj = {}
for (let name of arr) {


  if (!Object.hasOwn(obj, [name[0]])) {
    obj[name[0]] = {}
  }

  if (!Object.hasOwn(obj[name[0]], [name[1]])) {
    obj[name[0]][name[1]] = []
  }
  if (!obj[name[0]][name[1]].includes(name[2])) {
    obj[name[0]][name[1]].push(name[2])
  }

}

*/




(function () {
  console.time()







  //setting up tabcontent and groups
  for (let [tabs, module] of Object.entries(groupingJS)) {

    rawcode = []
    rawcode.push(`<div id="${tabs}" class="tabcontent">`)

    module.forEach(key => {

      rawcode.push(`
  <div class="boxes" id="${key}">
  <div class="centerMe">${key}</div>
  `)
      {/* <span id="${el}">${el}</span> */ }
      for (let [title, element] of Object.entries(elementsJS)) {

        if (key === title) {
          rawcode.push(`<div class="columnrows">`)

          element.forEach(el => {
            rawcode.push(`
            <div class="dropdown">
            <button draggable="true" class=" button drag" value='${el}'>${el}</button>
            <div class="dropdown-content">
            `)
            rawcode.push(`<div class="columnrows" id="${el}"></div>`)

            rawcode.push(`</div>`)
            rawcode.push(`</div>`)

          })

          rawcode.push(`</div>`)
        }
      }
      rawcode.push(`</div>`)

    })
    rawcode.push(`</div>`)

    let child = document.createElement("div")
    child.innerHTML = rawcode.join("")
    htmlCode.appendChild(child)
  }






  //setting up element buttons
  for (let [boxTitle, key2] of Object.entries(grouping3JS)) {
    rawcode = []

    rawcode.push(`
<div class="centerMe">${boxTitle}</div>
`)

    for (let [title, element] of Object.entries(key2)) {
      rawcode.push(`<div class="columnrows">`)
      rawcode.push(`<div id="${title}">${title}</div>`)

      element.forEach(el => {
        rawcode.push(`
<div class="dropdown">
<button draggable="true" class=" button drag" value='${el}'>${el}</button>
<div class="dropdown-content">
`)
        rawcode.push(`<div class="columnrows" id="${el}"></div>`)

        rawcode.push(`</div>`)
        rawcode.push(`</div>`)
      }

      )
      rawcode.push(`</div>`)
    }


    // find id of element and attach the dropdown menu with attributes
    //adding element layer to document

    //clears elements
    let replaceBox = document.getElementById(`${boxTitle}`)
    while (replaceBox.firstChild) {
      replaceBox.removeChild(replaceBox.firstChild)
    }

    let child = document.createElement("div")
    child.innerHTML = rawcode.join("")
    replaceBox.appendChild(child)

  }


  for (let [buttonTitle, attribute] of Object.entries(attributesJS)) {
    let buttonAdd = document.getElementById(`${buttonTitle}`)

    rawcode = []

    attribute.forEach(key=>rawcode.push(`
    <button draggable="true" class="column button drag" value='${key}'>${key}</button>`))
   

    let child = document.createElement("div")
    child.innerHTML = rawcode.join("")
    buttonAdd.appendChild(child)
  }



  console.timeEnd()
})()


//opens HTML tab
document.getElementById("defaultOpen").click();






