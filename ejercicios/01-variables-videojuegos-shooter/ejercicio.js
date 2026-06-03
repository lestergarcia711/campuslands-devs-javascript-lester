// Ejercicio 01: Variables y constantes - videojuegos shooter
// Completa el codigo siguiendo las instrucciones del README.md.

console.log("Ejercicio 01: Variables y constantes");

// Escribe tu solucion aqui.


// ====== PASO 1: DECLARACIÓN DE VARIABLES ======
//Estas variables no van a cambiar por eso se declaran como constantes (const)
const nombreJugador = "Alpha_Hunter";
const tipoArma = "Rifle de Asalto";
const capacidadCargador = 30;
//Esta tienden a cambiar durante la partida por eso se declaran como variables (let)
let municionDisponible = 30;
let puntosVida = 100;
let estadoPartida = "MENU";

// ====== creacion de  funcion para debuguear======
function revisarEstadoSistema() {
    console.log("--- AUDITORÍA DE SISTEMA DE JUEGO ---");
    console.log(`[PARTIDA] Estado actual: %c${estadoPartida}`, "color: #00ff00; font-weight: bold;");
    console.log(`[JUGADOR] Nickname: ${nombreJugador}`);
    console.log(`[VITALIDAD] Vida: ${puntosVida}/100`);
    console.log(`[ARMAMENTO] Arma: ${tipoArma} | Munición: ${municionDisponible}/${capacidadCargador}`);
    console.log("-------------------------------------");
}
revisarEstadoSistema();

//Simulacion de eventos en la partida:
// El jugador presiona "Iniciar"
estadoPartida = "EN_JUEGO";
console.log("LOG: El jugador ha entrado a la partida.");
municionDisponible = municionDisponible - 3; 
puntosVida = puntosVida - 25;

// debuguear para revisar el estado del sistema después de los eventos
console.log(`LOG INTERMEDIO: Balas restantes tras ráfaga -> ${municionDisponible}`);
console.log(`LOG INTERMEDIO: Vida restante tras impacto -> ${puntosVida}`);

// debuguear para revisar el estado del sistema después de los eventos
revisarEstadoSistema();