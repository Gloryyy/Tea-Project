$(function(){

    /* rotating the image */

    $('img:first').click(function(){
        $(this).toggleClass('teapot-rotate')
    });


    /* hover a text and create 3 defferent messages */

    let myArray = ['Beautiful rich flavour', 'Great for a cold day', 'Soothing and tasty'];

    $('.tea-desc').hover(function(){
       $(this).text(myArray[Math.floor(Math.random() * myArray.length)]);
    }); 


    /* onclick submit  show and hide*/

     $('.submit').click(function(){
        $('.modal').show();
    });

    $('.modal-close').click(function(){
        $('.modal').hide();
    });
  
 
    });