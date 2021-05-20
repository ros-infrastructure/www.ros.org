// width debugger

function whatIsTooBig() {
  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });
}

function closeMenus(menuId, event) {
  let dots = document.getElementById("submenu-dots");
  let topDot = document.getElementById("dot-top");
  let bottomDot = document.getElementById("dot-bottom");
  let classes = dots.classList;
  let dotTopClasses = topDot.classList;
  let dotBottomClasses = bottomDot.classList;

  let aboutLink = document.getElementById("about");
  let aboutLinkClasses = aboutLink.classList;
  let aboutList = document.getElementById("submenu-about");
  let aboutClasses = aboutList.classList;

  // stop checking in parent elements further up the DOM
  window.event.stopPropagation();
  const menuIds = ["about", "submenu-about", "dropdown-dots", "submenu-dots"];
  if (menuIds.includes(menuId.id)) {
    return;
  } else if (menuId.id == "dropdown-dots") {
    return;
  } else {
    classes.remove("show");
    classes.add("hidden");

    dotTopClasses.remove("invisible");
    dotTopClasses.add("visible");

    dotBottomClasses.remove("invisible");
    dotBottomClasses.add("visible");

    aboutClasses.add("hidden");
    aboutClasses.remove("show");

    aboutLinkClasses.remove("show-after");
    aboutLinkClasses.add("hide-after");
  }
}

function openCloseDotsMenu() {
  let dots = document.getElementById("submenu-dots");
  let topDot = document.getElementById("dot-top");
  let bottomDot = document.getElementById("dot-bottom");
  let classes = dots.classList;
  let dotTopClasses = topDot.classList;
  let dotBottomClasses = bottomDot.classList;
  let aboutLink = document.getElementById("about");
  let aboutLinkClasses = aboutLink.classList;
  let aboutList = document.getElementById("submenu-about");
  let aboutClasses = aboutList.classList;

  if (classes.contains("hidden")) {
    classes.remove("hidden");
    classes.add("show");

    dotTopClasses.add("invisible");
    dotTopClasses.remove("visible");

    dotBottomClasses.add("invisible");
    dotBottomClasses.remove("visible");

    aboutLinkClasses.remove("show-after");
    aboutLinkClasses.add("hide-after");

    aboutClasses.add("hidden");
    aboutClasses.remove("show");
  } else {
    classes.remove("show");
    classes.add("hidden");

    dotTopClasses.remove("invisible");
    dotTopClasses.add("visible");

    dotBottomClasses.add("visible");
    dotBottomClasses.remove("invisible");
  }
}

function openCloseAbout() {
  let aboutList = document.getElementById("submenu-about");
  let classes = aboutList.classList;
  let dots = document.getElementById("submenu-dots");
  let topDot = document.getElementById("dot-top");
  let bottomDot = document.getElementById("dot-bottom");
  let dotsMenuClasses = dots.classList;
  let dotTopClasses = topDot.classList;
  let dotBottomClasses = bottomDot.classList;
  let aboutLink = document.getElementById("about");
  let aboutLinkClasses = aboutLink.classList;

  if (classes.contains("hidden")) {
    classes.remove("hidden");
    classes.add("show");

    aboutLinkClasses.remove("hide-after");
    aboutLinkClasses.add("show-after");

    dotsMenuClasses.remove("show");
    dotsMenuClasses.add("hidden");

    dotTopClasses.remove("invisible");
    dotTopClasses.add("visible");

    dotBottomClasses.remove("invisible");
    dotBottomClasses.add("visible");
  } else {
    classes.remove("show");
    classes.add("hidden");
    aboutLinkClasses.remove("show-after");
    aboutLinkClasses.add("hide-after");
  }
}

function openCloseCategories() {
  let plusList = document.getElementById("plus");
  let plusClasses = plusList.classList;
  let minusList = document.getElementById("minus");
  let minusClasses = minusList.classList;
  let topItem = document.getElementById("top-item");
  let topItemClasses = topItem.classList;
  let expandList = document.getElementById("menu-expanded");
  let expandClasses = expandList.classList;

  if (minusClasses.contains("hidden")) {
    plusClasses.remove("show-grid");
    plusClasses.add("hidden");

    minusClasses.remove("hidden");
    minusClasses.add("show-grid");

    topItemClasses.add("top-item-text-color");

    expandClasses.remove("hidden");
    expandClasses.add("show-grid");
  } else {
    plusClasses.remove("hidden");
    plusClasses.add("show-grid");

    minusClasses.remove("show-grid");
    minusClasses.add("hidden");

    topItemClasses.remove("top-item-text-color");

    expandClasses.remove("show-grid");
    expandClasses.add("hidden");
  }
}

window.onload = () => {
  // add ribbon to `.featured` grid items
  let featured = document.getElementsByClassName("featured");
  if (featured) {
    let i;
    for (i = 0; i < featured.length; i++) {
      let ribbon = document.createElement("div");
      ribbon.classList.add("ribbon");

      let ribbonText = document.createElement("div");
      ribbonText.classList.add("ribbon-text");
      ribbonText.append("featured");

      ribbon.appendChild(ribbonText);
      featured[i].appendChild(ribbon);
    }
  }

  // initialize grid masonry
  const grid = document.querySelector(".categories-grid");
  console.log(grid);
  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    horizontalOrder: false
  });
};
