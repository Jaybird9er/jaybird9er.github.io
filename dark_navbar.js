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
    if (e.target.value == "light") {
        e.target.value = "dark";
        for (var i = 0; i < navLinks.length; i++)
            navLinks[i].style.color = "white";
        document.querySelector("body").style = "background-color: #222; color: white;";
        document.querySelector("#navbar").style.backgroundColor = "#222";
        document.querySelector("#biography").style = "background-color: rgba(50, 50, 255, 30%); border: solid rgba(50, 100, 255, 30%) 0.2rem;";
    }
    else {
        e.target.value = "light";
        for (var i = 0; i < navLinks.length; i++)
            navLinks[i].style.color = "#222";
        document.querySelector("body").style = "background-color: white; color: #222;";
        document.querySelector("#navbar").style.backgroundColor = "white";
        document.querySelector("#biography").style = "background-color: rgba(50, 50, 255, 15%); border: solid rgba(50, 100, 255, 15%) 0.2rem;";

    }
  }