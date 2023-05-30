// Apply dotted border to hovered elements
document.addEventListener("mouseover", function(event) {
    const target = event.target;
    target.style.border = "2px dotted red";
  });
  
  // Remove dotted border when mouse leaves the element
//   document.addEventListener("mouseout", function(event) {
//     const target = event.target;
//     target.style.border = "";
//   });
  
  // Add event listener for click to select the element and show color picker
  document.addEventListener("click", function (event) {
    const target = event.target;
    target.style.border = "10px solid blue";
    
    // Send message to the extension with the selected element details
    chrome.runtime.sendMessage({ 
      action: "elementSelected",
      elementId: target.id
    });
  });
  