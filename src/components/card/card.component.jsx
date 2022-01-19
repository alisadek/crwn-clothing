import React from "react";

import "./card.styles.scss";

const Card = ({ children, className, style }) => {
	return (
		<div className={`card ${className}`} style={style}>
			{children}
		</div>
	);
};

export default Card;
