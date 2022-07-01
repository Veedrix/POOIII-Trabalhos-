import GameLocation from "./Location/GameLocation";
import { Location } from "./Location/Location";
import MovieLocation from "./Location/MovieLocation";

declare var process;

let location : Location;

if(process.argv.includes("--Movie")){
    location = new MovieLocation();
}else if(process.argv.includes("--Game")){
    location = new GameLocation();
}else{
    console.error("Selecione um tipo de locação")
}

if(location!){
    location.starItem();
}
