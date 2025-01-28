// Henter elementet med ID "container" og lagrer det i variabelen img
const img = document.getElementById("container");

// Funksjon som endrer bildet til en veldig liten størrelse
function makeSmall() {
  img.style.height = "0px"; // Setter høyden til 0
  img.style.width = "0px";  // Setter bredden til 0
}

// Funksjon som gjenoppretter bildet til en normal størrelse
function makeNormal() {
  img.style.height = "200px"; // Setter høyden til 200px
  img.style.width = "200px";  // Setter bredden til 200px
}

// Funksjon som forstørrer bildet til en stor størrelse
function makeBig() {
  img.style.height = "300px"; // Setter høyden til 300px
  img.style.width = "300px";  // Setter bredden til 300px
}

// Logger img-elementet til konsollen for å bekrefte at det er hentet riktig
console.log(img);

// Eksempel på en funksjon som returnerer `true`
function start() {
  return true; // Funksjonen er ikke koblet til annen logikk, men returnerer alltid true
}
start(); // Kaller funksjonen

// Oppretter en konstant tekstvariabel med verdien "hello world"
const greeting = "hello world";

// Logger verdien av greeting til konsollen
console.log(greeting);

// Eksempel på en if-else-setning som ville endret bakgrunnsfargen til kroppen
// hvis det ble aktivert (kommentert ut for nå):
// if (3 % 2 === 0) {
//   document.body.style.backgroundColor = "orange"; // Setter bakgrunnsfargen til oransje hvis tallet er jevnt
// } else {
//   document.body.style.backgroundColor = "blue";   // Setter bakgrunnsfargen til blå hvis tallet er odde
// }
