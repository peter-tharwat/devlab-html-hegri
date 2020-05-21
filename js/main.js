$(document).ready(function () {
     $("#splash-screen").fadeOut(1000);

$("#reset-inp").click(function(){
     $("input[type=text]").val('');
});
   $("#bar").click(function(){
          $("#side-nav").animate({left:"0px"},1000);
     })
     $("#close-side").click(function(){
          $("#side-nav").animate({left:"-100%"},1000)
     });

let main_class=$("body").attr("class");
let moodSite=main_class;


let y=localStorage.getItem("moodSite",moodSite);
if(y!=null)
{
     $("body").removeAttr("class"); 

     let main_class=$("body").attr("class",y);

}else{
     localStorage.setItem("moodSite",moodSite);

}
if(y=="dark")
{
     $(".pretty input[type='checkbox']").prop('checked', true);
}

$('.pretty input[type="checkbox"]').click(function(){
     if($(this).is(":checked")){
          $("body").removeClass("light"); 
          $("body").addClass("dark");
          moodSite="dark";
          localStorage.setItem("moodSite",moodSite);
         }
     else if($(this).is(":not(:checked)")){
          $("body").removeClass("dark"); 
          $("body").addClass("light"); 
          moodSite="light";
          localStorage.setItem("moodSite",moodSite);
         }
 });
});

