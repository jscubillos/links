function toggleTheme() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = html.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Perfil - Light Mode")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto do Perfil - Dark Mode")
  }
}
