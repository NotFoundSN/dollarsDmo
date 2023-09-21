import Tabla from "./Components/Tabla";
import variable from "../../const/const";

const data = variable.arenaRooms;

export default function Arena() {
	return (
		<>
			<div className="bg-purple-op w-4/5 flex flex-col mt-6 rounded-md">
				<Tabla pisos={data} />
			</div>
		</>
	);
}
