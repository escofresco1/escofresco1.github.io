var targetID = "rbxLuanchString"; 
var hrefTargetID = "rbxLuanchHref";
var beforeText = "Game ID: ";

var c = "+";

var clientURIName = "roblox-player"; 
var clientURICall = clientURIName + ":1"; 

var launchType = "play"; 
var launchMode = "launchmode:" +  launchType; 

var gameInfoString = "0FD4175F7BC56B5FF3A466A219CEA086E04F065F4DEC3C596D0678DEF98982ABA024575B33314A683568DEC11F4A7E40FE2EDC8343D50FF09C72B95BBCB23952D951897A99BAF0DB94997C5B8BF3C834E1F3FAB76535C59E09A82E943F2B331F617212335328C9791FE8D10B1D3D1B028E2C7A95EA301CED8682B62F19F981DB1819CFE6"; 
var gameInfo = "gameinfo:" + gameInfoString;

var newDate = new Date(); 
var launchTimeString = newDate.getTime();
var launchTime = "luanchtime:" + launchTimeString;

var placeIDString = document.getElementById(targetID).innerHTML;
var placeID = placeIDString.substring(2);
var placeLaunchURL ="https%3A%2F%2Fassetgame.roblox.com%2Fgame%2FPlaceLauncher.ashx%3Frequest%3DRequestGame%26placeId%3D"+ placeID +"%26isPartyLeader%3Dfalse";
var placeLauncherUrl = "placelauncherurl:" + placeLaunchURL;

var launchLink = clientURICall + c + launchMode + c + gameInfo + c + launchTime + c + placeLauncherUrl; 

document.getElementById(hrefTargetID).href = launchLink;
document.getElementById(hrefTargetID).innerHTML = beforeText + placeID;
window.location.href = launchLink;
window.location = $("a").attr("href");