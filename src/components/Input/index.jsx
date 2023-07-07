const text = ({ type, name, label, ...otherProps }) => {
	return (
		<div className="flex flex-row w-full my-1">
			<label for={name} className="w-1/2 text-white text-[1.5rem] font-bold drop-shadow-text">
				{label}
			</label>
			<input
				type={type}
				name={name}
				id={name}
				className="w-1/2 text-center bg-purple-light"
				{...otherProps}
			/>
		</div>
	);
};

const select = ({ name, label, list, ...otherProps }) => {
	return (
		<div className="flex flex-row w-full my-1">
			<label for={name} className="w-1/2 text-white text-[1.5rem] font-bold drop-shadow-text">
				{label}
			</label>
			<select
				name={name}
				id={name}
				className="w-1/2 text-center bg-purple-light"
				{...otherProps}
			>
				{list.map((element) => {
					return (
						<option value={element.value}>{element.text}</option>
					);
				})}
			</select>
		</div>
	);
};

const Input = ({ type, name, label, ...otherProps }) => {
	const inputList = {
		text: text,
		number: text,
		select: select,
	};
	const SelectedInput = inputList[type];

	return (
		<SelectedInput type={type} name={name} label={label} {...otherProps} />
	);
};

export default Input;
