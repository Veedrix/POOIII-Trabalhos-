import { IDrink } from "./interfaces/IDrink";

export default class Beer implements IDrink{
  startDelivery(): void {
    this.getEstado();
    this.getCooler();
    console.log("Cerveja: Iniciando delivery, vai chega trincando...");
  }
  getEstado(): void {
    console.log("Cerveja: Cerveja pronta!");
  }
  getCooler(): void {
    console.log("Cerveja: Cooler pego pra manter geladinha!");
  }

}