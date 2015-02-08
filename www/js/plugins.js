// JavaScript Document
function onBatteryStatus(info) {
    // Handle the online event
	alert("2")
   alert("Level: " + info.level + " isPlugged: " + info.isPlugged);
}
function verEstatusBateria(){
	alert("1")
		window.addEventListener("batterystatus", this.onBatteryStatus, false);
	alert("3")	

}