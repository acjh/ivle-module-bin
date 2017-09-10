var run_once = function binHiddenModules() {
  var modules = getHiddenModules();
  if (modules != null) {
    addBtnShowAll();
    togglePanels(modules, delay=0);
  }
}();

var run_once = function addBtnBin() {
  var selector = ".panel-body > .panel > .panel-heading > .row > .col-md-5 > .pull-right";
  var popover = " " + "data-toggle='popover' data-placement='bottom' data-content='Bin' data-trigger='hover'";
  var icon = "<span class='glyphicon glyphicon-trash'></span>";
  $( selector ).prepend("<a class='module-bin'" + popover + ">" + icon + "</a> &nbsp; ");
  $('.module-bin').click(bin);
  $( 'a[data-content="Bin"]').popover();
}();
