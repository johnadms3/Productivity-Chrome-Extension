const lockBtn = document.getElementById('submit');
const alarmInput = document.getElementById("alarm_box");


lockBtn.addEventListener('click', () => {
    const delay = parseFloat(alarmInput.value);
    chrome.alarms.create('lockTab', { delayInMinutes: delay});
        alert("Alarm created!");
    console.log("Alarm created!");
})