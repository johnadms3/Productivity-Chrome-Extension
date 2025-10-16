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
        document.documentElement.style.display = "none";
    }
})