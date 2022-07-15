import SanduicheBuilder from "./builder/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder: SanduicheBuilder = new SanduicheBuilder();
const director: Director = new Director(builder);

console.log("");
director.constructSanduicheVegano();
let vegano: Sanduiche = builder.getSanduiche();
console.log("Criando um sanduiche do tipo: " + vegano.sanduicheType);
console.log("Tipo de Pão: " + vegano.bread);
console.log("Saladas: " + vegano.salad.salad);
console.log("Molhos: ");
for(let i=0 ; i <vegano.sauces.length; i++){
  console.log(" " + vegano.sauces[i].sauces);
}
builder.reset();
console.log("");

director.constructSanduicheNormal();
let normal: Sanduiche = builder.getSanduiche();
console.log("Criando um sanduiche do tipo: " + normal.sanduicheType);
console.log("Tipo de Pão: " + normal.bread);
console.log("Saladas: " + normal.salad.salad);
console.log("Proteinas: " + normal.protein.protein);
console.log("Molhos: ");
for(let i=0 ; i <normal.sauces.length; i++){
  console.log(" " + normal.sauces[i].sauces);
}
builder.reset();
console.log("");

director.constructSanduicheCarne();
let carne: Sanduiche = builder.getSanduiche();
console.log("Criando um sanduiche do tipo: " + carne.sanduicheType);
console.log("Tipo de Pão: " + carne.bread);
console.log("Proteinas: " + carne.protein.protein);
console.log("Molhos: ");
for(let i=0 ; i <carne.sauces.length; i++){
  console.log(" " + carne.sauces[i].sauces);
}
builder.reset();