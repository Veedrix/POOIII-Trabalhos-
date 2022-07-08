import { IDrink } from "../../drink/interfaces/IDrink";
import { IFood } from "../../food/interfaces/IFood";

export interface IDeliveryFactory{
  createDeliveryDrink() : IDrink;
  createDeliveryFood(): IFood;
}