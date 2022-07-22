import Token from "../utils/Token";
import ICorreios from "./ICorreios";

export default class Correios implements ICorreios{
    private _token: Token;

    authToken(): Token {
        return new Token();
    }
    sendCorreios(): void {
        this._token = this.authToken();
        console.log("")
        console.log("Token de envio(identificação): " + this._token.token);
        console.log("")
        console.log("Realizando envio via Correios!");
    }
    recieveCorreios(): void {
        console.log("Recebendo envio via Correios!");
    }
}