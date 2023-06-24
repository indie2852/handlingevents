document.addEventListener("DOMContentLoaded", function() {
  var boxes = document.getElementsByClassName("box");

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function() {
      this.classList.toggle("pink");
    });
  }
});

