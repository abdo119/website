$(function(){
    'use strict';
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: '1px solid #f7600e'
    });
    $('.header .arrow i').click(function () {
        $("html, body").animate({ scrollTop:$(".header").height() }, 1000);  
    });
    $(".work .more button").click(function(){
        $(this).css("display","none");
        $(".work .more2 ").fadeIn();

    });
    $(".work .more2 button").click(function(){
        $(".work .more2").css("display","none");
        $(".work .more button ").fadeIn();
    });

    var currentIndex = 0;
    var content = ["These guys are incredible!ery good service! Highly recommended!", "These guys are incredible! ", "These guys are cppphbygvt "];
    var persons = ["Abdo","Ahmed","mahmoud"];
    $('#icon-increase').click(function(){
        $('#icon-decrease').fadeIn();
        
       if(currentIndex == content.length -1  )
        {
            console.log("3ash"); 
        } 
        else{ 
            currentIndex++;
            $('#p-action').text(content[currentIndex]);
            $('#h3-action').text(persons[currentIndex]);
            if(currentIndex == content.length -1  )
            {
                $('#icon-increase').fadeOut(); 
            } 
        }
    });
    $('#icon-decrease').click(function(){
        $('#icon-increase').fadeIn();
        if(currentIndex<0)
        {
           console.log("5ly blak"); 
        }
        else
        {
            currentIndex--;
            $('#p-action').text(content[currentIndex]);
            $('#h3-action').text(persons[currentIndex]);
            if(currentIndex==0)
            {
                $('#icon-decrease').fadeOut();
            }
            
        }
    });
    $("#lastInput button").click(function(){
        $("html, body").animate({ scrollTop:(0) }, 1000);
    });
    $("#down").click(function(){
        console.log( $('.team').offset().top);
        $('html, body').animate({
            scrollTop: $('.team').offset().top
            
        }, 2000);
    });
    $(window).scroll(function(){
        if($(window).scrollTop() >= $('.features').offset().top-500)
        {
            $('.features').animate({
                opacity:1
            }, 600);
        }
        if($(window).scrollTop() >= $('.sub').offset().top-700)
        {
            $('.sub').animate({
                opacity:1
            }, 1000);
        }
        if($(window).scrollTop() >= $('.work').offset().top-700)
        {
            $('.work').animate({
                opacity:1
            }, 1000);
        }
        if($(window).scrollTop() >= $('.test').offset().top-700)
        {
            $('.test').animate({
                opacity:1
            }, 1000);
        }
        if($(window).scrollTop() >= $('.team').offset().top-700)
        {
            $('.team').animate({
                opacity:1
            }, 1000);
        }
        if($(window).scrollTop() >= $('.opinion').offset().top-700)
        {
            $('.opinion').animate({
                opacity:1
            }, 1000);
        }
        if($(window).scrollTop() >= $('.footer').offset().top-1000)
        {
            $('.footer').animate({
                opacity:1
            }, 1000);
        }

    });
});