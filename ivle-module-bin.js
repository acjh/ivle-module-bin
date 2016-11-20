function bin(element) {
  rememberHidden(element);
  $(element).parent().parent().parent().parent().parent().toggle(1000);
}

function rememberHidden(element) {
  var modules = localStorage.getItem("hidden");
  if (modules == null) {
    modules = "";
    addBtnShowAll();
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

function addBtnShowAll() {
  var col = $( ".col-md-5:contains(Refresh Modules)" );
  var autoWidth = { "width": "auto" };
  col.css(autoWidth).addClass( "pull-right" );
  col.prev().css(autoWidth);
  col.children().prepend("<span><a onclick='showAll();'>Show all</a> &nbsp; </span>");
}
