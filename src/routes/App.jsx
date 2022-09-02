import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import All from '../pages/All';
import Clothes from '../pages/Clothes';

import Electronics from '../pages/Electronics';
import Furnitures from '../pages/Furnitures';
import Shoes from '../pages/Shoes';
import Others from '../pages/Others';


import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
					<Route path="/online-shop" exact element={<Home />} />

					<Route path="/all" element={<All />} />
					<Route path="/clothes" element={<Clothes />} />
					<Route path="/electronics" element={<Electronics />} />
					<Route path="/furnitures" element={<Furnitures />} />
					<Route path="/shoes" element={<Shoes />} />
					<Route path="/others" element={<Others />} />

					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/password-recovery" element={<PasswordRecovery />} />
					<Route path="/send-email" element={<SendEmail />} />
					<Route path="/new-password" element={<NewPassword />} />
					<Route path="/account" element={<MyAccount />} />
					<Route path="/create-account" element={<CreateAccount/>} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/orders" element={<Orders />} />
					<Route path="*" element={NotFound} />
				</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;
