import Token from "../utils/Token";
import ITrasnportadora from "./ITransportadora";

export default class Transportadora implements ITrasnportadora{
    private _token: Token;
    
    authToken(): Token {
        return new Token();
    }
    send(): void {
        this._token = this.authToken();
        console.log("")
        console.log("Token de envio(identificação): " + this._token.token);
        console.log("")
        console.log("Realizando envio via Transportadora!");
    }
    recieve(): void {
        console.log("Recebendo envio via Transportadora!");
    }
}