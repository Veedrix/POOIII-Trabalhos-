import IConsole from "../console/interface/IConsole";
import IPlay from "./interface/IPlay";

export default class Play implements IPlay{

    constructor(private console: IConsole){}

    playing(): void {
        console.log("Iniciando o jogo!");
    }
    result(): void {
        console.log("************ Jogo Iniciado ************");
    }
}