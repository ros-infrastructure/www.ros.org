function openCloseDotsMenu() {
  let dots = document.getElementById("submenu-dots");
  let topDot = document.getElementById("dot-top");
  let bottomDot = document.getElementById("dot-bottom");
  let classes = dots.classList;
  let dotTopClasses = topDot.classList;
  let dotBottomClasses = bottomDot.classList;

  if (classes.contains("hidden")) {
    classes.remove("hidden");
    classes.add("show");

    dotTopClasses.add("hidden");
    dotTopClasses.remove("show");

    dotBottomClasses.add("hidden");
    dotBottomClasses.remove("show");
  } else {
    classes.remove("show");
    classes.add("hidden");

    dotTopClasses.add("show");
    dotTopClasses.remove("hidden");

    dotBottomClasses.add("show");
    dotBottomClasses.remove("hidden");
  }
}
