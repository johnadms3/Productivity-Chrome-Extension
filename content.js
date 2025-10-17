chrome.storage.local.get('advancedMode', (result) => {
    if (result.advancedMode) {
        document.documentElement.style.display = "none";
        console.log("Page hidden!");
    } else {
        console.log('Page visible!');
    }
})


chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === 'lockTab') {
        // document.documentElement.style.display = "none";
        const imgURL = chrome.runtime.getURL("assets/RabbitTime.jpeg");
        document.documentElement.innerHTML = `
  <body style = "margin: 0; display: flex; justify-content: center; align-items: center; height: 100vh; background: black;">
    <img src = "${imgURL}" alt = "Get Back to Work!" style = "max-width: 100%; height: auto;" />
  </body>
`;
//  alert(`${productivityInput.value}`);
    }
})