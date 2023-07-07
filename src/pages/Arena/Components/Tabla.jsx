import Fila from "./Fila";

export default function Tabla({ pisos }) {
	return (
		<>
			<div className="flex flex-row justify-evenly w-full bg-purple-blueOp rounded-t-xl h-14 items-center">
				<div className=" text-white w-1/3 text-center text-3xl font-bold drop-shadow-text">
					<b>Piso</b>
				</div>
				<div className="text-white w-2/3 text-center text-3xl font-bold drop-shadow-text">
					<b>Digimons</b>
				</div>
			</div>
			{pisos.map((piso, index) => (
				<Fila data={piso} key={`fila-${index}`} />
			))}
		</>
	);
}
