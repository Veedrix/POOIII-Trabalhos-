import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";
import Sanduiche from "../products/Sanduiche";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder {
  private sanduiche = new Sanduiche(); 

  reset(): void {
    this.sanduiche = new Sanduiche();
  }
  getSanduiche(): Sanduiche {
    return this.sanduiche;
  }
  addSauces(sauces: Sauces) {
    this.sanduiche.addSauces(sauces);
  }
  setSanduicheType(value: SanduicheType) {
    this.sanduiche.sanduicheType = value;
  }
  setBread(bread: Bread) {
    this.sanduiche.bread = bread;
  }
  setProtein(protein: Protein) {
    this.sanduiche.protein = protein;
  }
  setSalad(salad: Salad) {
    this.sanduiche.salad = salad;
  }
}