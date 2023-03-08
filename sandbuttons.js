//BUTTON FUNCTIONS
//REPEATER BAR   
//LOAD AND SAVE    
//definition of buttons on toolbar



/*BUTTON FUNCTIONS START*/ 
function clearMe() {
    editor.setValue('');
    editor.focus();
    }
          
    function undoMe() {
    editor.undo();
    editor.focus();
    }
          
    function redoMe() {
    editor.redo();
    editor.focus();
    }       
            
    function deleteMe() {
    editor.execCommand("delCharBefore");    
    }
           
    function selectAll() {
    editor.execCommand("selectAll")
    editor.focus();
    }
       
    function deselectAll() {
    editor.setCursor(editor.getCursor());
    editor.focus();
    }
            
    function cutMe() {
    document.execCommand("cut");
    editor.replaceSelection('');
    editor.focus();
    }
            
    function copyMe() {
      document.execCommand("copy");
        editor.focus();
    
    }
            
    function pasteMe() {
        
      editor.execCommand("paste");
    }
                       
    var intervalId; // keep the ret val from setTimeout()
    function back() {
        intervalId = setInterval(deleteMe, 100);
    }
    
    function backStop() {
        clearInterval(intervalId);
        editor.focus()
    }
    
    var intervalId1; // keep the ret val from setTimeout()
    function undoStart() {
        intervalId1 = setInterval(undoMe, 100);
    }
    
    function undoStop() {
        clearInterval(intervalId1);
        editor.focus()
    }
            
    var intervalId2; // keep the ret val from setTimeout()
    function redoStart() {
        intervalId2 = setInterval(redoMe, 100);
    }
    
    function redoStop() {
        clearInterval(intervalId2);
        editor.focus()
    }        
//BUTTONS FUNCTIONS END

                    
    /*FORMAT BAR SCRIPT START*/  
    document.querySelectorAll('.formatbutton').forEach(el => {
    
        el.addEventListener('click', function (ev) {
             var str = ev.target.value;
        if ( str ) {
        insertStringInTemplate( str );
        
        editor.focus();
        }   
        
        });
        
        });
        /*FORMAT BAR SCRIPT END*/  
                
                
                
             
        /*REPEATER BAR SCRIPT START*/  
        var gosh;   
        document.querySelectorAll('.repeater').forEach(el => {
         
        el.addEventListener('click', function (ev) {
             var str = ev.target.value;
        if ( str ) {
        insertStringInTemplate( str );
        
        editor.focus();
        }   
        
        });    
            
            
        el.addEventListener('mouseup', function(ev) {
           clearInterval(gosh);
            editor.focus()
        
        })
            
        el.addEventListener('mousedown', function(ev) {
        
        var str = ev.target.value;
        
            function rollOff(){
                insertStringInTemplate( str )
            }
            
        gosh = setInterval(rollOff, 100);
        
        }) 
            
        el.addEventListener('mouseout', function(ev) {
        
            clearInterval(gosh);
            editor.focus()
        
            
        }) 
        
        });
        /*REPEATER BAR SCRIPT END*/        


//LOAD AND SAVE START
    
function loadfile(input){
    var reader = new FileReader();
    reader.onload = function(e) {
    
        if ( editor.somethingSelected() ) {
        editor.replaceSelection( e.target.result );
        return;
        }
    
        editor.replaceRange(e.target.result, editor.getCursor());};
        reader.readAsText(input.files[0]);}
                




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


