$(".menu").click(function(){

  $(".openStuff").toggleClass("menuStuff").removeClass("openStuff");
  $(this).next().toggleClass("openStuff menuStuff");

});
