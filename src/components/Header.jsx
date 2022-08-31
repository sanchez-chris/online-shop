import React, { useState, useContext } from 'react';
import '../styles/Header.scss';
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);

	const handleToggleMenu = () => {
		if(toggleOrders == true){
			setToggleOrders(false);
		}
		setToggleMenu(!toggleMenu);
	}

	const handleToggleOrders = () => {
		if(toggleMenu == true){
			setToggleMenu(false);
		}
		setToggleOrders(!toggleOrders);
	}

	return (
		<nav>
			<img src={menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li >
						<a href="/all" >All</a>
					</li>
					<li>
						<a href="/clothes">Clothes</a>
					</li>
					<li>
						<a href="/electronics">Electronics</a>
					</li>
					<li>
						<a href="/furnitures">Furnitures</a>
					</li>
					<li>
						<a href="/shoes">Shoes</a>
					</li>
					<li>
						<a href="/others">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email"  onClick={() => handleToggleMenu()}>
						user@example.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => handleToggleOrders()}
					>
						<img src={shoppingCart} alt="shopping cart" />
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
					</li>
				</ul>
			</div>
			{toggleMenu && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;
