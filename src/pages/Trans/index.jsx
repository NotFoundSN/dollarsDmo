import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "@Components";
import { ClonTable } from "./components";

const clones = ["", 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
const niveles = [
	1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
];
//let Hatch = tam.value * idem.value;

const columns = [
	{
		title: "",
		dataIndex: "level",
		key: "level",
	},
	{
		title: "0",
		dataIndex: "0",
		key: "0",
	},
	{
		title: "6",
		dataIndex: "6",
		key: "6",
	},
	{
		title: "12",
		dataIndex: "12",
		key: "12",
	},
	{
		title: "18",
		dataIndex: "18",
		key: "18",
	},
	{
		title: "24",
		dataIndex: "24",
		key: "24",
	},
	{
		title: "30",
		dataIndex: "30",
		key: "30",
	},
	{
		title: "36",
		dataIndex: "36",
		key: "36",
	},
	{
		title: "42",
		dataIndex: "42",
		key: "42",
	},
	{
		title: "48",
		dataIndex: "48",
		key: "48",
	},
	{
		title: "54",
		dataIndex: "54",
		key: "54",
	},
	{
		title: "60",
		dataIndex: "60",
		key: "60",
	},
];

/*(Clone + Level + 250) * Hatch Phase * Data Type / 1400=Transcendence Percent*/
/*Per clone: 5, Per level: 1, Base: 250, Data Type: 1 for Low, 1.6 for Mid, Total experience required: 140,000*/
//valor = ((clones[j] * 5) + (niveles[i]) + 250) * Hatch * tipo.value / 1400;
//linea += '<td>' + valor.toFixed(2) + '</td>';

export default function Trans() {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const [digiInfo, setDigiInfo] = useState(null);
	const onSubmit = (data) => {
		setDigiInfo({
			dataType: parseFloat(data.dataType),
			hatchPhase: parseInt(data.hatchPhase),
			sameType: parseInt(data.sameType),
		});
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="bg-purple-op mt-8 p-4 rounded-lg w-4/5 max-w-xl"
			>
				<Input
					type="select"
					name="dataType"
					label="Tipo de chip"
					register={register}
					list={[
						{ value: 1, text: "Low" },
						{ value: 1.6, text: "High" },
					]}
				/>
				<Input
					type="select"
					name="hatchPhase"
					label="Tamaño del digimon"
					register={register}
					list={[
						{ value: 1, text: "3/5" },
						{ value: 10, text: "4/5" },
						{ value: 40, text: "5/5" },
					]}
				/>
				<Input
					type="select"
					name="sameType"
					label="Misma especie"
					register={register}
					list={[
						{ value: 1, text: "No" },
						{ value: 3, text: "Si" },
					]}
				/>
				<div className="flex flex-row justify-center">
					<Button name="Calcular" />
				</div>
			</form>

			<ClonTable data={digiInfo} />
		</>
	);
}
