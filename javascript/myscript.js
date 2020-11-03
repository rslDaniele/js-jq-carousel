
$(document).ready(function () {


  $(".next").click(nextImg);

  $(".prev").click(prevImg);
});



// FUNZIONI
// funzione per scorrere img in avanti

function nextImg() {
  // console.log("hai clickato next");
  imgAttiva = $("img.cat.active");

  imgAttiva.removeClass("active");

  // se siamo all'ultima img allora torna alla prima
  // altrimenti rendi attiba la successiva

  if  (imgAttiva.hasClass("last")) {
      $("img.cat.first").addClass("active");
    } else {
      imgAttiva.next("img").addClass("active");
    }
  }



  function prevImg() {

    imgAttiva = $("img.cat.active");

    imgAttiva.removeClass("active").prev("img").addClass("active");

    if (imgAttiva.hasClass("first")) {
      $("img.cat.last").addClass("active");
    } else {
      imgAttiva.prev("img").addClass("active");
    }
  }
