// popup.js
function selectElement(id, valueToSelect) {
    let element = document.getElementById(id);
    element.value = valueToSelect;
}
function getElementValue(id) {
    let element = document.getElementById(id);
    return element.value;
}
document.addEventListener('DOMContentLoaded', function () {
  // Add your popup logic here
  const min = 'a'.charCodeAt();
  const max = 'z'.charCodeAt();
  let selectAcc = document.getElementById('acc');
  for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = String.fromCharCode(i);
    opt.innerHTML = String.fromCharCode(i);
    selectAcc.appendChild(opt);
  }
  let selectRej = document.getElementById('rej');
  for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = String.fromCharCode(i);
    opt.innerHTML = String.fromCharCode(i);
    selectRej.appendChild(opt);
  }
  chrome.storage.local.get(["accept_hotkey",
                            "reject_hotkey"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    if (items["accept_hotkey"] !== undefined) {
        selectElement("acc", items["accept_hotkey"]);
    }
    if (items["reject_hotkey"] !== undefined) {
        selectElement("rej", items["reject_hotkey"]);
    }
  });
  console.log('`polis-moderator-hotkey` loaded successfully!');
});

function storageSave(key, value) {
  chrome.storage.local.set({ key: value });
}
function doSomething() {
  storageSave(key, getElementValue("acc"));
}
function doSomething2() {
  storageSave(key, getElementValue("rej"));
}
