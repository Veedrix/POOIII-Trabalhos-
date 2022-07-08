import { IFood } from "./interfaces/IFood";

export default class HotDog implements IFood{
  startDelivery(): void {
    this.getEstado();
    console.log("Cachorro Quente: Começando delivery, comida quentinha...");
  }
  getEstado(): void {
    console.log("Cachorro Quente: Cachorro Quente está pronto!");
  }

}