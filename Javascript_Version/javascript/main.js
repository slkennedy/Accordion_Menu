$(".menuStuff").hide();

$(".menu").click(function(){
  $(".menuStuff:visible").slideToggle(1000);
  $(this).next().slideToggle(1000);
});
