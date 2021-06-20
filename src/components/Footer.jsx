import React from "react";
import footerLogo from "./../images/logo.png";
import "./../SASS/components/footer.scss";
const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__logo">
				<img className="footer__logo--image" src={footerLogo} />
			</div>
			<div className="footer__text">
				<ul>
					<li>ECOMMERCE</li>
					<li>ECOMMERCE</li>
					<li>ECOMMERCE</li>
					<li>ECOMMERCE</li>
					<li>ECOMMERCE</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
