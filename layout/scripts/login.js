
// singup
var x = document.getElementById("logoutext");
        x.style.display = "block";

const signupForm = document.querySelector('#loginForm');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // get user info

  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  var userau = 0;

  auth.signInWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    userau = cred.user;

    signupForm.reset();

    if(cred.user != 0){
    var x = document.getElementById("logintext");
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  })
})


logout
const logout = document.getElementById("logoutext");
	logout.addEventListener('click', (e) => {
	  e.preventDefault();
	  auth.signOut().then(() => {

      if(cred.user == 0){
        var x = document.getElementById("logoutext");
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

		console.log('user signout');
	  })
  })
