import { ComponentType } from 'react';


// export default function WithColorSwap<T extends {}>(Component: ComponentType<T>) {
// 	return (props: T) => {
// 		return (
// 			<div className="color-swap">
// 				<Component {...props} />
// 			</div>
// 		);
// 	}

// };

export default function WithColorSwap<T extends {}>(WrapperComponent: ComponentType<T>) {

	return function Component(props: T) {
	
		return (
			<div className='color-swap'>
				<WrapperComponent {...props} />
			</div>

		)
	
	}
}


