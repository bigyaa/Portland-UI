function toggleHeaderMenu() {
  let headerBottomMenu = document.getElementById("menuHeaderBottom");

  if (headerBottomMenu.style.display === "none") {
    headerBottomMenu.style.display = "block";
  } else {
    headerBottomMenu.style.display = "none";
  }
}
