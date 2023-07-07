import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@Components";

const tablaClones = [
	[3, 15, 2, 12, 2],
	[6, 30, 4, 24, 4],
	[9, 45, 6, 36, 6],
	[14, 70, 9, 56, 9],
	[19, 95, 12, 76, 12],
	[24, 120, 15, 96, 15],
	[34, 170, 21, 136, 19],
	[44, 220, 27, 176, 23],
	[54, 270, 33, 216, 27],
	[69, 345, 42, 276, 31],
	[84, 420, 51, 336, 35],
	[99, 495, 60, 396, 39],
	[114, 570, 69, 456, 44],
	[129, 645, 78, 516, 49],
	[144, 720, 87, 596, 54],
];

export default function Clones() {
	const {
		register,
		watch,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const calcularClon = () => {
		/*tipoClon = document.getElementById("tipoClon");
		const cantClon = document.getElementById("cantClon");
		const clonBase = document.getElementById("clonBase");
		const clonClonado = document.getElementById("clonClonado");*/
		//setClones(((clonClonado.value / clonBase.value) * 100).toFixed(2));
		//setEspera(tablaClones[cantClon.value][tipoClon.value]);
	};

	const typeClonList = [
		{ value: 0, text: "Ataque" },
		{ value: 1, text: "Critico" },
		{ value: 2, text: "Bloqueo" },
		{ value: 3, text: "Evasion" },
		{ value: 4, text: "Vida" },
	];
	const cantClonList = [
		{ value: 0, text: "1" },
		{ value: 1, text: "2" },
		{ value: 2, text: "3" },
		{ value: 3, text: "4" },
		{ value: 4, text: "5" },
		{ value: 5, text: "6" },
		{ value: 6, text: "7" },
		{ value: 7, text: "8" },
		{ value: 8, text: "9" },
		{ value: 9, text: "10" },
		{ value: 10, text: "11" },
		{ value: 11, text: "12" },
		{ value: 12, text: "13" },
		{ value: 13, text: "14" },
		{ value: 14, text: "15" },
	];

	return (
		<>
			<div className=" bg-purple-op mt-8 p-4 rounded-lg w-4/5 max-w-xl">
				<div className="">
					<Input
						type="select"
						name="typeClon"
						label="Tipo de clon"
						list={typeClonList}
					/>
					<Input
						type="select"
						name="cantClon"
						label="Cantidad de clones"
						list={cantClonList}
					/>
					<Input type="text" name="clonBase" label="Stat base" />
					<Input
						type="text"
						name="clonClonado"
						label="Stat clonado"
					/>
					<div className="flex flex-row justify-center">
						<Button name="Calcular" />
					</div>
				</div>
				{/*clones > 0 ? (
						<div className="fondo">
									<b className="textoBlanco">
										{esperado == clones
											? "Perfecto"
											: `Estas un ${(
													100 -
													(clones * 100) / esperado
											  ).toFixed(
													2
											  )}% por debajo del perfecto`}
									</b>
									<b className="textoBlanco">
										Tenes {clones} de {esperado} que es el
										perfecto
									</b>
						</div>
					) : (
						""
					)*/}
			</div>
		</>
	);
}
