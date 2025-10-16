console.log("Hi");

const alarmInput = document.querySelector("#alarm_box") // the text input field for the user's alarm duration
const productivityInput = document.querySelector("#message_box") // the text input field for the message to keep them productive.

const button = document.getElementById("submit");
// const alarmForm = document.getElementById("productivity-form");
// productivity-form.addEventListener('submit', async(event)=>{
//     event.preventDefault();
// })



// Creating an alarm --> chrome.alarms.create(name (optional), alarmInfo )
// delay timer -> delayInMinutes


// alarmForm.addEventListener("submit", () => alert('Done!'));
button.addEventListener('click', function(event) {
event.preventDefault();
console.log("Success");

alert("Done!")
const productivityMessage = document.getElementById("productivityInput").value;

chrome.alarms.create("getBackToWork", { delayInMinutes: alarmInput.value});
chrome.storage.local.set({ productivityMessage });

window.close();
});

// Listening for alarm --> chrome.alarms.onAlarm.addListener()
chrome.alarms.onAlarm.addListener(function(alarm) {
if (alarm.name === "getBackToWork") {
chrome.storage.local.get(productivityMessage, function(data) {
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
