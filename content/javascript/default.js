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

// based on the masonry design from https://css-tricks.com/a-lightweight-masonry-solution/

// function gridMasonry() {
//   let grids = document.getElementById("categories-grid");
//   if (
//     grids.length &&
//     getComputedStyle(grids[0]).gridTemplateRows !== "masonry"
//   ) {
//     grids = grids.map(grid => ({
//       _el: grid,
//       gap: parseFloat(getComputedStyle(grid).gridRowGap),
//       items: [...grid.childNodes].filter(c => c.nodeType === 1),
//       ncol: 0
//     }));
//
//     function layout() {
//       grids.forEach(grid => {
//         /* get the post relayout number of columns */
//         let ncol = getComputedStyle(grid._el).gridTemplateColumns.split(" ")
//           .length;
//
//         /* if the number of columns has changed */
//         if (grid.ncol !== ncol) {
//           /* update number of columns */
//           grid.ncol = ncol;
//
//           /* revert to initial positioning, no margin */
//           grid.items.forEach(c => c.style.removeProperty("margin-top"));
//
//           /* if we have more than one column */
//           if (grid.ncol > 1) {
//             grid.items.slice(ncol).forEach((c, i) => {
//               let prev_fin = grid.items[i].getBoundingClientRect()
//                   .bottom /* bottom edge of item above */,
//                 curr_ini = c.getBoundingClientRect()
//                   .top; /* top edge of current item */
//
//               c.style.marginTop = `${prev_fin + grid.gap - curr_ini}px`;
//             });
//           }
//         }
//       });
//     }
//
//     addEventListener(
//       "load",
//       e => {
//         layout(); /* initial load */
//         addEventListener("resize", layout, false); /* on resize */
//       },
//       false
//     );
//   }
// }

function highlightFeatured() {
  let featured = document.getElementsByClassName("featured");
  if (featured) {
    var i;
    for (i = 0; i <= featured.length; i++) {
      let ribbon = document.createElement("div");
      ribbon.classList.add("ribbon");

      let ribbonText = document.createElement("div");
      ribbonText.classList.add("ribbon-text");
      ribbonText.append("featured");

      ribbon.appendChild(ribbonText);
      featured[i].appendChild(ribbon);
    }
  }
}
// based on: https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb
// function resizeGridItem() {
//   grid = document.getElementsByClassName("categories-grid")[0];
//   console.log(grid);
//   card = document.querySelector(".card");
//   console.log(card);
//   rowHeight = parseInt(
//     window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
//   );
//   console.log(rowHeight);
//   rowGap = parseInt(
//     window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
//   );
//   console.log(rowGap);
//   rowSpan = Math.ceil(
//     (card.getBoundingClientRect().height + rowGap) / (rowHeight + rowGap)
//   );
//   console.log(rowSpan);
//   card.style.gridRowEnd = "span " + rowSpan;
// }
//
// function resizeAllGridItems() {
//   allItems = document.getElementsByClassName("card");
//   for (x = 0; x < allItems.length; x++) {
//     resizeGridItem(allItems[x]);
//   }
// }
//
// window.onload = resizeAllGridItems();
//
// window.addEventListener("resize", resizeAllGridItems);
//
// allItems = document.getElementsByClassName("card");
// for (x = 0; x < allItems.length; x++) {
//   imagesLoaded(allItems[x], resizeInstance);
// }
//
// function resizeInstance(instance) {
//   card = instance.elements[0];
//   resizeGridCard(card);
// }
