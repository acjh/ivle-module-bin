var run_once = function injectJS() {
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = chrome.extension.getURL("ivle-module-bin.js");
  document.getElementsByTagName("head")[0].appendChild(script);
}();

var run_once = function binHiddenModules() {
  var modules = getHiddenModules();
  if (modules != null) {
    addBtnShowAll();
    togglePanels(modules, delay=0);
  }
}();

var run_once = function addBtnBin() {
  var selector = ".panel-body > .panel > .panel-heading > .row > .col-md-5 > .pull-right";
  $( selector ).prepend("<a onclick='bin(this);'><span class='glyphicon glyphicon-trash'></span></a> &nbsp; ");
}();
