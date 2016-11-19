function bin(element) {
  rememberHidden(element);
  $(element).parent().parent().parent().parent().parent().toggle(1000);
}

function rememberHidden(element) {
  var modules = localStorage.getItem("hidden");
  if (modules == null) {
    modules = "";
    $( ".col-md-5 > :contains(Refresh Modules)" ).parent().children().prepend("<a onclick='localStorage.clear();window.location.reload();'>Show all</a> &nbsp; ");
  } else {
    modules += " ";
  }
  modules += $(element).parent().parent().prev().children().text().trim();;
  localStorage.setItem("hidden", modules);
}
