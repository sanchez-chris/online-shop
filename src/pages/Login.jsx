import React, { useRef } from 'react';
import '../styles/Login.scss';
import logo from '../assets/logos/logo_yard_sale.svg'

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			username: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

	return (
		<div className="Login">
			<div className="Login-container">
			<h1 className="title">Login</h1>
				<img src={logo} alt="logo" className="logo" />
				<form action="/" className="form" ref={form}>
					<label htmlFor="email" className="label">Email address</label>
					<input type="text" name="email" placeholder="user@example.cm" className="input input-email" />
					<label htmlFor="password" className="label">Password</label>
					<input type="password" name="password" placeholder="*********" className="input input-password" />
					<button
						onClick={handleSubmit}
						className="primary-button login-button">
						Log in
					</button>
					<a href="online-shop/#/new-password">Forgot my password</a>
				</form>
				<div className='create-account-button'><a href="online-shop/#/create-account" className="secondary-button signup-button" >Create account</a>
</div>
			</div>
		</div >
	);
}

export default Login;
