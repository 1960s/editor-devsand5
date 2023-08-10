//BUTTONS TOOLBAR
//DRAG AND DROP
//TOOLBAR TABS
//interaction of toolbar with textarea
            
    /*BUTTONS TOOLBAR SCRIPT START*/  
    document.querySelectorAll('.button').forEach(el => {
    
        el.addEventListener('mouseenter', function (ev) {
        //reload_message_frame();
        function updatePreview() {
        var previewFrame = document.getElementById('myIframe');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        
        preview.open();
        preview.write(editor.getRange({line: 0, ch: 0}, editor.getCursor("from")) + ev.target.value + editor.getRange(editor.getCursor("to"), {line: 1000000, ch: 0}));
        preview.close();
        
        }
        setTimeout(updatePreview, 1);
        });
        
        el.addEventListener('click', function (ev) {
            //reload_message_frame();
             var str = ev.target.value;
        if ( str ) {
        insertStringInTemplate( str );
        
        editor.focus();
        }   
        
        });
        
        
        el.addEventListener('mouseleave', function(ev) {
           // reload_message_frame();
        function updatePreview() {
        var previewFrame = document.getElementById('myIframe');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        //reload_message_frame();
        preview.open();
        preview.write(editor.getValue());
        preview.close();
        
        }
        setTimeout(updatePreview, 1);
        });
        });
        /*BUTTONS TOOLBAR SCRIPT END*/ 
                

 
            
    /*DRAG AND DROP START*/    
    document.querySelectorAll('.drag').forEach((drag) => {
        drag.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text', drag.value);
        event.effectAllowed = "copy";
        // Create an image and use it for the drag image
        // NOTE: change "example.gif" to an existing image or the image will not
        // be created and the default drag image will be used.
        var img = new Image(); 
        img.src = 'images/heading.png'; 
        event.dataTransfer.setDragImage(img, 1, -50);
        });
        
        drag.addEventListener( 'dragend', function( event ) {
        editor.setCursor(editor.getCursor());    
        });
        
        });
        /*DRAG AND DROP END*/  
      

  /*TOOLBAR TABS START*/  
  document.getElementById("defaultOpen").click();
    
  function openTab(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
}               
        
        
/*TOOLBAR TABS END*/        
   