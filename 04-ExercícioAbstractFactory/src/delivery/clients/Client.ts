import { IDrink } from "../drink/interfaces/IDrink";
import { IDeliveryFactory } from "../factories/interfaces/IDeliveryFactory";
import { IFood } from "../food/interfaces/IFood";

export default class Client {
  private food: IFood;
  private drink: IDrink;

  constructor(factory: IDeliveryFactory) {
    this.food = factory.createDeliveryFood();
    this.drink = factory.createDeliveryDrink();
  }

  startRoute(){
    this.food.startDelivery();
    this.drink.startDelivery();
  }
}