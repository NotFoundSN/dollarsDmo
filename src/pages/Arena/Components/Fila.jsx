export default function Fila({ data }) {
	return (
		<>
			<div className="flex flex-row justify-evenly w-full h-12 items-center border-t border-purple-blue">
				<div className="text-white w-1/3 text-center text-2xl font-bold drop-shadow-text">
					{data.piso}
				</div>
				<div className="text-white w-2/3 text-center text-2xl font-bold drop-shadow-text">
					{data.digimons.map((digi, index) => {
						return (
							<b key={`digimon-${index}-piso-${data.piso}`}>
								{digi}
							</b>
						);
					})}
				</div>
			</div>
		</>
	);
}
