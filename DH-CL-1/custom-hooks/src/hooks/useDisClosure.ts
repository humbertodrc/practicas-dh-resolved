import {useState} from "react";

export const useDisClosure = () => {
	const [isOpen, setIsOpen] = useState(false);

	const close = () => {
		if (isOpen) {
			setIsOpen(false);
		}
	};

	const open = () => {
		if (!isOpen) {
			setIsOpen(true);
		}
	};

	// Opcional
	// const togle = () => setIsOpen((prevState) => !prevState);

	return {
		isOpen,
		open,
		close,
		// togle,
	};
};
