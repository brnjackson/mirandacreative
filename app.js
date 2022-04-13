let expand = document.querySelectorAll(".expand");
let collapse = document.querySelectorAll(".collapse");

expand.forEach((element) => {
  element.addEventListener("click", () => {
    switch (element.id) {
      case "1 expand":
        document.querySelector("#text_hidden1").style.display = "block";
        document.querySelector("#collapse1").style.display = "block";      
        element.style.display = "none";
        document.querySelector(".card1").style.zIndex = "100";
        break;
      case "2 expand":
        document.getElementById("text_hidden2").style.display = "block";
        document.querySelector("#collapse2").style.display = "block";
        element.style.display = "none";
        document.querySelector(".card2").style.zIndex = "170";
        break;
      case "3 expand":
        document.getElementById("text_hidden3").style.display = "block";
        document.querySelector("#collapse3").style.display = "block";
        element.style.display = "none";
        document.querySelector(".card3").style.zIndex = "190";
        break;
      case "4 expand":
        document.getElementById("text_hidden4").style.display = "block";
        document.querySelector("#collapse4").style.display = "block";
        element.style.display = "none";
        document.querySelector(".card4").style.zIndex = "210";
        break;
      case "5 expand":
        document.getElementById("text_hidden5").style.display = "block";
        document.querySelector("#collapse5").style.display = "block";
        element.style.display = "none";
        document.querySelector(".card5").style.zIndex = "230";
        break;
      case "6 expand":
        document.getElementById("text_hidden6").style.display = "block";
        document.querySelector("#collapse6").style.display = "block";
        element.style.display = "none";
        document.querySelector(".card6").style.zIndex = "250";
        break;
    }
  });
});

collapse.forEach((element) => {
  element.addEventListener("click", () => {
    switch (element.id) {
      case "collapse1":
        document.getElementById("text_hidden1").style.display = "none";
        element.style.display = "none";
        document.getElementById("1 expand").style.display = "block";
        document.querySelector(".card1").style.zIndex = "initial";
        break;
      case "collapse2":
        document.getElementById("text_hidden2").style.display = "none";
        element.style.display = "none";
        document.getElementById("2 expand").style.display = "block";
        document.querySelector(".card2").style.zIndex = "initial";
        break;
      case "collapse3":
        document.getElementById("text_hidden3").style.display = "none";
        element.style.display = "none";
        document.getElementById("3 expand").style.display = "block";
        document.querySelector(".card3").style.zIndex = "initial";
        break;
      case "collapse4":
        document.getElementById("text_hidden4").style.display = "none";
        element.style.display = "none";
        document.getElementById("4 expand").style.display = "block";
        document.querySelector(".card4").style.zIndex = "initial";
        break;
      case "collapse5":
        document.getElementById("text_hidden5").style.display = "none";
        element.style.display = "none";
        document.getElementById("5 expand").style.display = "block";
        document.querySelector(".card5").style.zIndex = "initial";
        break;
      case "collapse6":
        document.getElementById("text_hidden6").style.display = "none";
        element.style.display = "none";
        document.getElementById("6 expand").style.display = "block";
        document.querySelector(".card6").style.zIndex = "initial";
        break;
    }
  });
});
