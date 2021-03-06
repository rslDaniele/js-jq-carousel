
$(document).ready(function () {


  $(".next").click(nextImg);

  $(".next").click(nextDot);

  $(".prev").click(prevImg);

  $(".prev").click(prevDot);


});



// FUNZIONI

// Immagine successiva
function nextImg() {
  imgAttiva = $("img.cat.active");

  imgAttiva.removeClass("active");

  if  (imgAttiva.hasClass("last")) {
      $("img.cat.first").addClass("active");
    } else {
      imgAttiva.next("img").addClass("active");
    }
  }
// pallino successivo
function nextDot() {
    dotAttivo = $("div.dot.attivo")

    dotAttivo.removeClass("attivo").next("div.dot").addClass("attivo");

    if (dotAttivo.hasClass("last")) {
      $("div.dot.first").addClass("attivo");
    } else {
      dotAttivo.next("div.dot").addClass("attivo");
    }
  }

// immagine precedente
  function prevImg() {

    imgAttiva = $("img.cat.active");

    imgAttiva.removeClass("active").prev("img").addClass("active");

    if (imgAttiva.hasClass("first")) {
      $("img.cat.last").addClass("active");
    } else {
      imgAttiva.prev("img").addClass("active");
    }

  }

// pallino precedente
function prevDot() {
  dotAttivo = $("div.dot.attivo")

  dotAttivo.removeClass("attivo").prev("div.dot").addClass("attivo");

  if (dotAttivo.hasClass("first")) {
    $("div.dot.last").addClass("attivo");
  } else {
    dotAttivo.prev("div.dot").addClass("attivo");
  }
}

// Correzione code review
$(document).keydown(function(e){

  if (e.which === 39) {
    nextImg();
    nextDot();
  }
  if (e.which === 37) {
    prevImg();
    prevDot();
  }
})
