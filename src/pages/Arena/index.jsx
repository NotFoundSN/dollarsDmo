import Tabla from "./Components/Tabla";
import variable from "../../const/const";

const data = variable.arenaRooms;

const pruebaDiego = () => {
	fetch("https://wsrfa.sannicolasciudad.gob.ar/prb/cors.php")
		.then((response) => response.json())
		.then((data) => console.log(data));
};

export default function Arena() {
	return (
		<>
			<div className="bg-purple-op w-4/5 flex flex-col mt-6 rounded-md">
				<button onClick={pruebaDiego}>probar cosa</button>
				<Tabla pisos={data} />
			</div>
		</>
	);
}
