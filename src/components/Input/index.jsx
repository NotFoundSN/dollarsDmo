const text = ({
	type,
	name,
	label,
	register,
	validation = null,
	...otherProps
}) => {
	return (
		<div className="flex flex-row w-full my-1">
			<label
				for={name}
				className="w-1/2 text-white text-[1.5rem] font-bold drop-shadow-text"
			>
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				className="w-1/2 text-center bg-purple-light border font-bold text-[1.5rem]"
				{...(validation ? register(name, validation) : register(name))}
				{...otherProps}
			/>
		</div>
	);
};

const select = ({
	name,
	label,
	list,
	register,
	validation = null,
	...otherProps
}) => {
	return (
		<div className="flex flex-row w-full my-1">
			<label
				for={name}
				className="w-1/2 text-white text-[1.5rem] font-bold drop-shadow-text"
			>
				{label}
			</label>
			<select
				name={name}
				id={name}
				className="w-1/2 text-center bg-purple-light border font-bold text-[1.5rem]"
				{...(validation ? register(name, validation) : register(name))}
				{...otherProps}
			>
				{list.map((element) => {
					return (
						<option value={element.value} className="text-center font-bold">{element.text}</option>
					);
				})}
			</select>
		</div>
	);
};

const Input = ({ type, name, label, register, validation, ...otherProps }) => {
	const inputList = {
		text: text,
		number: text,
		select: select,
	};
	const SelectedInput = inputList[type];

	return (
		<SelectedInput
			type={type}
			name={name}
			label={label}
			register={register}
			validation={validation}
			{...otherProps}
		/>
	);
};

export default Input;
