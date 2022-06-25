import Endereco from "./Endereco";
import Usuario from "./Usuario";
import { Sexo } from "./Utils";

let sexo : Sexo;
let endereco : Endereco;
let user : Usuario;

endereco = new Endereco("Waldemar Moss", 476, 85053300, "industrial", "Guarapuava");
sexo = Sexo.MASCULINO;

user = new Usuario("Vitor Siqueira", 12345678910, 1212312354, sexo, endereco);
console.log(user);

endereco = new Endereco("Alto da XV", 5146, 40221489, "Vila Nova", "São Gonçalo do Amarante");
sexo = Sexo.INDEFINIDO;

user = new Usuario("Maubi da Silva", 48717487072, 317612384, sexo, endereco);
console.log(user);