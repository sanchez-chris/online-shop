import React from 'react';
import '../styles/NewPassword.scss';
import logo from '../assets/logos/logo_yard_sale.svg'

const NewPassword = () => {
	return (
		<div className="NewPassword">
			<div className="NewPassword-container">
				<img src={logo} alt="logo" className="logo" />
				<h1 className="title">Create a new password</h1>
				<p className="subtitle">Enter a new password for your account</p>
				<form action="/" className="form">
					<label for="password" className="label">Password</label>
					<input type="password" id="password" placeholder="*********" className="input input-password" />
					<label for="new-password" className="label">Password</label>
					<input type="password" id="new-password" placeholder="*********" className="input input-password" />
					
				</form>
				<button className="confirm-button">
					<a className="confirm-text" href="#/checkout">Confirm</a>
				</button>
			
			</div>
		</div>
	);
}

export default NewPassword;
