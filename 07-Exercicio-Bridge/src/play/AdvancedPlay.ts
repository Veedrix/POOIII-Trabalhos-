import IConsole from "../console/interface/IConsole";
import Play from "./Play";

export default class AdvancedLive extends Play{
    constructor(console: IConsole){
        super(console);
    }
    challenge(): void{
        console.log("Desafios Ativados!")
    };
}