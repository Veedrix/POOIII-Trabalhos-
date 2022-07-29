import IConsole from "./console/interface/IConsole";
import PlayStation from "./console/PlayStation";
import XBox from "./console/XBox";
import AdvancedPlay from "./play/AdvancedPlay";
import Play from "./play/Play";

function startGame(gameConsole: IConsole){
    console.log("Aguarde...");
    const play = new Play(gameConsole);
    play.playing();
    play.result();
}

function startAdvancedGame(gameConsole: IConsole){
    console.log("Aguarde...");
    const play = new AdvancedPlay(gameConsole);
    play.playing();
    play.result();
    play.challenge();
}
console.log("")
console.log("Normal Game")
console.log("")
startGame(new PlayStation());
startGame(new XBox());
console.log("")
console.log("Advanced Game")
console.log("")
startAdvancedGame(new PlayStation());
startAdvancedGame(new XBox());