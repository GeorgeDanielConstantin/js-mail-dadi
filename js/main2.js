const playerOne = Math.floor(Math.random() * 6) +1;
const playerCpu = Math.floor(Math.random() * 6) + 1;

console.log("Numero cpu", playerCpu);
console.log("Il tuo numero", playerOne);

if (playerCpu < playerOne) {
    console.log("Hai vinto")
} else if (playerCpu > playerOne) {
    console.log("Hai perso");
} else {
    console.log("Hai pareggiato");
}