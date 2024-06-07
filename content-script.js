if (window == top) {
  window.addEventListener('keyup', doKeyPress, false); //add the keyboard handler
}

trigger_key_acc = 71; // g key
trigger_key_rej = 72; // h key
function doKeyPress(e){
  chrome.storage.local.get(["accept_hotkey"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    if (items["reject_hotkey"] !== undefined) {
      trigger_key_acc = items["accept_hotkey"].charCodeAt();
    }
  });
  chrome.storage.local.get(["reject_hotkey"], function(items){
    //  items = [ { "phasersTo": "awesome" } ]
    if (items["reject_hotkey"] !== undefined) {
      trigger_key_rej = items["reject_hotkey"].charCodeAt();
    }
  });
	if (e.keyCode == trigger_key_acc){
		//alert('Hi!')
    console.log('accept button pressing...');
    try {
      Array.from(document.querySelectorAll("button"))
      .filter(el => el.textContent.startsWith('accept'))[0]
      .click();
    } catch {
      console.warn('accept button not found');
    }
	} else if (e.keyCode == trigger_key_rej){
    console.log('reject button pressing...');
    try {
      Array.from(document.querySelectorAll("button"))
      .filter(el => el.textContent.startsWith('reject'))[0]
      .click();
    } catch {
      console.warn('reject button not found');
    }
  }
}
