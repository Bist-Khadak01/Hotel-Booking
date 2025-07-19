const menuButton = document.getElementById("dropdown-btn")
const menuItems = document.getElementById("dropdown-items")
menuItems.setAttribute("hidden", "")

menuButton.addEventListener("click", () => {
  if (menuItems.hasAttribute("hidden")) {
    menuItems.removeAttribute("hidden")
  } else {
    menuItems.setAttribute("hidden", "")
  }
})

Array.from(menuItems.children).forEach((element) => {
  element.addEventListener("click", () => {
    menuItems.setAttribute("hidden", "")
    menuButton.firstElementChild.innerHTML = element.innerHTML
  })
})

document.addEventListener("click", (event) => {
  if (!menuButton.contains(event.target) && !menuItems.contains(event.target)) {
    menuItems.setAttribute("hidden", "")
  }
})

const menuButtonKid = document.getElementById("dropdown-btn-kids")
const menuItemsKid = document.getElementById("dropdown-items-kids")
menuItemsKid.setAttribute("hidden", "")

menuButtonKid.addEventListener("click", () => {
  if (menuItemsKid.hasAttribute("hidden")) {
    menuItemsKid.removeAttribute("hidden")
  } else {
    menuItemsKid.setAttribute("hidden", "")
  }
})

Array.from(menuItemsKid.children).forEach((element) => {
  element.addEventListener("click", () => {
    menuItemsKid.setAttribute("hidden", "")
    menuButtonKid.firstElementChild.innerHTML = element.innerHTML
  })
})

document.addEventListener("click", (event) => {
  if (
    !menuButtonKid.contains(event.target) &&
    !menuItemsKid.contains(event.target)
  ) {
    menuItemsKid.setAttribute("hidden", "")
  }
})
