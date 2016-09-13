$(document).ready(function(){
    $('.icon').click(function(){
        $('.navbar ul').css('display', 'block');
        $('.cross').removeClass('none');
        $('.logo-query').css('display', 'none');
        $('.icon').css('display', 'none');
    });
    $('.cross').click(function(){
        $('.navbar ul').css('display', 'none');
        $('.cross').addClass('none');
        $('.logo-query').css('display', 'block');
        $('.icon').css('display', 'block');
    });
});