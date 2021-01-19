module.exports.function = function showMenu (askForMenu) {
  let menuResponse = askForMenu;
  if (menuResponse === "to eat") return "something to eat"
  else return menuResponse;
}
