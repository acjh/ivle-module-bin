function bin(element) {
  rememberHidden(element);
  $(element).parent().parent().parent().parent().parent().remove();
}

function rememberHidden(element) {
  var modules = localStorage.getItem("hidden");
  if (modules == null) {
    modules = "";
  } else {
    modules += " ";
  }
  modules += $(element).parent().parent().prev().children().text().trim();;
  localStorage.setItem("hidden", modules);
}
