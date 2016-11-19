function injectJS() {
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = chrome.extension.getURL("bin_update.js");
  document.getElementsByTagName("head")[0].appendChild(script);
}

function insertBinIcons() {
  $( ".panel-body > .panel > .panel-heading > .row > .col-md-5" ).children().prepend("<a onclick='bin(this);'><span class='glyphicon glyphicon-trash'></span></a> &nbsp; ");
}

injectJS();
insertBinIcons();
