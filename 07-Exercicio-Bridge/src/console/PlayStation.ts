import IConsole from "./interface/IConsole";

export default class PlayStation implements IConsole{
    
    constructor(){
        this.configureGame();
        console.log("PlayStation: Console Ligando!")
    }

    configureGame(): void {
        console.log("PlayStation: Configurando Jogo...");
    }
    
    authToken(): void {
        console.log("PlayStation: Autorizando o Console!");
    }

}