import React from "react";
import "./styles/Card.css";

type ChildrenProps = {
	children?: React.ReactNode;
	alt?: string;
	src?: string;
};

const Card = ({children}: ChildrenProps) => {
	return (
		<article>
			{children}
		</article>
	);
};

console.log(Card);

Card.Body = function CardBody({children}: ChildrenProps) {
	return <div>{children}</div>;
};

Card.Title = function CardTitle({children}: ChildrenProps) {
	return <h2>{children}</h2>;
};

Card.Text = function CardText({children}: ChildrenProps) {
	return <p>{children}</p>;
};

Card.Image = function CardImage({src, alt}: ChildrenProps) {
	return <img src={src} alt={alt} />;
};

Card.Status = function CardStatus({children}: ChildrenProps) {
	return <h3>{children}</h3>;
};

export default Card;
