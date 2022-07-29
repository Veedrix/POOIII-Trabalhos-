import IConsole from "./interface/IConsole";

export default class XBox implements IConsole{
    constructor(){
        this.configureGame();
        console.log("XBox: Console Ligando!")
    }

    configureGame(): void {
        this.authToken();
        console.log("XBox: Configurando Jogo...");
    }
    authToken(): void {
        console.log("XBox: Autorizando o Console!");
    }
}