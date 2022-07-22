import TransportadoraAdapter from "./Adapters/TransportadoraAdapter";
import Correios from "./correios/Correios";
import ICorreios from "./correios/ICorreios";
import Transportadora from "./transportadora/Transportadora";

const delivery : ICorreios = new TransportadoraAdapter(new Transportadora);
//const delivery1 : ICorreios = new Correios();

delivery.sendCorreios();
delivery.recieveCorreios();

//delivery1.sendCorreios();
//delivery1.recieveCorreios();