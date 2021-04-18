window.onload = function() {stickyNav()};
  
  // nav bar
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;
  
  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

  // night mode
  var onOffBtn = document.querySelector("#onOff");

  //var viewState = document.querySelector()
  onOffBtn.addEventListener("click", changeState); 
  
  function changeState (e) {
    var navLinks = document.querySelectorAll("#navbar a");
    var githubLogo = document.querySelectorAll(".github");
    if (e.target.value == "light") {
        e.target.value = "dark";
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "white";
        }
        for (var i = 0; i < githubLogo.length; i++) {
            githubLogo[i].style.filter = "invert(100%)"
        }
        document.querySelector("body").style = "background-color: #222; color: white;";
        document.querySelector("#navbar").style.backgroundColor = "#222";
        document.querySelector("#biography").style = "background-color: rgba(50, 50, 255, 30%); border: solid rgba(50, 100, 255, 30%) 0.2rem;";
        document.querySelector("#work").style = "background-color: rgba(50, 255, 50, 30%);border: solid rgba(50, 255, 100, 30%) 0.2rem;";
        document.querySelector("#ping").style = "background-color: rgba(255, 50, 50, 30%); border: solid rgba(255, 100, 50, 30%) 0.2rem;";
        document.querySelector(".button-primary").innerHTML = "light";
        document.querySelector(".button-primary").style = "color: rgba(50, 50, 50, 85%); background-color: #EEE; border: solid ###FFF 0.2rem";
        document.querySelector(".ping").style = "filter: invert(100%)";
    }
    else {
        e.target.value = "light";
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = "#222"; 
        }
        for (var i = 0; i < githubLogo.length; i++) {
            githubLogo[i].style.filter = "invert(0)"
        }
        document.querySelector("body").style = "background-color: white; color: #222;";
        document.querySelector("#navbar").style.backgroundColor = "white";
        document.querySelector("#biography").style = "background-color: rgba(50, 50, 255, 15%); border: solid rgba(50, 100, 255, 15%) 0.2rem;";
        document.querySelector("#work").style = "background-color: rgba(50, 255, 50, 15%);border: solid rgba(50, 255, 100, 15%) 0.2rem;";
        document.querySelector("#ping").style = "background-color: rgba(255, 50, 50, 15%); border: solid rgba(255, 100, 50, 15%) 0.2rem;";
        document.querySelector(".button-primary").innerHTML = "dark";
        document.querySelector(".button-primary").style = "color: #EEE; background-color: rgba(50, 50, 50, 85%); border: solid rgba(50, 50, 50, 85%) 0.2rem";
        document.querySelector(".ping").style = "filter: invert(0)";
    }
  }