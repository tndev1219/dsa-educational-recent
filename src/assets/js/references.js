 var isShowing = false;

 function initReferences() {
     $('.references-tray--desktop-layout').on("click", showReferences);
 }

 function showReferences(event) {
     if (isShowing === false) {
         $('.references--tray').show();
         $('.references-tray--btn').text('-');
         isShowing = true;

     } else {
         $('.references--tray').hide();
         $('.references-tray--btn').text('+');
         isShowing = false;
     }

 }

 initReferences();