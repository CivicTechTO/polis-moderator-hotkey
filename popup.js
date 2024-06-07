// popup.js
document.addEventListener('DOMContentLoaded', function () {
  // Add your popup logic here
  console.log('`polis-moderator-hotkey` loaded successfully!');
  hotkeys('left, right', function (event, handler){
  switch (handler.key) {
    case 'left':
      document.querySelector("button:contains('accept')")[0].click();
      break;
    case 'right':
      document.querySelector("button:contains('reject')").click();
      break;
    default: alert(event);
  }
});
});
