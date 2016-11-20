function bin(element) {
  var module = $(element).closest( ".row" ).find( "a" ).text();
  $( "a:contains(" + module + ")" ).closest( ".panel" ).toggle(delay);
  rememberHidden(module);
}

function rememberHidden(module) {
  var modules = localStorage.getItem("hidden");
  if (modules == null) {
    modules = "";
    addBtnShowAll();
  } else {
    modules += " ";
  }
  modules += module;
  localStorage.setItem("hidden", modules);
}

function showAll() {
  var modules = localStorage.getItem("hidden");
  modules = modules.split(" ");
  for (var module in modules) {
    $( "a:contains(" + modules[module] + ")" ).closest( ".panel" ).toggle(1000);
  }
  localStorage.clear();
  $( "span:contains(Show all)" ).remove();
}

function addBtnShowAll() {
  var col = $( ".col-md-5:contains(Refresh Modules)" );
  var autoWidth = { "width": "auto" };
  col.css(autoWidth).addClass( "pull-right" );
  col.prev().css(autoWidth);
  col.children().prepend("<span><a onclick='showAll();'>Show all</a> &nbsp; </span>");
}
