// $(document).ready(function(){
//    var signupToggles = document.querySelectorAll('.signup-form--toggle')
//    console.log(signupToggles.length+'- amount of signup toggles');
//   signupToggles.map(function(value,index,arr){
//      value.addEventListener("click",signUpToggleClickHandler)
//   })

//   function signUpToggleClickHandler (event) {

//   }
// })

function initSignup() {
   // initToggles('#resources-toggle-btn-1', '#resources-toggle-btn-2', '#teachers-tab', '#heathcare-professionals-tab')
   initToggles('#signup--form-caregiver-btn','#signup--form-hcp-btn','#signup--form-caregiver-form','#signup--form-hcp-form')
}

initSignup();