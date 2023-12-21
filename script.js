

document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcomeMessage");
  
    // Zeige die Willkommensnachricht an
    welcomeMessage.classList.add("show");
  
    // Verberge die Willkommensnachricht nach 3 Sekunden
    setTimeout(function () {
      welcomeMessage.classList.remove("show");
    }, 2500);
  });

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      var navi = document.getElementById("navi");
      navi.style.display = "flex";
    }, 3000);
  });

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      var catBoxMain = document.getElementById("cat-box-main");
      catBoxMain.style.display = "flex";
    }, 3000);
  }); 

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      var sliderContainer = document.getElementById("slider-box");
      sliderContainer.style.display = "flex";
    }, 4000);
  });


  function kosVerschieben(){
    window.scrollTo({
        top:700,
        behavior:'smooth'
    })
  }

