import { IDrink } from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
  startDelivery(): void {
    this.getEstado();
    this.getCooler();
    console.log("Suco: Inciando delivery, vai chega geladinho...");
  }
  getEstado(): void {
    console.log("Suco: Suco Pronto!");
  }
  getCooler(): void {
    console.log("Suco: Pegando cooler para manter o suco geladinho!");
  }
}