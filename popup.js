const lockBtn = document.getElementById('submit');
const alarmInput = document.getElementById("alarm_box");
const productivityInput = document.getElementById("message_box");

lockBtn.addEventListener('click', () => {
    const delay = parseFloat(alarmInput.value);
    chrome.alarms.create('lockTab', { delayInMinutes: delay });
    setTimeout(()=> {alert(productivityInput.value)}, delay);
    console.log("Alarm created!");
})