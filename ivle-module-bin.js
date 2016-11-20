function bin(element) {
  rememberHidden(element);
  $(element).parent().parent().parent().parent().parent().toggle(1000);
}

function rememberHidden(element) {
  var modules = localStorage.getItem("hidden");
  if (modules == null) {
    modules = "";
    $( ".col-md-5 > :contains(Refresh Modules)" ).parent().children().prepend("<a onclick='showAll();'>Show all</a> &nbsp; ");
  } else {
    modules += " ";
  }
  modules += $(element).parent().parent().prev().children().text().trim();;
  localStorage.setItem("hidden", modules);
}

function showAll() {
  var modules = localStorage.getItem("hidden");
  modules = modules.split(" ");
  for (var module in modules) {
    $( ".col-md-7 > :contains(" + modules[module] + ")" ).parent().parent().parent().parent().toggle(1000);
  }
  localStorage.clear();
  $( "a:contains(Show all)" ).remove().parent().children().prepend("<a onclick='showAll();'>Show all</a> &nbsp; ");
}