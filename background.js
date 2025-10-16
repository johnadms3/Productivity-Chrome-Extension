// console.log("Hi");

const alarmInput = document.querySelector("#alarm_box") // the text input field for the user's alarm duration
const productivityInput = document.querySelector("#message_box") // the text input field for the message to keep them productive.

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById("submit");
    if (button) {      
// Creating an alarm --> chrome.alarms.create(name (optional), alarmInfo )
// delay timer -> delayInMinutes
button.addEventListener("click", function(event) {
event.preventDefault();
console.log("Success");

const delay = parseFloat(alarmInput.value)
chrome.alarms.create("getBackToWork", { delayInMinutes: delay});

const productivityMessage = productivityInput.value;
chrome.storage.local.set({ productivityMessage });

alert("Done!")
window.close();
        })
    }
});

// Listening for alarm --> chrome.alarms.onAlarm.addListener()
chrome.alarms.onAlarm.addListener(function(alarm) {
if (alarm.name === "getBackToWork") {
chrome.storage.local.get("productivityMessage", function(data) {
const notificationOptions = {
type: "basic",
iconUrl: "images/G3LpSixWkAAiaOl.jpeg",
title: "GET TO IT!!!",
message: data.productivityMessageMessage
};
chrome.notifications.create(notificationOptions);
});
}
});


// Blank white page --> document.documentElement.style.display = 'none';
// function removeContents() {
//     document.documentElement.style.display = 'none';
// }

// removeContents();


// Undoing blank page --> document.documentElement.style.display = '';
