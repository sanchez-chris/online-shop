import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				
				<li>
					<a href="/online-shop/account">My account</a>
				</li>
				<li className="options-box">
					<a href="/online-shop/login" className="options-menu">Login</a>
					<a href="/online-shop/create-account" className="options-menu">Create account</a>

				
				</li>
			</ul>
		</div>
	);
}

export default Menu;
