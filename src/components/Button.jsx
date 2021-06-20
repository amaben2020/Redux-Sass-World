import React from "react";
import "./../SASS/components/button.scss";
const Button = (props) => {
	return (
		<div className="button">
			<button
				style={{
					// background: `${props.color}`,
					padding: `${props.large}` ? "1rem 2rem" : "1rem 1.8rem",
				}}
				className="button-btn"
			>
				{props.name}
			</button>{" "}
		</div>
	);
};

export default Button;
