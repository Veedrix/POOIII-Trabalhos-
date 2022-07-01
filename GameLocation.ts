import IItens from "./Itens/Interface/IItens";
import { Location } from "./Location";
import Game from './Itens/Game';

export default class GameLocation extends Location{

    protected createItem(): IItens {
        return new Game();
    }
}
