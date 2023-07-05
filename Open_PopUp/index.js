function myFunction() {
    var popup = document.getElementById("mypopup");
    popup.classList.toggle("fade");

    var insiedBox = document.getElementsByClassName("inside-box")[0];
    insiedBox.classList.toggle("blur-filter");
  }