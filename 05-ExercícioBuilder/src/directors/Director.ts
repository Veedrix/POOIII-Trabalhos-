import IBuilder from "../builder/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauces from "../components/Sauces";

export default class Director{
  constructor(private builder: IBuilder){}

  constructSanduicheVegano(){
    this.builder.setSanduicheType(SanduicheType.VEGANO);
    this.builder.setBread(Bread.INTEGRAL);
    this.builder.setSalad(new Salad("Alface, Rucula, Tomate e Oregano"));
    this.builder.addSauces(new Sauces("Barbecue "));
    this.builder.addSauces(new Sauces("Mostarda "));
    this.builder.addSauces(new Sauces("Chipotle "));
  }

  constructSanduicheNormal(){
    this.builder.setSanduicheType(SanduicheType.NORMAL);
    this.builder.setBread(Bread.DELEITE);
    this.builder.setSalad(new Salad("Alface, Rucula e tomate"));
    this.builder.setProtein(new Protein("150g nugget de Frango"))
    this.builder.addSauces(new Sauces("Parmesão"));
    this.builder.addSauces(new Sauces("Mostarda e Mel"));
  }

  constructSanduicheCarne(){
    this.builder.setSanduicheType(SanduicheType.CARNE);
    this.builder.setBread(Bread.MULTIGRAOS);
    this.builder.setProtein(new Protein("100g carne assada, 100g amondega, 100g calabresa"))
    this.builder.addSauces(new Sauces("Parmesão"));
    this.builder.addSauces(new Sauces("Chipotle"));
    this.builder.addSauces(new Sauces("Mostarda e Mel"));
    this.builder.addSauces(new Sauces("Barbecue"));
  }
}