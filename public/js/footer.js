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