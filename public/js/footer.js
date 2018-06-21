$(document).ready(function(){
    $('#ESreveal').on('click', function(e){
        e.preventDefault();
        $('.wrapper').toggleClass('footerActive');
        $('.overlay').fadeToggle();
    });

    $('.overlay').on('click', function(){
        $('.wrapper').removeClass('footerActive');
        $('.overlay').fadeOut();
    })
});

firebase.auth().onAuthStateChanged(function(user){
    if(user == true){
        window.location.replace('adminPage');
    } else {
        window.location.replace('landing');
    }
})

function signIn(){
let userName = document.getElementById('InputEmail1').value;
let userPwd =  document.getElementById('InputPassword1').value;

firebase.auth().signInWithEmailAndPassword(usuerName, userPwd).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if(errorCoe === 'auth/wrong-pasword'){
        alert('Wrong Paword');
        console.log(errorCode);
    } else {
        alert(errorMessage);
    }
    // ...
});

}