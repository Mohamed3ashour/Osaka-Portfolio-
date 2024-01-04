let clcwidth=$('#colorsBox').innerWidth();
$('#options').animate({left:`-${clcwidth}`},0)

$(document).ready(function () { 

    $("#loading .spinner").fadeOut(100 , function () {
    $("#loading").fadeOut(100 , function () { 
        $("#loading").remove();
        $("body").css('overflow-y' , 'auto')
     })

  })
 })

$(window).scroll(function () { 
    let long =$(window).scrollTop();
    var kes = $('#about').offset().top;
if (long > kes-60) {
    $('#main-nav').css( 'background-color', 'rgba(0,0,0,.7)');
    $('#btnUp').fadeIn(300);
}
else{
    $('#main-nav').css( 'background-color', 'rgba(0,0,0,0)');
    $('#btnUp').fadeOut(500);
}

});

$('#btnUp').click(function () { 
    $('body,html').animate({scrollTop:0},500)
});

$("nav a[href^='#']").click(function (e) {  
    
    let navClick = $(e.target).attr('href');
    let space =  $(navClick).offset().top;

    $('body,html').animate({scrollTop:space} , 1000 )
})

let colors = $('.collor-item');

colors.eq(0).css( 'background-color', 'black');
colors.eq(1).css( 'background-color', 'red');
colors.eq(2).css( 'background-color', 'blue');
colors.eq(3).css( 'background-color', 'teal');
colors.eq(4).css( 'background-color', 'green');

colors.click(function (e) {
   let itmColor=  $(e.target).css('background-color');
   $('.change').css( 'color', itmColor); 
   $('.back').css( 'background-color', itmColor);
})
$('#options i').click(function () {

    if ($('#options').css('left')=='0px') {
        $('#options').animate({left:`-${clcwidth}`},1000)
    } else {
        $('#options').animate({left:'0px'},1000)
    }
  })
  const navbarToggler = document.querySelector('.navbar-toggler'); navbarToggler.addEventListener('click', function() { const collapse = document.querySelector('.navbar-collapse'); collapse.classList.toggle('show'); })