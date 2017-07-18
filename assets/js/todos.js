//check off specific todo by clicking
$("ul").on('click','li',function(){
  //toggle line-through list
  $(this).toggleClass("complete")

});

$('ul').on('click', 'span',function(event) {
  //remove list we click on
  $(this).parent().fadeOut(500, function() {
     $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text'").on('keypress',function(){
    //event 13 when user click enter key
  if(event.which === 13) {
    //new todo text from inpur
    var todoText = $(this).val();
    //make input blank
    $(this).val("");
    //create new li, add to ul
    $("ul").append('<li><span><i class="fa fa-trash" aria-hidden="true"></i></span> ' + todoText + "</li>");
  }
});

$('.fa-plus').on('click',function(){
  $('input').toggle(300);
});
