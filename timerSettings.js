document.addEventListener("click", function(e){
  e.preventDefault();
  if (e.target.id === "submit") {
    var color = document.getElementsByName('background-color')[0].value,
        font = document.getElementsByName('font-family')[0].value;
    chrome.storage.sync.set({
      "timerlook": {"backgroundColor":color, "fontFamily": font}
    }, function(o){console.log(o);});
  }
});
var init = (function(){
  chrome.storage.sync.get("timerlook", function(obj){
  var bgC = obj.timerlook.backgroundColor,
      txtF = obj.timerlook.fontFamily;
  document.getElementsByName('background-color')[0].value = bgC;
  document.getElementsByName('font-family')[0].value = txtF;
  });
})();
