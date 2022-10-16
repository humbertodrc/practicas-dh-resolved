import { ComponentType } from 'react';


export default function WithColorSwap<T extends {}>(Component: ComponentType<T>) {
	return (props: T) => {
		return (
			<div className="color-swap">
				<Component {...props} />
			</div>
		);
	}

};


