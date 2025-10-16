console.log(chrome.storage.local);

const toggle = document.getElementById('advanced-mode-toggle');

chrome.storage.local.get('advancedMode', ({ advancedMode }) => {
    toggle.checked = !!advancedMode;
})

toggle.addEventListener('change', () => {
    chrome.storage.local.set({ advancedMode: toggle.checked }, () => {
        console.log('advancedMode is now', toggle.checked)

        if (toggle.checked) {
            setTimeout(() => {
                document.documentElement.style.display = 'none';
            }, 5000)
        }
    })
})