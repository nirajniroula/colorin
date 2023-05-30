// Global variable to store the selected element ID
let selectedElementId = null;

// Send message to the content script to change the color of the selected element
function changeElementColor(color) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { 
      action: "changeColor",
      elementId: selectedElementId,
      color: color
    });
  });
}

// Listen for color picker changes and change the color of the selected element
document.getElementById("colorPicker").addEventListener("change", function (event) {
  const color = event.target.value;
  changeElementColor(color);
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "elementSelected") {
    selectedElementId = request.elementId;
  }
});
