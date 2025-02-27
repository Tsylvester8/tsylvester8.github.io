function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "mobileNavBar") {
      x.className += " responsive";
    } else {
      x.className = "mobileNavBar";
    }
  }