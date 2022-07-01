import IItens from "./Itens/Interface/IItens";
import { Location } from "./Location";
import Movie from './Itens/Movie';

export default class MovieLocation extends Location{
    protected createItem(): IItens {
        return new Movie();
    }

}
