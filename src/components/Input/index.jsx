const text = ({
	type,
	name,
	label,
	register,
	validation = null,
	errors,
	...otherProps
}) => {
	return (
		<div className="flex flex-row w-full my-1">
			<label
				htmlFor={name}
				className="w-1/2 text-white text-[1.5rem] font-bold drop-shadow-text"
			>
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				className={`w-1/2 text-center bg-purple-light border ${errors[name] && "border-red"} font-bold text-[1.5rem]`}
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
				htmlFor={name}
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
				{list.map((element, index) => {
					return (
						<option value={element.value} className="text-center font-bold" key={`select-${name}-${index}`}>{element.text}</option>
					);
				})}
			</select>
		</div>
	);
};

const Input = ({ type, name, label, register, validation, errors, ...otherProps }) => {
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
			errors={errors}
			{...otherProps}
		/>
	);
};

export default Input;
