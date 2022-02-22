
let divStatus;
let divPlanetListBlocks;
let divPlanetListEnergy;
let divLog;
let interv = null;
let loopIsBusy = false;

const emptyAddress = "0x0000000000000000000000000000000000000000";

const blockCaptureWaitCount = 2050; // how many blocks we have to wait after invasion before we can capture it

let planetsWaitingForBlocks = [];
let planetsWaitingForEnergy = [];
let planetsInvaded = [];
let planetsCaptured = [];

const CAPTURE_ZONE_PLANET_LEVEL_SCORE = [
  0,
  0,
  250_000,
  500_000,
  750_000,
  1_000_000,
  10_000_000,
  20_000_000,
  50_000_000,
  100_000_000
];
const minInvadePlanetLvl = 2;

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function planetWasAlreadyInvaded(p) {
	return p.invader !== emptyAddress;
}

function planetWasAlreadyCaptured(p) {
	return p.capturer !== emptyAddress;
}

function planetCaptureBlockCountReady(p) {
	return (df.ethConnection.blockNumber - p.invadeStartBlock) > blockCaptureWaitCount;
}

function planetIsInsideCaptureZone(p, captureZones) {
	if (!p.location || !p.location.coords) return false;
	for (let zone of captureZones) {
		let zCoords = zone.coords;
		let zRadius = zone.radius;
		let x = zCoords.x - p.location.coords.x;
		let y = zCoords.y - p.location.coords.y;
		let dist = Math.sqrt(x*x + y*y);
		if (dist < zRadius) return true;
	}
	return false;
}

function htmlBut(str, onClickStr) {
	return "<button style=\"color:#4DF;\" onclick=\""+onClickStr+"\">"+str+"</button>";
}

function planetBut(p) {
	return htmlBut(p.locationId.substr(0, 8), "ui.centerLocationId('"+p.locationId+"');");
}

let capturingPlanets = {};
async function capturePlanet(p) {
	if (capturingPlanets[p.locationId]) return;
	capturingPlanets[p.locationId] = true;
	while (true) {
		divLog.innerHTML += "capturing "+planetBut(p)+" ...<br>";
		try {
			await df.capturePlanet(p.locationId);
			planetsCaptured.push(p);
			divLog.innerHTML += "captured "+planetBut(p)+"!<br>";
			return;
		} catch(err) { console.log("autoInvadeAndCapture plugin, err while capturing", err); }
		await sleep(1000*60*2); // sleep 2 min
	}
}

async function loop() {
	if (loopIsBusy) return;
	loopIsBusy = true;
	planetsWaitingForBlocks = [];
	planetsWaitingForEnergy = [];
	let myPlanets = df.getMyPlanets();
	let captureZones = df.getCaptureZones();
	for (let p of myPlanets) {
		if (p.planetLevel < minInvadePlanetLvl) continue;
		if (!p.transactions || p.transactions.length > 0) continue; // unconfirmed stuff in progress
		if (planetWasAlreadyCaptured(p)) continue;
		if (planetWasAlreadyInvaded(p)) {
			if (!planetCaptureBlockCountReady(p)) {
				planetsWaitingForBlocks.push(p);
				continue;
			}
			if (p.energy/p.energyCap < 0.82) { // not enough energy
				planetsWaitingForEnergy.push(p);
				continue;
			}
			capturePlanet(p);
			await sleep(3000);
		}
		else if (planetIsInsideCaptureZone(p, captureZones)) {
			divLog.innerHTML += "invading "+planetBut(p)+" ...<br>";
			try {
				await df.invadePlanet(p.locationId);
				planetsInvaded.push(p);
				divLog.innerHTML += "invaded "+planetBut(p)+"!<br>";
				await sleep(3000);
			} catch(err) { console.log("autoInvadeAndCapture plugin, err while invading", err); }
		}
	}
	divStatus.innerHTML = "";
	divStatus.innerHTML += "waitingForBlocks: "+planetsWaitingForBlocks.length;
	divStatus.innerHTML += "&nbsp;&nbsp;&nbsp;  waitingForEnergy: "+planetsWaitingForEnergy.length+"<br>";
	divStatus.innerHTML += "invaded: "+planetsInvaded.length;
	divStatus.innerHTML += "&nbsp;&nbsp;&nbsp;  captured: "+planetsCaptured.length;
	
	divPlanetListBlocks.innerHTML = "";
	if (planetsWaitingForBlocks.length > 0) {
		divPlanetListBlocks.innerHTML = "waiting for blocks:<br>";
		for (let p of planetsWaitingForBlocks) {
			divPlanetListBlocks.innerHTML += planetBut(p)+" ";
		}
	}
	
	divPlanetListEnergy.innerHTML = "";
	if (planetsWaitingForEnergy.length > 0) {
		divPlanetListEnergy.innerHTML = "waiting for 82% energy:<br>";
		for (let p of planetsWaitingForEnergy) {
			divPlanetListEnergy.innerHTML += planetBut(p)+" ";
		}
	}
	
	loopIsBusy = false;
}

function init() { }

function render(div) {
	div.height = "300px";
	
	divStatus = document.createElement("div");
	div.appendChild(divStatus);
	divPlanetListBlocks = document.createElement("div");
	divPlanetListBlocks.style.backgroundColor = "#006";
	div.appendChild(divPlanetListBlocks);
	divPlanetListEnergy = document.createElement("div");
	divPlanetListEnergy.style.backgroundColor = "#040";
	div.appendChild(divPlanetListEnergy);
	divLog = document.createElement("div");
	div.appendChild(divLog);
	
	interv = setInterval(loop, 90e3); // every 90 seconds
	loop();
}

function draw(ctx) {
	
}

function destroy() {
	if (interv) clearInterval(interv);
}

class Plugin {
	constructor() { init(); }
	render(div) { render(div); }
	draw(ctx) { draw(ctx); }
	destroy() { destroy(); }
}

export default Plugin;
