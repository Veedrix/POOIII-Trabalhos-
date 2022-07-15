export default class Protein{
  constructor(private _protein: string){}

  get protein(): string{
    return this._protein;
  }

  set protein(value: string){
    this._protein = value;
  }
}