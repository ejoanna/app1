// JavaScript Document
function onBatteryStatus(info) {
    // Handle the online event
   alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
}
function verEstatusBateria(){
		window.addEventListener("batterystatus", onBatteryStatus, false);

}