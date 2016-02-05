// This code runs when the page loads
$(function() {

  $(".thumbnail").on("click", function(event) {
    event.preventDefault();
    var elementThatWasClicked = $(this);
    console.log(elementThatWasClicked);
    elementThatWasClicked.parent().remove();
    //See Jquery traversal to understand parent()
  })

})