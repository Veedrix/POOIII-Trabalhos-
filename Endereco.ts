export default class Endereco{
  private _rua : string;
  private _numero : number;
  private _cep : number;
  private _bairro: string;
  private _cidade: string;

  constructor(rua: string, numero: number, cep:number, bairro: string, cidade: string) { 
    this._rua = rua;
    this._numero = numero;
    this._cep = cep;
    this._bairro = bairro;
    this._cidade = cidade;
  }

  public set rua(valor : string) {
    this._rua = valor;
  }
  
  public get rua() : string {
    return this._rua;
  }  

  public set numero(valor : number) {
    this._numero = valor;
  }

  public get numero() : number {
    return this._numero;
  }
  
  public set cep(valor : number) {
    this._cep = valor;
  }

  get cep() : number {
    return this._cep;
  }
  
  public set bairro(valor : string){
    this._bairro = valor;
  }
  
  public get bairro() : string {
    return this._bairro;
  }

  public set cidade(valor : string) {
    this._cidade = valor;
  }
  
  public get cidade() : string {
    return this._cidade;
  }  
}