import React from 'react';
import '../styles/Menu.scss';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<a href="/">My orders</a>
				</li>
				<li>
					<a href="/myacccount">My account</a>
				</li>
				<li className="options-box">
					<a href="/Login" className="options-menu">Login</a>
					<a href="/create-account" className="options-menu">Create account</a>

				
				</li>
			</ul>
		</div>
	);
}

export default Menu;
