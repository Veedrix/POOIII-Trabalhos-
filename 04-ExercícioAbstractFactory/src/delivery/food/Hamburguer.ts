import { IFood } from "./interfaces/IFood";

export default class Hamburger implements IFood{
  startDelivery(): void {
    this.getEstado();
    console.log("Hamburguer: Iniciando delivery, comida quentinha...")
  }
  getEstado(): void {
    console.log("Hamburguer: Hamburguer esta pronto!")
  }

}