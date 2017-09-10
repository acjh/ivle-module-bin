/* 'onclick' functions */

function bin() {
  var module = $(this).closest( ".row" ).find( "a" ).text();
  togglePanel(module, delay=1000);
  rememberHiddenModule(module);
}

function showAll() {
  var modules = getHiddenModules();
  togglePanels(modules, delay=1000);
  clearLocalStorage();
  removeBtnShowAll();
}

/* Helper functions */

function addBtnShowAll() {
  var col = $( ".col-md-5:contains(Refresh Modules)" );
  var autoWidth = { "width": "auto" };
  col.css(autoWidth).addClass( "pull-right" );
  col.prev().css(autoWidth);
  col.children().prepend("<span><a class='module-show-all'>Show all</a> &nbsp; </span>");
  $('.module-show-all').click(showAll);
  return "";
}

function clearLocalStorage() {
  localStorage.clear();
}

function getHiddenModules() {
  return localStorage.getItem("hidden");
}

function setHiddenModules(modules) {
  localStorage.setItem("hidden", modules);
}

function rememberHiddenModule(module) {
  var modules = getHiddenModules();
  modules = (modules == null) ? addBtnShowAll() : (modules + " ");
  modules += module;
  setHiddenModules(modules);
}

function removeBtnShowAll() {
  $( "span:contains(Show all)" ).remove();
}

function togglePanel(module, delay) {
  $( "a:contains(" + module + ")" ).closest( ".panel" ).toggle(delay);
}

function togglePanels(modules, delay) {
  modules.split(" ").map(function(module) { togglePanel(module, delay) });
}
