import React, {ReactNode, useState} from "react";
export interface InputInterface {
	render: (value: number) => ReactNode;
}

const Input: React.FC<InputInterface> = (props) => {
	const [value, setValue] = useState(0);

	return (
		<>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(parseInt(e.target.value || "0"))}
				placeholder="Temperatura en C°"
			/>
			{props.render(value)}
		</>
	);
};

export default Input;
