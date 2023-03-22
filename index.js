$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('#nav-menu').addClass("sticky");
        }else{
            $('#nav-menu').removeClass("sticky");
        }
        
    })

    // togel/menu nevbar script
    $('.menu-btn').click(function(){
        $('#nav-menu .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })
})