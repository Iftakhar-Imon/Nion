$(document).ready(function(){

   $(window).scroll(function(){
			if($(document).scrollTop() > 200){
				$(".header").addClass("menu");
			}else{
				$(".header").removeClass("menu");
			}
});
  //  $('body').scrollspy({
		// 	target: '.navbar',
		// 	offset: 95
		// });

    $("#name, #email, #mess").click(function(){

      $("#name, #email, #mess").addClass("green");

    });


	$("#name").keyup(function(){

    var name=$("#name").val();
    if(name.length>20){
        $("#msg").show();
        $("#msg").removeClass("positive"); 
    	$("#msg").text("maxium limit 20 charecter").addClass("negative");
    	// $("#msg").removeClass("red");
    	// $("#msg").addClass("green");

    }
    else{
    	$("#msg").removeClass("negative");
    	$("#msg").addClass("positive");
    	$("#msg").hide();
    }
 });

	var validemail=function(elementValue){
 	 var emailPattern=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     return emailPattern.test(elementValue);
 }
$("#email").keyup(function(){
   var value=$(this).val();
   var valid=validemail(value);
   if(!valid){
   	 $("#msg1").removeClass("positive");
     $("#msg1").text("not valid").addClass("negative");
   }
   else{
   	$("#msg1").removeClass("negative");
   	$("#msg1").text("valid").addClass("positive");
   }
});

$('.parallax-window1').parallax({imageSrc: 'city2.jpg'});


$('.parallax-window2').parallax({imageSrc: 'city1.jpg'});

$('.parallax-window3').parallax({imageSrc: 'testi.jpg'});


});
