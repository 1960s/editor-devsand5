//CODEMIRROR
//CARET FINDER

    /*CODEMIRROR START*/        
    var delay;
    var editor = CodeMirror.fromTextArea(document.getElementById('myTextarea'), {
    lineNumbers: true,
        autofocus: true,
    mode: 'text/html',
    autoCloseTags: true,
    lineWrapping: true,
    matchTags: {bothTags: true},
    matchBrackets: true,
    lineWiseCopyCut: false,
        autoCloseBrackets: true
    });
    
    //timeout delay
    editor.on("change", function() {
        //reload_message_frame(); //<-- enable to clear javascript in cache, though it gives a flashing update if used to quickly
    clearTimeout(delay);
    delay = setTimeout(updatePreview, 1);
    });
    
    //update preview
    function updatePreview() {
    var previewFrame = document.getElementById('myIframe');
    var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
    preview.write(editor.getValue());
    preview.close();
    }
    
    setTimeout(updatePreview, 1);
    /*CODEMIRROR END*/     
            
                
    /*CARET FINDER START*/        
    function insertStringInTemplate(str)    {
    
        // If there's a selection, replace the selection.
        if ( editor.somethingSelected() ) {
        editor.replaceSelection( str );
        return;
        }
        
        // Otherwise, we insert at the cursor position.
        var cursor = editor.getCursor();
        editor.replaceRange(str, cursor);
        }
        /*CARET FINDER END*/ 
		
		/*INLET START*/ 
    var inlet = Inlet(editor);
/*INLET END*/ 