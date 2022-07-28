let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');
let container = document.getElementById('container');
let text = document.getElementById('sign-in-text');


signUpButton.onclick = function (){
    container.classList.add('right-panel-active')
    text.innerHTML="Sign Up"
}
signInButton.onclick = function (){
    container.classList.remove('right-panel-active')
    text.innerHTML="Sign In"
}
