import React, { useState, useContext } from 'react';
import '../styles/Header.scss';
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '../assets/icons/icon_menu.svg';
import logo from '../assets/logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import shoppingCart from '../assets/icons/icon_shopping_cart.svg';
import "../styles/MenuMobile.scss";


const Header = () => {
	const [toggleMenuUser, setToggleMenuUser] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext);
	const [toggleMenuMobile, setToggleMenuMobile] = useState(false);


	const handleToggleMenuUser = () => {
		if(toggleOrders === true){
			setToggleOrders(false);
		}
		if(toggleMenuMobile === true){
			setToggleMenuMobile(false);
		}

		setToggleMenuUser(!toggleMenuUser);
	}

	const handleToggleOrders = () => {
		if(toggleMenuUser === true){
			setToggleMenuUser(false);
		}
		if(toggleMenuMobile === true){
			setToggleMenuMobile(false);
		}
		setToggleOrders(!toggleOrders);
	}

	const handleToggleMenuMobile = () => {
		if(toggleOrders === true){
			setToggleOrders(false);
		}
		if(toggleMenuUser === true){
			setToggleMenuUser(false);
		}

		setToggleMenuMobile(!toggleMenuMobile);
	}



	const MenuMobile = () => {
		return (
		  <div class="mobile-menu">
			<ul>
			  <li>
			  <strong>CATEGORIES</strong>
			  </li>
			  <div>
			  <li onClick={() => handleToggleMenuMobile()}>
				<a href="/online-shop/#/all" >All</a>
			  </li>
			  </div>
			  <li onClick={() => handleToggleMenuMobile()}>
				<a href="/online-shop/#/clothes" >Clothes</a>
			  </li>
			  <li onClick={() => handleToggleMenuMobile()}>
				<a href="/online-shop/#/electronics" >Electronics</a>
			  </li>
			  <li onClick={() => handleToggleMenuMobile()}>
				<a href="/online-shop/#/furnitures" >Furnitures</a>
			  </li>
			  <li onClick={() => handleToggleMenuMobile()}>
				<a href="/online-shop/#/shoes">Shoes</a>
			  </li>
			  <li onClick={() => handleToggleMenuMobile()}>
				<a href="/online-shop/#/others">Other</a>
			  </li>
			</ul>
	  
			<ul>
			  <li onClick={() => handleToggleMenuMobile()}>
				<a href="/online-shop/#/account">My account</a>
			  </li>
			</ul>
	  
			<ul>
			  <li onClick={() => handleToggleMenuMobile()}>
				<a href="/online-shop/#/login" class="login">
				  Login
				</a>
			  </li>
			  <li onClick={() => handleToggleMenuMobile()}>
				<a href="/online-shop/#/create-account" class="create-account">
				  Create Account
				</a>
			  </li>
			</ul>
		  </div>
		);
	  };
	  


	/*
	Message for my future me: when you want to redo the hashrouter to deploy to 
	gh pages (and you will want to) you have to:
	
	1. Add the add /project_name/#/page_name in the href of all links (tag a)

	2. Make sure you have this struc in your App.jsx
	
		<Hashouter>
			<Routes>
				<Route path="/online-shop" exact element={<Home />} />
				<Route path='/all' element={<All />} />
				<Route path="/clothes" element={<Clothes />} />
				<Route path="/electronics" element={<Electronics />} />
			</Routes>
		</HashRouter>
	*/

	return (
		<nav>
			
			<div className="menu-container"
>
				<li
					className="menu"
					onClick={() => handleToggleMenuMobile()}
				>
					<img src={menu} alt="menu" className="menu" />
				</li>
			</div>
			<div className='logo-image-container-element'>
			<a href='/online-shop'><img src={logo} alt="logo" className="nav-logo" /></a>

			</div>
			<div className="navbar-computer">
				<div className="navbar-left">
					<a href='/online-shop' className='logo-image-container'><img src={logo} alt="logo" className="nav-logo" /></a>
					<ul>
						<li>
							<a href="/online-shop/#/all">All</a>
						</li>
						<li>
							<a href="/online-shop/#/clothes">Clothes</a>
						</li>
						<li>
							<a href="/online-shop/#/electronics">Electronics</a>
						</li>
						<li>
							<a href="/online-shop/#/furnitures">Furnitures</a>
						</li>
						<li>
							<a href="/online-shop/#/shoes">Shoes</a>
						</li>
						<li>
							<a href="/online-shop/#/others">Others</a>
						</li>
					</ul>
				</div>
				<div className="navbar-right">
					<ul>
						<li className="navbar-email"  onClick={() => handleToggleMenuUser()}>
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
			</div>
			{toggleMenuUser && <Menu />}
			{toggleOrders && <MyOrder />}
			{toggleMenuMobile && <MenuMobile />}
		</nav>
	);
}

export default Header;
