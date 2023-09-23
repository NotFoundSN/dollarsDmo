import { useEffect, useState } from "react";
import { Input, Button } from "@Components";

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

const ClonTable = ({ data = null }) => {
	const clones = ["", 0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
	const niveles = [
		1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140,
	];
	console.log(data);
	if (data == null) {
		return <></>;
	} else {
		return (
			<>
				<table className="bg-purple-op my-8 p-4 rounded-lg w-4/5 text-center drop-shadow-sm">
					<thead className="border border-purple-blue">
						<tr>
							{clones.map((element, index) => {
								return (
									<th
										key={`titulo-${index}`}
										className="border-4 border-purple-blue"
									>
										<span className="text-white text-[1.5rem] font-bold drop-shadow-text">
											{element === "" ? "nivel" : element}
										</span>
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody className="border border-purple-blue">
						{niveles.map((level, indexL) => {
							return (
								<tr
									key={`fila-${indexL}`}
									className="border last:border-b-4 border-purple-blue"
								>
									{clones.map((clon, indexC) => {
										return (
											<td
												key={`columna-${indexC}`}
												className="border border-purple-blue first:border-4 last:border-r-4"
											>
												<span className="text-white text-[1.5rem] font-bold drop-shadow-text">
													{clon === ""
														? level
														: (
																(clon +
																	level +
																	250) *
																((data.hatchPhase *
																	data.sameType *
																	data.dataType) /
																	1400)
														  ).toFixed(2)}
												</span>
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</>
		);
	}
};

export default ClonTable;
