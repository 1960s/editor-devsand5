//LOAD AND SAVE START
    
function loadfile(input){
    var reader = new FileReader();
    reader.onload = function(e) {
    
        if ( editor.somethingSelected() ) {
        editor.replaceSelection( e.target.result );
        return;
        }
    
        editor.replaceRange(e.target.result, editor.getCursor());};
        reader.readAsText(input.files[0]);
        }
                




    let nameMe = document.getElementById("nameMe");
    let extendMe = document.getElementById("extendMe");
    
    function saveTextAsFile()
    {      
    var textToWrite = editor.getValue();
    var textToWrite = textToWrite.replace(/\n/g, "\r\n");
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = `${nameMe.value}.${extendMe.value}`;
    
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = nameMe;//<--custom change, find out meaning
    
    window.URL = window.URL || window.webkitURL;
    
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    }
    
    function destroyClickedElement(event)
    {
    document.body.removeChild(event.target);
    }  

//LOAD AND SAVE END
/*
FILE SYSTEM ACCESS API
Interfaces
FileSystemHandle
FileSystemFileHandle
FileSystemDirectoryHandle
FileSystemWritableFileStream
Methods
window.showOpenFilePicker()
window.showSaveFilePicker()
window.showDirectoryPicker()
DataTransferItem.getAsFileSystemHandle()


Don't use "open()" as a function, already in use
https://developer.mozilla.org/en-US/docs/Web/API/Window/open
(other MIME) accept:  'text/plain': ['.txt'],


const options = {
  startIn: 'pictures',  //how is this captured, custom address
  suggestedName: 'Untitled Text.txt',
  types: [
    {
      description: 'Images',
      accept: {
        'image/*': ['.png', '.gif', '.jpeg', '.jpg']
      }
    },
  ],
  excludeAcceptAllOption: true,
  multiple: false
};

	const options = {
	  startIn: 'desktop',  //how is this captured, custom address
	  suggestedName: 'untitled.txt', // fileHandle.name
	};

*/

      
      let fileHandle;
let filePath = location.pathname.split("/")
let fileDirectory = "downloads"//filePath[filePath.length - 2].toLowerCase()//startIn option will not work with Uppercase letters
let fileLocation = filePath[filePath.length - 1]



  /**/
  function init(){
    async function openFile(){
    
    	const options = {
	  startIn: fileDirectory,  //how is this captured, custom address, plit location.pathname
	};

      // Destructure the one-element array.
      [fileHandle] = await window.showOpenFilePicker(options); //options
      // Do something with the file handle.
      const file = await fileHandle.getFile();
      const contents = await file.text();
      editor.setValue(contents);
    };
    openFile()
  }

  
    function save(){
async function writeFile(fileHandle, contents) {
  // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();
  // Write the contents of the file to the stream.
  await writable.write(contents);
  // Close the file and write the contents to disk.
  await writable.close();
} 
      writeFile(fileHandle, editor.getValue())
  }
  
    
    function saveAs(){
async function getNewFileHandle() {
	const options = {
	  startIn: fileDirectory,  //how is this captured, custom address, plit location.pathname
	  suggestedName: "PPPP", // split location.pathname
	};

   fileHandle = await window.showSaveFilePicker(options);
  
    // Create a FileSystemWritableFileStream to write to.
  const writable = await fileHandle.createWritable();
  // Write the contents of the file to the stream.
  await writable.write(editor.getValue());
  // Close the file and write the contents to disk.
  await writable.close();

}
      
      getNewFileHandle()
    }




window.addEventListener('keydown', (e) => {
  // console.log('key', e.code, e.ctrlKey, e.metaKey, e.shiftKey, e.key);

  // Save As
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyS') {
    e.preventDefault();
    saveAs();
    return;
  }

  // Save
  if ((e.ctrlKey === true || e.metaKey === true) && e.key === 's') {
    e.preventDefault();
    save();
    return;
  }

  // Open
  if ((e.ctrlKey === true || e.metaKey === true) && e.key === 'o') {
    e.preventDefault();
    init();
    return;
  }
    /**/
})
