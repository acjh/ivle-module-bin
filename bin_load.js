function injectJS() {
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = chrome.extension.getURL("bin_update.js");
  document.getElementsByTagName("head")[0].appendChild(script);
}

function binPreviouslyHidden() {
  var modules = localStorage.getItem("hidden");
  if (modules != null) {
    $( ".col-md-5 > :contains(Refresh Modules)" ).parent().children().prepend("<a onclick='localStorage.clear();window.location.reload();'>Show all</a> &nbsp; ");
    modules = modules.split(" ");
    for (var module in modules) {
      $( ".col-md-7 > :contains(" + modules[module] + ")" ).parent().parent().parent().parent()[0].remove()
    }
  }
}

function insertBinIcons() {
  $( ".panel-body > .panel > .panel-heading > .row > .col-md-5" ).children().prepend("<a onclick='bin(this);'><span class='glyphicon glyphicon-trash'></span></a> &nbsp; ");
}

injectJS();
binPreviouslyHidden();
insertBinIcons();
