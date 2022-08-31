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
					<a href="/online-shop/login" className="options-menu">Login</a>
					<a href="/createaccount" className="options-menu">Sign in</a>

				
				</li>
			</ul>
		</div>
	);
}

export default Menu;
