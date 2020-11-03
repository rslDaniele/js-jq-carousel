
$(document).ready(function nextImg() {


  $(".next").click();
})


// FUNZIONI
// funzione per scorrere img in avanti

function nextImg() {
  // console.log("hai clickato next");
  imgAttiva = $("cat.active");

  imgAttiva.removeClass("active").next("img").addClass("active");

  // se siamo all'ultima img allora torna alla prima
  // altrimenti rendi attiba la successiva

  if (imgAttiva.hasClass("last")) {
    $("img.first").addClass("active");
  } else {
    imgAttiva.next("img").addClass("active");
  }
