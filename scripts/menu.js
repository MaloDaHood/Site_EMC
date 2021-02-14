$(document).ready(function(){
    $('.toggle').click(function(){
        $('.toggle').toggleClass('active')
        $('.menu').toggleClass('active')
        $('.overlay').toggleClass('active')
        
        alert("OK");
    })
})