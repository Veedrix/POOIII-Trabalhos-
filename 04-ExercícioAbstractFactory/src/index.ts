import Client from "./delivery/clients/Client";
import FoodCompany from "./delivery/consts/FoodCompany";
import AiqfomeDelivery from "./delivery/factories/AiqfomeDelivey";
import IFoodDelivery from "./delivery/factories/IFoodDelivery";
import { IDeliveryFactory } from "./delivery/factories/interfaces/IDeliveryFactory";

const currentCompany = FoodCompany.IFOOD;
let factory: IDeliveryFactory;

switch (currentCompany){
  case FoodCompany.AIQFOME:
    factory = new AiqfomeDelivery;
    break;
  case  FoodCompany.IFOOD:
    factory = new IFoodDelivery;
    break;
  default:
    console.log("Companhia não definida!")
}

const cliente = new  Client(factory);
cliente.startRoute();