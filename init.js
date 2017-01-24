var init = (function(){
  chrome.storage.sync.get("timerlook", function(obj){
  var bgC = obj.timerlook.backgroundColor;
  if (bgC !== undefined) {
    var bg = document.getElementById('textWrapper');
    if (bg != undefined) {
      bg.style.backgroundColor = bgC;
    }
  }
  var txtF = obj.timerlook.fontFamily;
  if (txtF !== undefined) {
    var txt = document.getElementById('progressText');
    if (txt != undefined) {
      txt.style.fontFamily = txtF;
    }
  }
  });
})();
chrome.storage.onChanged.addListener(function(changes, namespace) {
  window.location = window.location;
});
