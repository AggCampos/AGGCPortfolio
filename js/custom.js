var slideIndexTHEMIS = 1;
var slideIndexKMS = 1;
var slideIndexAutoPlant = 1;
var slideIndexWhatsapp = 1;

slideIndexTHEMIS = showSlides(slideIndexTHEMIS, document.getElementsByClassName("mySlidesTHEMIS"), document.getElementsByClassName("dotTHEMIS"));
slideIndexKMS = showSlides(slideIndexKMS, document.getElementsByClassName("mySlidesKMS"), document.getElementsByClassName("dotKMS"));
slideIndexAutoPlant = showSlides(slideIndexKMS, document.getElementsByClassName("mySlidesAutoPlant"), document.getElementsByClassName("dotAutoPlant"));
slideIndexWhatsapp = showSlides(slideIndexKMS, document.getElementsByClassName("mySlidesWhatsapp"), document.getElementsByClassName("dotWhatsapp"));

// Next/previous controls
function plusSlides(n, name) {

  switch (name) {
    case "themis":
      slideIndexTHEMIS = showSlides(slideIndexTHEMIS += n, document.getElementsByClassName("mySlidesTHEMIS"), document.getElementsByClassName("dotTHEMIS"));
      break;

    case "kms":
      slideIndexKMS = showSlides(slideIndexKMS += n, document.getElementsByClassName("mySlidesKMS"), document.getElementsByClassName("dotKMS"));
      break;

    case "autoplant":
      slideIndexAutoPlant = showSlides(slideIndexAutoPlant += n, document.getElementsByClassName("mySlidesAutoPlant"), document.getElementsByClassName("dotAutoPlant"));
      break;

    case "whatsapp":
      slideIndexWhatsapp = showSlides(slideIndexWhatsapp += n, document.getElementsByClassName("mySlidesWhatsapp"), document.getElementsByClassName("dotWhatsapp"));
      break;
  }

}

// Thumbnail image controls
function currentSlide(n, name) {
  switch (name) {
    case "themis":
      slideIndexTHEMIS = showSlides(slideIndexTHEMIS = n, document.getElementsByClassName("mySlidesTHEMIS"), document.getElementsByClassName("dotTHEMIS"));
      break;

    case "kms":
      slideIndexKMS = showSlides(slideIndexKMS = n, document.getElementsByClassName("mySlidesKMS"), document.getElementsByClassName("dotKMS"));
      break;

    case "autoplant":
      slideIndexAutoPlant = showSlides(slideIndexAutoPlant = n, document.getElementsByClassName("mySlidesAutoPlant"), document.getElementsByClassName("dotAutoPlant"));
      break;

    case "whatsapp":
      slideIndexWhatsapp = showSlides(slideIndexWhatsapp = n, document.getElementsByClassName("mySlidesWhatsapp"), document.getElementsByClassName("dotWhatsapp"));
      break;
  }
}

function showSlides(n, slides, dots) {
  var i;
  var slideIndex = n;

  console.log("aaa" + n);
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  console.log("aaa" + slides[slideIndex - 1].style.display);
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";

  return slideIndex;
}
