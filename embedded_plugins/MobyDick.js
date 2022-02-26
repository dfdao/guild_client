const planet_silver = "00003c9a0001a79de8fb5e29aca6241b62259c52778a6ba3aabfe8e048697e21";
const planet_spacetimerip = "0000d25b000278c72c6da8aac33303d01298b1d608f1980c44ca3098c5023e30";
const planet_energy = "000026100002a129b93550ffd73470da9ae9b8db6bd18d5d3a49b53a5d45a01e";

const silver = 0;
const spacetimerip = 1;
const energy = 2;

let planets = [];
planets.push(planet_silver);
planets.push(planet_spacetimerip);
planets.push(planet_energy);

let statuses = [];
statuses[0] = "";
statuses[1] = "";
statuses[2] = "";

let planetNames = [ "silver", "spacetimerip", "energy" ];

let div;
let divPlanetTable;

let intervDiv;
let intervSilver;
let intervSpacetimerip;
let intervEnergy;

function createTableHeader(table, strArr) {
	var tr = document.createElement('tr');
	for (var str of strArr) {
		var th = document.createElement('th');
		th.innerText = str;
		th.style.border = "1px solid white";
		tr.appendChild(th);
	}
	table.appendChild(tr);
}

function addEmptyTd(tr, width=null) {
	var td = document.createElement('td');
	td.innerText = "";
	td.style.border = "1px solid white"
	if (width) td.width = width+"px";
	tr.appendChild(td);
}

let addAsTdBorderWidth = 1;
function addAsTd(tr, text, width=null, color=null, center=true) {
	var td = document.createElement('td');
	td.style.border = addAsTdBorderWidth+"px solid white";
	td.innerText = text;
	if (width) td.width = width+"px";
	if (color) td.style.color = color;
	if (center) td.style["text-align"] = "center";
	tr.appendChild(td);
	return td;
}

function getMinEnergyForMove(fromPlanetId, toPlanetId) {
	let energy = df.getEnergyNeededForMove(fromPlanetId, toPlanetId, 0);
	energy *= 1.03;
	return Math.ceil(energy);
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateDiv() {
	await sleep(800);
	divPlanetTable.innerHTML = "";
	createTableHeader(divPlanetTable, [ "name", "id", "energy", "silver", "status" ]);
	for (let i=0; i<planets.length; i++) {
		let p = df.getPlanetWithId(planets[i]);
		let tr = document.createElement("tr");
		addAsTd(tr, planetNames[i]);
		addAsTd(tr, p.locationId.substr(4,5));
		addAsTd(tr, parseInt(p.energy/p.energyCap*100)+"%");
		addAsTd(tr, parseInt(p.silver/p.silverCap*100)+"%");
		addAsTd(tr, statuses[i]);
		divPlanetTable.appendChild(tr);
	}
}

let pSilver;
let pSpacetimerip;
let pEnergy;

function planetHasUnconfirmedTrans(p) {
	return (p.transactions && p.transactions.transactions && p.transactions.transactions.length > 0);
}

function getPlanets() {
	pSilver = df.getPlanetWithId(planet_silver);
	pSpacetimerip = df.getPlanetWithId(planet_spacetimerip);
	pEnergy = df.getPlanetWithId(planet_energy);
}

async function withdrawSilver() {
	getPlanets();
	if (statuses[spacetimerip] !== "") return;
	if (planetHasUnconfirmedTrans(pSpacetimerip)) return;
	if (pSpacetimerip.silver <= 0) return;
	statuses[spacetimerip] = "withdrawing";
	df.withdrawSilver(planet_spacetimerip, pSpacetimerip.silver);
	await sleep(2000);
	statuses[spacetimerip] = "";
}

async function sendSilver() {
	getPlanets();
	if (statuses[silver] !== "") return;
	if (planetHasUnconfirmedTrans(pSilver)) return;
	let silverCap = pSilver.silverCap*0.7;
	if (pSilver.silver < pSpacetimerip.silverCap && pSilver.silver < silverCap) return;
	let silverToSend = pSpacetimerip.silverCap > silverCap ? pSilver.silver : pSpacetimerip.silverCap;
	let energy = getMinEnergyForMove(planet_silver, planet_spacetimerip);
	if(energy > pSilver.energy) {
		console.log('not enough energy for silver') 
		return;
	}
	statuses[silver] = "sending";
	df.move(planet_silver, planet_spacetimerip, energy, Math.floor(silverToSend));
	await sleep(2000);
	statuses[silver] = "";
}

async function sendEnergy() {
	getPlanets();
	if (statuses[energy] !== "") return;
	if (planetHasUnconfirmedTrans(pEnergy)) return;
	if (pEnergy.energy/pEnergy.energyCap < 0.75) return;
	if (pSilver.energy/pSilver.energyCap > 0.65) return;
	console.log(`Planet energy ${Math.floor(pEnergy.energy)} vs expected ${pEnergy.energyCap*0.5}`);
	statuses[energy] = "sending";
	df.move(planet_energy, planet_silver, pEnergy.energyCap*0.5, 0);
	await sleep(2000);
	statuses[energy] = "";
}

function render(container) {
	let div = document.createElement("div");
	div.style.width = "400px";
	container.appendChild(div);
	
	divPlanetTable = document.createElement("table");
	divPlanetTable.width = "100%";
	div.appendChild(divPlanetTable);
	
	intervDiv = setInterval(updateDiv, 800);
	intervSpacetimerip = setInterval(withdrawSilver, 1000);
	intervSilver = setInterval(sendSilver, 1000);
	intervEnergy = setInterval(sendEnergy, 1000);
}

function draw(ctx) {
	
}

function destroy() {
	clearInterval(intervDiv);
	clearInterval(intervSpacetimerip);
	clearInterval(intervSilver);
	clearInterval(intervEnergy);
}

class Plugin {
	constructor() { }
	render(container) { render(container); }
	draw(ctx) { draw(ctx); }
	destroy() { destroy(); }
}

export default Plugin;