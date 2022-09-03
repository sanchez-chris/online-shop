import React from 'react';
import '../styles/MyAccount.scss';
import Emoji from '../components/Emoji';
/*
How works here Emoji Component: Just copy and paste it as a symbol.
*/


const MyAccount = () => {
	return (
		<div className="MyAccount">
			<div className="MyAccount-container">
				<h1 className="title">My account</h1>
				<form action="/" className="form">
					<div>
						<label for="name" className="label">Name</label>
						<p className="value">Chris Sánchez</p>
						<label for="email" className="label">Email</label>
						<p className="value">made with <Emoji symbol="❤️"/></p>
						<label for="password" className="label">Password</label>
						<p className="value">*********</p>
					</div>
				</form>
				<button className="edit-button">
						<a className="edit-text" href="#/checkout">Edit</a>
				</button>
			</div>
		</div>
	);
}

export default MyAccount;
