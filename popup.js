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
  let min = 'a'.charCodeAt();
  let max = 'z'.charCodeAt();
  let selectAcc = document.getElementById('acc');
  let selectRej = document.getElementById('rej');
  for (var i = min; i<=max; i++){
    var opt = document.createElement('option');
    opt.value = String.fromCharCode(i);
    opt.innerHTML = String.fromCharCode(i);
    selectAcc.appendChild(opt);
    selectRej.appendChild(opt);
  }
  chrome.storage.local.get(/* String or Array */["accept_hotkey",
                                                 "reject_hotkey"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    selectElement("acc", items["accept_hotkey"]);
    selectElement("rej", items["reject_hotkey"]);
  });
  console.log('`polis-moderator-hotkey` loaded successfully!');
  hotkeys('left, right', function (event, handler){
    switch (handler.key) {
      case 'left':
        console.log('accept button pressing...');
        try {
          document.querySelector("button:contains('accept')")[0].click();
        } catch {
          console.warn('accept button not found');
        }
        break;
      case 'right':
        console.log('reject button pressing...');
        try {
          document.querySelector("button:contains('reject')")[0].click();
        } catch {
          console.warn('reject button not found');
        }
        break;
      default: alert(event);
    }
  });
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
